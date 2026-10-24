import { useState } from 'react'
import { Link } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import {
  ArrowUpRight,
  ChevronDown,
} from 'lucide-react'
import { fadeUp, inView, stores } from '../lib/site'
import logoFull from '../assets/logo.webp'

/* ------------------------------------------------------------------
   Humsafar logo — the original square logo, never cropped.
   LogoMark = small sizes (navbar, badges), LogoFull = large sizes.
------------------------------------------------------------------- */
export function LogoMark({ className = 'h-11 w-11', alt = '' }) {
  return (
    <img
      src={logoFull}
      alt={alt}
      width="512"
      height="512"
      className={`shrink-0 rounded-md object-contain ${className}`}
    />
  )
}

export function LogoFull({ className = 'h-32 w-32', alt = 'Humsafar logo' }) {
  return (
    <img
      src={logoFull}
      alt={alt}
      width="512"
      height="512"
      className={`shrink-0 rounded-xl object-contain shadow-lg ${className}`}
    />
  )
}

/* ------------------------------------------------------------------
   Headings & ornaments
------------------------------------------------------------------- */
export function SectionLabel({ children, light = false }) {
  return (
    <div
      className={`inline-flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.28em] ${
        light ? 'text-accent' : 'text-primary'
      }`}
    >
      <span className="h-px w-8 bg-accent" />
      {children}
      <span className="h-px w-8 bg-accent" />
    </div>
  )
}

export function Ornament() {
  return (
    <div className="flex items-center justify-center gap-3 text-accent" aria-hidden="true">
      <span className="h-px w-12 bg-linear-to-r from-transparent to-accent" />
      <LogoMark className="h-7 w-7" />
      <span className="h-px w-12 bg-linear-to-l from-transparent to-accent" />
    </div>
  )
}

export function SectionHeading({ label, title, script, text, light = false, className = '' }) {
  return (
    <motion.div {...inView} variants={fadeUp} className={`mx-auto max-w-2xl text-center ${className}`}>
      {label && <SectionLabel light={light}>{label}</SectionLabel>}
      <h2
        className={`mt-6 font-heading text-3xl font-semibold leading-tight sm:text-[2.6rem] ${
          light ? 'text-background' : 'text-primary-dark'
        }`}
      >
        {title}
        {script && (
          <span
            className={`mt-2 block font-script text-5xl font-normal sm:text-6xl ${
              light ? 'text-accent' : 'text-primary'
            }`}
          >
            {script}
          </span>
        )}
      </h2>
      {text && (
        <p className={`mt-5 text-[15px] leading-8 ${light ? 'text-background/80' : 'text-ink/75'}`}>{text}</p>
      )}
    </motion.div>
  )
}

/* Top banner used on inner pages */
export function PageHero({ label, title, script, text, children }) {
  return (
    <section className="relative overflow-hidden bg-background">
      <div
        className="pointer-events-none absolute -right-32 -top-20 h-[460px] w-[460px] rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 bottom-0 h-[340px] w-[340px] rounded-full bg-primary/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 sm:py-24">
        <motion.div variants={fadeUp} initial="hidden" animate="visible">
          <LogoMark className="mx-auto mb-7 h-20 w-20 shadow-lg shadow-primary/20" alt="Humsafar" />
        </motion.div>
        <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.05}>
          <SectionLabel>{label}</SectionLabel>
        </motion.div>
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          custom={0.1}
          className="mt-6 font-heading text-[2.2rem] font-semibold leading-tight text-primary-dark sm:text-5xl"
        >
          {title}
          {script && (
            <span className="mt-2 block font-script text-5xl font-normal text-primary sm:text-7xl">
              {script}
            </span>
          )}
        </motion.h1>
        {text && (
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="mx-auto mt-6 max-w-2xl text-[15px] leading-8 text-ink/75"
          >
            {text}
          </motion.p>
        )}
        {children && (
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.3}>
            {children}
          </motion.div>
        )}
      </div>
    </section>
  )
}

