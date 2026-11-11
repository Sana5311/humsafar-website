import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import rateLimit from 'express-rate-limit'
import nodemailer from 'nodemailer'

const app = express()
const PORT = Number(process.env.PORT || 5000)
const allowedOrigins = (process.env.CLIENT_ORIGIN || 'http://localhost:5173')
    .split(',')
    .map((origin) => origin.trim())
    .filter(Boolean)

app.use(helmet())
app.use(cors({
    origin(origin, callback) {
        // Allow requests without an Origin header
        if (!origin) {
            return callback(null, true)
        }

        // Allow configured website origins
        if (allowedOrigins.includes(origin)) {
            return callback(null, true)
        }

        // Allow localhost on any port during development only
        const isLocalhost =
            /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)

        if (process.env.NODE_ENV !== 'production' && isLocalhost) {
            return callback(null, true)
        }

        console.log('Blocked CORS origin:', origin)
        return callback(new Error('Origin not allowed by CORS'))
    },
}))
app.use(express.json({ limit: '20kb' }))
app.use('/api/contact', rateLimit({
    windowMs: 15 * 60 * 1000,
    limit: 5,
    standardHeaders: 'draft-7',
    legacyHeaders: false,
    message: { message: 'Too many messages. Please try again later.' },
}))

app.get('/api/health', (_req, res) => res.json({ status: 'ok' }))

app.post('/api/contact', async(req, res) => {
    const { name, email, phone = '', topic, message } = req.body || {}
    const clean = (value, max) => typeof value === 'string' ? value.trim().slice(0, max) : ''

    const safeName = clean(name, 100)
    const safeEmail = clean(email, 254)
    const safePhone = clean(phone, 30)
    const safeTopic = clean(topic, 100)
    const safeMessage = clean(message, 5000)

    if (!safeName || !safeEmail || !safeTopic || !safeMessage) {
        return res.status(400).json({ message: 'Please complete all required fields.' })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(safeEmail)) {
        return res.status(400).json({ message: 'Please enter a valid email address.' })
    }
    if (/[\r\n]/.test(safeEmail)) {
        return res.status(400).json({ message: 'Invalid email address.' })
    }

    const requiredEnv = ['SMTP_HOST', 'SMTP_PORT', 'SMTP_USER', 'SMTP_PASS', 'CONTACT_TO']
    const missing = requiredEnv.filter((key) => !process.env[key])
    if (missing.length) {
        console.error('Missing SMTP configuration:', missing.join(', '))
        return res.status(503).json({ message: 'Email service is not configured yet.' })
    }

    try {
        const port = Number(process.env.SMTP_PORT)
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port,
            secure: port === 465,
            auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
        })

        await transporter.sendMail({
            from: { name: 'Humsafar Website', address: process.env.SMTP_USER },
            to: process.env.CONTACT_TO,
            replyTo: { name: safeName, address: safeEmail },
            subject: `[Humsafar Contact] ${safeTopic}`,
            text: [
                `Name: ${safeName}`,
                `Email: ${safeEmail}`,
                `Mobile: ${safePhone || 'Not provided'}`,
                `Topic: ${safeTopic}`,
                '',
                'Message:',
                safeMessage,
            ].join('\n'),
        })

        return res.status(200).json({ message: 'Message sent successfully.' })
    } catch (error) {
        console.error('Contact email delivery failed:', error.message)
        return res.status(502).json({ message: 'Unable to send your message right now.' })
    }
})

app.listen(PORT, () => {
    console.log(`Humsafar API listening on port ${PORT}`)
})