import { Mail, MapPin, UserRound } from 'lucide-react'
import {
  GRIEVANCE_EMAIL,
  GRIEVANCE_OFFICER,
  LEGAL_ADDRESS,
  LEGAL_ENTITY,
  SUPPORT_EMAIL,
} from '../lib/site'

/* Grievance Officer / legal contact card, shared by legal and contact pages */
export default function LegalContact({ className = '' }) {
  const email = GRIEVANCE_EMAIL || SUPPORT_EMAIL
  return (
    <div className={`rounded-3xl border border-accent/40 bg-white p-6 sm:p-8 ${className}`}>
      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">Grievance Officer</p>
      <p className="mt-3 text-sm leading-7 text-ink/75">
        For privacy requests or complaints about content or another member, contact our
        Grievance Officer. We acknowledge complaints within 24 hours and aim to resolve them
        within 15 days.
      </p>
      <ul className="mt-5 space-y-3 text-sm text-ink/80">
        {GRIEVANCE_OFFICER && (
          <li className="flex items-start gap-3">
            <UserRound className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {GRIEVANCE_OFFICER}, Grievance Officer, {LEGAL_ENTITY}
          </li>
        )}
        <li className="flex items-start gap-3">
          <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
          <a href={`mailto:${email}`} className="break-all text-primary underline-offset-4 hover:underline">
            {email}
          </a>
        </li>
        {LEGAL_ADDRESS && (
          <li className="flex items-start gap-3">
            <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
            {LEGAL_ADDRESS}
          </li>
        )}
      </ul>
    </div>
  )
}
