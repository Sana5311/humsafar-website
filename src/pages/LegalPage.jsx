import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { PageHero } from '../components/ui'
import LegalContact from '../components/LegalContact'
import { communityGuidelines, privacyPolicy, termsOfUse } from '../data/legal'
import { LEGAL_LAST_UPDATED, fadeUp, inView } from '../lib/site'

const docs = {
  '/privacy-policy': privacyPolicy,
  '/terms': termsOfUse,
  '/community-guidelines': communityGuidelines,
}

const related = [
  { to: '/privacy-policy', label: 'Privacy Policy' },
  { to: '/terms', label: 'Terms of Use' },
  { to: '/community-guidelines', label: 'Community Guidelines' },
  { to: '/delete-account', label: 'Delete Account' },
  { to: '/safety', label: 'Safety & Trust' },
]

function Block({ block }) {
  if (typeof block === 'string') {
    return <p className="text-[15px] leading-8 text-ink/75">{block}</p>
  }
  return (
    <ul className="space-y-2.5">
      {block.list.map((item) => (
        <li key={item} className="flex gap-3 text-[15px] leading-7 text-ink/75">
          <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export default function LegalPage() {
  const { pathname } = useLocation()
  const doc = docs[pathname.replace(/\/+$/, '')] ?? privacyPolicy

  return (
    <>
      <PageHero label={doc.label} title={doc.title} script={doc.script} text={doc.intro}>
        <p className="mt-6 text-xs text-ink/50">Last updated: {LEGAL_LAST_UPDATED}</p>
      </PageHero>

      <section className="border-t border-accent/30 bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-6 lg:grid-cols-[250px_1fr] lg:gap-14 lg:px-8">
          {/* Contents */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <nav aria-label="On this page" className="rounded-3xl border border-accent/30 bg-background p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">On this page</p>
              <ol className="mt-4 space-y-2 text-sm">
                {doc.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="flex gap-2 text-ink/70 transition-colors hover:text-primary">
                      <span className="w-5 shrink-0 text-accent">{i + 1}.</span>
                      {s.title}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </aside>

          {/* Body */}
          <div className="min-w-0">
            {doc.sections.map((s, i) => (
              <motion.section
                key={s.id}
                id={s.id}
                {...inView}
                variants={fadeUp}
                className="border-b border-accent/20 pb-10 pt-2 last:border-b-0 [&+&]:pt-10"
              >
                <h2 className="font-heading text-xl font-semibold text-primary-dark sm:text-2xl">
                  <span className="mr-2 text-accent">{i + 1}.</span>
                  {s.title}
                </h2>
                <div className="mt-5 space-y-4">
                  {s.body.map((block, j) => (
                    <Block key={j} block={block} />
                  ))}
                </div>
              </motion.section>
            ))}

            <motion.div {...inView} variants={fadeUp} className="mt-4">
              <h2 className="font-heading text-xl font-semibold text-primary-dark sm:text-2xl">Contact us</h2>
              <p className="mt-4 text-[15px] leading-8 text-ink/75">
                Questions about this page? Reach us through the{' '}
                <Link to="/contact" className="text-primary underline underline-offset-4">
                  Contact page
                </Link>{' '}
                or our Grievance Officer below.
              </p>
              <LegalContact className="mt-6" />
            </motion.div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {related
                .filter((r) => r.to !== pathname)
                .map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    className="group inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-white px-4 py-2 text-xs font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-background"
                  >
                    {r.label}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
