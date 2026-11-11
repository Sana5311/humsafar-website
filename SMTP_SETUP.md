# Humsafar Contact Form — Node.js + Hostinger SMTP

## 1. Install dependencies

From the project root:

```bash
npm install
```

## 2. Configure the backend

Copy `.env.example` to `.env` and set `SMTP_PASS` to the **new mailbox password** for `Ali@robustwebsolution.com`.

The supplied configuration uses Hostinger SMTP:
- Host: `smtp.hostinger.com`
- Port: `465` (SSL)
- Username: `Ali@robustwebsolution.com`

`CONTACT_TO` is the inbox that receives contact submissions. It is currently set to the same mailbox.

Never commit `.env` or put SMTP credentials in React/Vite frontend files.

## 3. Run locally

Open a terminal in the project root and run the frontend:

```bash
npm run dev
```

Open a second terminal in the project root and run the API:

```bash
npm run server
```

Frontend: `http://localhost:5173`
API health check: `http://localhost:5000/api/health`

## 4. Deploy

Deploy the `server` directory as a Node.js service on your hosting provider and set the environment variables from `.env.example` in the hosting dashboard. Set `CLIENT_ORIGIN` to the exact public website origin (for example `https://your-domain.com`).

If the API is hosted on a different domain, set `VITE_API_BASE_URL` in the frontend build environment to the API origin, without a trailing slash. Rebuild and redeploy the frontend.

## Notes

- The contact endpoint validates fields, limits request size, applies rate limiting and uses CORS.
- Visitor messages are delivered to `CONTACT_TO`; replies go to the visitor through the email's Reply-To field.
- A successful form response is shown only after SMTP accepts the message.
- If SMTP delivery fails, check the Node server logs and Hostinger mailbox SMTP settings.