/* ------------------------------------------------------------------
   App store buttons — show "Coming soon" automatically when the
   store URL in src/lib/site.js is empty.
------------------------------------------------------------------- */

function StoreButton({ item, light, compact, byPlatform }) {
  const Icon = item.icon
  const live = Boolean(item.url)
  const base = `relative inline-flex items-center gap-3 rounded-xl border text-left transition-all duration-300 ${
    compact ? 'px-3.5 py-2' : 'px-5 py-3'
  }`
  const colors = light
    ? 'border-accent/40 bg-white/5 text-background'
    : 'border-ink bg-ink text-background'
  const content = (
    <>
      <Icon className={compact ? 'h-5 w-5' : 'h-6 w-6'} fill={item.id === 'android' ? 'currentColor' : 'none'} />
      <span className="leading-tight">
        <span className="block text-[10px] uppercase tracking-wider opacity-75">
          {byPlatform ? (live ? 'Download for' : 'Coming soon for') : live ? item.caption : 'Coming soon on'}
        </span>
        <span className={`block font-semibold ${compact ? 'text-sm' : 'text-base'}`}>
          {byPlatform ? item.platform : item.store}
        </span>
      </span>
    </>
  )

  if (live) {
    return (
      <a
        href={item.url}
        target="_blank"
        rel="noreferrer"
        className={`${base} ${colors} hover:-translate-y-0.5 hover:shadow-lg ${light ? 'hover:bg-white/10' : 'hover:bg-primary-dark'}`}
      >
        {content}
      </a>
    )
  }
  return (
    <span
      className={`${base} cursor-default border-dashed ${
        light ? 'border-accent/40 text-background/70' : 'border-ink/30 bg-white/60 text-ink/60'
      }`}
      aria-label={`${item.store} app coming soon`}
    >
      {content}
    </span>
  )
}

export function StoreButtons({ light = false, compact = false, byPlatform = false, className = '' }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {stores.map((item) => (
        <StoreButton key={item.id} item={item} light={light} compact={compact} byPlatform={byPlatform} />
      ))}
    </div>
  )
}

/* ------------------------------------------------------------------
   FAQ accordion
------------------------------------------------------------------- */
export function FaqList({ items }) {
  const [open, setOpen] = useState(0)
  return (
    <div className="divide-y divide-accent/25 overflow-hidden rounded-3xl border border-accent/30 bg-white">
      {items.map((faq, i) => {
        const isOpen = open === i
        return (
          <div key={faq.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-background/60"
            >
              <span className="text-[15px] font-medium text-primary-dark">{faq.q}</span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-accent transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
              />
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  className="overflow-hidden"
                >
                  <p className="px-6 pb-6 text-sm leading-7 text-ink/75">{faq.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}

/* ------------------------------------------------------------------
   Download call-to-action band (end of pages)
------------------------------------------------------------------- */
export function CtaBand({
  title = 'Ready to begin',
  script = 'something beautiful?',
  text = 'Take the first step towards your next chapter with Humsafar.',
}) {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-primary via-primary to-primary-dark py-20 text-center sm:py-24">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[480px] w-[480px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/20"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[680px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/10"
        aria-hidden="true"
      />
      <motion.div {...inView} variants={fadeUp} className="relative mx-auto max-w-3xl px-4 sm:px-6">
        <LogoFull className="mx-auto mb-8 h-28 w-28 shadow-black/30 sm:h-32 sm:w-32" />
        <SectionLabel light>Your Story Awaits</SectionLabel>
        <h2 className="mt-6 font-heading text-3xl font-semibold leading-tight text-background sm:text-5xl">
          {title}
          <span className="mt-2 block font-script text-5xl font-normal text-accent sm:text-7xl">{script}</span>
        </h2>
        <p className="mx-auto mt-6 max-w-lg text-[15px] leading-8 text-background/80">{text}</p>
        <StoreButtons light byPlatform className="mt-9 justify-center" />
        <Link
          to="/download"
          className="group mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:text-background"
        >
          Download & contact details
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
        </Link>
      </motion.div>
    </section>
  )
}
