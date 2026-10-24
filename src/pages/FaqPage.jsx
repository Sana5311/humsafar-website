import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { CtaBand, FaqList, PageHero } from '../components/ui'
import { faqCategories } from '../data/content'
import { fadeUp, inView, secondaryBtn } from '../lib/site'

export default function FaqPage() {
  return (
    <>
      <PageHero
        label="FAQ"
        title="Frequently asked"
        script="questions."
        text="Answers about registration, verification, matches, privacy, membership and fixing common problems."
      >
        <nav aria-label="FAQ topics" className="mt-9 flex flex-wrap justify-center gap-2.5">
          {faqCategories.map((c) => (
            <a
              key={c.id}
              href={`#${c.id}`}
              className="rounded-full border border-accent/50 bg-white px-4 py-2 text-xs font-medium text-primary transition-colors hover:border-primary hover:bg-primary hover:text-background"
            >
              {c.title}
            </a>
          ))}
        </nav>
      </PageHero>

      <section className="border-t border-accent/30 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-14 px-4 sm:px-6">
          {faqCategories.map((c, i) => (
            <motion.div key={c.id} id={c.id} {...inView} variants={fadeUp}>
              <h2 className="font-heading text-xl font-semibold text-primary-dark sm:text-2xl">
                <span className="mr-2 text-accent">{String(i + 1).padStart(2, '0')}</span>
                {c.title}
              </h2>
              <div className="mt-6">
                <FaqList items={c.items} />
              </div>
            </motion.div>
          ))}

          <div className="text-center">
            <p className="text-sm text-ink/70">Still need help?</p>
            <Link to="/contact" className={`${secondaryBtn} mt-4`}>
              Contact our team
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
