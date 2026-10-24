import { motion } from 'framer-motion'
import { CircleCheck, Clock, MessageSquareWarning } from 'lucide-react'
import { PageHero, SectionHeading } from '../components/ui'
import LegalContact from '../components/LegalContact'
import { ContactSection } from './DownloadPage'
import { fadeUp, inView } from '../lib/site'

const responseTimes = [
  ['General questions & account help', 'Reply within 2 working days'],
  ['Payments & Premium membership', 'Reply within 2 working days'],
  ['Reports about a member or safety concern', 'Reviewed on priority, usually within 24 hours'],
  ['Privacy requests & formal complaints', 'Acknowledged within 24 hours, resolved within 15 days'],
]

const complaintSteps = [
  'Report the member or content in the app first, using Report on their profile or in the chat.',
  'Email us with your profile ID, the other member’s profile name or ID, what happened, and screenshots if you have them.',
  'We acknowledge your complaint within 24 hours and keep you updated by email.',
  'We aim to resolve the complaint within 15 days and tell you what action was taken.',
  'Not satisfied with the outcome? Write to our Grievance Officer, who will review the case again.',
]

export default function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact"
        title="Talk to"
        script="the Humsafar team."
        text="Questions about your account, membership, privacy or safety? Send us a message and our team will get back to you."
      />

      <ContactSection />

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="What to expect"
            title="Response times &"
            script="complaints."
            text="Our support team works Monday to Saturday. Here is how quickly you can expect to hear from us."
          />

          <div className="mt-14 grid gap-6 lg:grid-cols-2">
            <motion.div {...inView} variants={fadeUp} className="rounded-3xl border border-accent/30 bg-background p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-accent">
                  <Clock className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-primary-dark">Response times</h3>
              </div>
              <ul className="mt-6 divide-y divide-accent/20">
                {responseTimes.map(([topic, time]) => (
                  <li key={topic} className="flex flex-col gap-1 py-3 sm:flex-row sm:justify-between sm:gap-6">
                    <span className="text-sm font-medium text-ink">{topic}</span>
                    <span className="text-sm text-ink/65 sm:text-right">{time}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs leading-6 text-ink/55">
                If you are in immediate danger, call 112. For online fraud, call the cyber crime helpline 1930.
              </p>
            </motion.div>

            <motion.div {...inView} variants={fadeUp} custom={0.1} className="rounded-3xl border border-accent/30 bg-background p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-accent">
                  <MessageSquareWarning className="h-5 w-5" />
                </span>
                <h3 className="font-heading text-lg font-semibold text-primary-dark">Complaint process</h3>
              </div>
              <ol className="mt-6 space-y-3">
                {complaintSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3 text-sm leading-7 text-ink/80">
                    <CircleCheck className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    {step}
                  </li>
                ))}
              </ol>
            </motion.div>
          </div>

          <motion.div {...inView} variants={fadeUp} className="mx-auto mt-6 max-w-3xl">
            <LegalContact />
          </motion.div>
        </div>
      </section>
    </>
  )
}
