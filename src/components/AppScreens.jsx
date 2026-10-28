import { useCallback, useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  BadgeCheck,
  Camera,
  ChevronLeft,
  ChevronRight,
  Crown,
  Download,
  Eye,
  EyeOff,
  Heart,
  Image as ImageIcon,
  LockKeyhole,
  MapPin,
  MessageCircle,
  Mic,
  Moon,
  Paperclip,
  Phone,
  SendHorizontal,
  Share2,
  Shield,
  SlidersHorizontal,
  Smile,
  UserRoundX,
  Users,
} from 'lucide-react'
import { appScreenshots } from '../data/content'
import { fadeUp, inView } from '../lib/site'

/* ==================================================================
   App preview screens, drawn in code to match the Humsafar app UI
   (purple gradient header with gold edge, gold accents, white cards).
   Sample names only — no real members or photos.
   To show real screenshots instead, fill `appScreenshots` in
   src/data/content.js.
   ================================================================== */

const goldGradient = 'bg-linear-to-r from-accent-dark via-accent-light to-accent'

/* Soft placeholder "photo" — gradient + initial, no real faces */
const tones = [
  'from-[#E9D8F5] to-[#B79AD6]',
  'from-[#F6E7C1] to-[#D9B867]',
  'from-[#D9CFF0] to-[#8F74BF]',
  'from-[#F3DCE6] to-[#C99BB3]',
  'from-[#DCE8F3] to-[#9DB4CF]',
  'from-[#EFE3D3] to-[#C7A98A]',
]

function Avatar({ name, i = 0, className = 'h-9 w-9 text-sm', ring = true, online = false }) {
  return (
    <span className="relative shrink-0">
      <span
        className={`grid place-items-center rounded-full bg-linear-to-br font-semibold text-white ${tones[i % tones.length]} ${
          ring ? 'ring-2 ring-accent ring-offset-1 ring-offset-white' : ''
        } ${className}`}
      >
        {name[0]}
      </span>
      {online && (
        <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border border-white bg-online" />
      )}
    </span>
  )
}

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-4 pt-2 text-[8px] font-medium text-white/90">
      <span>8:03</span>
      <span className="flex items-center gap-1">
        <span className="tracking-tighter">▂▄▆</span>
        <span className="rounded-sm bg-[#9B5CF6] px-0.5 leading-tight">98</span>
      </span>
    </div>
  )
}

function CircleBtn({ icon: Icon }) {
  return (
    <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-accent text-accent">
      <Icon className="h-3.5 w-3.5" />
    </span>
  )
}

/* Purple gradient header with the gold rounded bottom edge */
function AppHeader({ title, subtitle, left, right }) {
  return (
    <div className="relative z-10 rounded-b-[18px] border-x-[1.5px] border-b-[1.5px] border-accent bg-linear-to-br from-primary-dark via-primary to-secondary pb-3 shadow-md shadow-primary/30">
      <StatusBar />
      <div className="mt-3 flex items-center px-3">
        <span className="w-7">{left}</span>
        <div className="flex-1 text-center">
          <p className="text-[13px] font-semibold leading-tight text-white">{title}</p>
          {subtitle && <p className="mt-0.5 text-[8px] text-white/70">{subtitle}</p>}
        </div>
        <span className="flex w-7 justify-end">{right}</span>
      </div>
    </div>
  )
}

function BottomNav({ active }) {
  const items = [
    { key: 'home', label: 'Home' },
    { key: 'matches', label: 'Matches', icon: Users },
    { key: 'interest', label: 'Interest', icon: Heart },
    { key: 'chat', label: 'Chat', icon: MessageCircle },
    { key: 'premium', label: 'Premium', icon: Crown },
  ]
  return (
    <div className="absolute inset-x-1.5 bottom-1.5 z-10 flex justify-around rounded-2xl border-[1.5px] border-accent bg-primary py-1.5">
      {items.map(({ key, label, icon: Icon }) => {
        const on = key === active
        return (
          <span key={key} className={`flex flex-col items-center gap-0.5 text-[7px] ${on ? 'text-accent' : 'text-white/75'}`}>
            {Icon ? (
              <Icon className="h-3.5 w-3.5" strokeWidth={1.8} />
            ) : (
              <span className="bg-linear-to-b from-accent-light to-accent-dark bg-clip-text font-heading text-[13px] font-bold leading-[14px] text-transparent">
                H
              </span>
            )}
            {label}
          </span>
        )
      })}
    </div>
  )
}

/* ---------------------------------------------------------------- */

function ProfileScreen() {
  const rows = [
    { icon: Crown, label: 'Membership Status', value: 'FREE' },
    { icon: Heart, label: 'Favourite Profiles' },
    { icon: BadgeCheck, label: 'Verification Status', value: 'Verified' },
    { icon: Shield, label: 'Privacy' },
    { icon: Camera, label: 'Upload Photos' },
  ]
  return (
    <div className="flex h-full flex-col bg-background">
      <div className="rounded-b-[22px] border-x-[1.5px] border-b-[1.5px] border-accent bg-linear-to-b from-primary-dark via-primary to-secondary pb-4">
        <StatusBar />
        <div className="mt-2 flex justify-between px-3">
          <CircleBtn icon={ArrowLeft} />
          <CircleBtn icon={Moon} />
        </div>
        <div className="-mt-3 flex flex-col items-center text-center">
          <span className="relative">
            <span className="grid h-16 w-16 place-items-center rounded-full border-2 border-accent bg-linear-to-br from-[#E9D8F5] to-[#8F74BF] text-xl font-semibold text-white">
              A
            </span>
            <span className="absolute -bottom-0.5 -right-0.5 grid h-5 w-5 place-items-center rounded-full bg-accent text-primary-dark">
              <Camera className="h-2.5 w-2.5" />
            </span>
          </span>
          <p className="mt-2 text-[14px] font-bold text-white">Ahmed Raza</p>
          <p className="text-[9px] font-semibold tracking-wide text-accent">HS5810053</p>
          <p className="mt-0.5 text-[8px] text-white/75">Free Account · 25 · Hyderabad</p>
          <div className="mt-1.5 flex gap-1.5 text-[7px] font-semibold">
            <span className="inline-flex items-center gap-0.5 rounded-full bg-success px-2 py-0.5 text-white">
              <BadgeCheck className="h-2.5 w-2.5" /> Verified
            </span>
            <span className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-primary-dark ${goldGradient}`}>
              <Crown className="h-2.5 w-2.5" /> FREE
            </span>
          </div>
          <p className="mt-2 text-[8px] text-accent-light">Profile 85% complete</p>
          <div className="mt-1 h-1 w-3/4 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-[85%] rounded-full bg-accent" />
          </div>
        </div>
      </div>

      <div className="px-2.5 pt-2.5">
        <div className={`rounded-xl py-2 text-center text-[10px] font-bold text-primary-dark shadow-md shadow-accent/30 ${goldGradient}`}>
          Edit Profile
        </div>
        <div className="mt-2.5 overflow-hidden rounded-xl border border-line bg-white shadow-sm">
          {rows.map(({ icon: Icon, label, value }) => (
            <div key={label} className="flex items-center gap-2 border-b border-line px-2.5 py-[7px] last:border-b-0">
              <span className="grid h-5 w-5 place-items-center rounded-full border border-accent/70 bg-accent/10 text-accent">
                <Icon className="h-2.5 w-2.5" />
              </span>
              <span className="flex-1 text-[9px] font-medium text-ink">{label}</span>
              {value && <span className="text-[7px] font-semibold text-accent">{value}</span>}
              <ChevronRight className="h-2.5 w-2.5 text-accent" />
            </div>
          ))}
          <div className="grid grid-cols-2 border-t border-line text-[8px] text-ink">
            <span className="flex items-center justify-center gap-1 border-r border-line py-1.5">
              <Download className="h-2.5 w-2.5 text-accent" /> Download
            </span>
            <span className="flex items-center justify-center gap-1 py-1.5">
              <Share2 className="h-2.5 w-2.5 text-accent" /> Share
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function MatchScreen() {
  const people = [
    ['Ayesha Khan', 26, 'Software Engineer', 'Mumbai', true, true],
    ['Omar Siddiqui', 29, 'Doctor', 'Delhi', true, false],
    ['Fatima Noor', 24, 'Designer', 'Hyderabad', false, true],
    ['Zain Ahmed', 31, 'Business Owner', 'Bangalore', true, false],
    ['Maryam Ali', 27, 'Teacher', 'Lucknow', false, false],
    ['Hassan Rahman', 28, 'Engineer', 'Chennai', true, false],
  ]
  return (
    <div className="relative flex h-full flex-col bg-background">
      <AppHeader title="Matches" subtitle="10 profiles for you" right={<CircleBtn icon={SlidersHorizontal} />} />
      <div className="grid grid-cols-2 gap-2 p-2.5">
        {people.map(([name, age, job, city, premium, liked], i) => (
          <div
            key={name}
            className={`relative h-[118px] overflow-hidden rounded-xl bg-linear-to-br shadow-md ${tones[i % tones.length]}`}
          >
            <span className="absolute inset-0 grid place-items-center pb-8 text-4xl font-semibold text-white/60">
              {name[0]}
            </span>
            <div className="absolute inset-x-0 bottom-0 h-3/5 bg-linear-to-t from-primary-dark/90 to-transparent" />
            <span className="absolute left-1.5 top-1.5 grid h-3.5 w-5 place-items-center rounded-full bg-success text-white">
              <BadgeCheck className="h-2 w-2" />
            </span>
            {premium && (
              <span className={`absolute left-1.5 top-6 inline-flex items-center gap-0.5 rounded-full px-1.5 py-px text-[6px] font-bold text-primary-dark ${goldGradient}`}>
                <Crown className="h-2 w-2" /> PREMIUM
              </span>
            )}
            <span className="absolute right-1.5 top-1.5 grid h-4 w-4 place-items-center rounded-full bg-white/30">
              <Heart className={`h-2.5 w-2.5 ${liked ? 'text-error' : 'text-white'}`} fill={liked ? 'currentColor' : 'none'} />
            </span>
            <div className="absolute inset-x-1.5 bottom-1.5 text-white">
              <p className="text-[8px] font-semibold leading-tight">
                {name}, {age}
              </p>
              <p className="truncate text-[7px] text-white/80">{job}</p>
              <p className="flex items-center gap-0.5 text-[7px] text-accent-light">
                <MapPin className="h-2 w-2" /> {city}
              </p>
            </div>
          </div>
        ))}
      </div>
      <BottomNav active="matches" />
    </div>
  )
}

function InterestsScreen() {
  const people = [
    ['Ayesha Khan, 26', 'Mumbai · 2h ago'],
    ['Sana Qureshi, 25', 'Dubai · 5h ago'],
    ['Zoya Begum, 27', 'Pune · 1d ago'],
  ]
  return (
    <div className="relative flex h-full flex-col bg-background">
      <AppHeader title="Interests" subtitle="People who matter" />
      <div className="mx-2.5 mt-2.5 grid grid-cols-3 rounded-xl border-[1.5px] border-accent bg-white p-0.5 text-center text-[8px]">
        <span className="rounded-lg bg-primary py-1 font-semibold text-accent">Received</span>
        <span className="py-1 text-ink-soft">Sent</span>
        <span className="py-1 text-ink-soft">Accepted</span>
      </div>
      <div className="space-y-2 p-2.5">
        {people.map(([name, meta], i) => (
          <div key={name} className="rounded-xl border-[1.5px] border-accent bg-white p-2">
            <div className="flex items-center gap-2">
              <Avatar name={name} i={i} className="h-8 w-8 text-xs" />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[10px] font-semibold text-primary">{name}</p>
                <p className="text-[7px] text-muted">{meta}</p>
              </div>
              <span className="grid h-5 w-5 place-items-center rounded-full border border-online bg-online/10 text-online">
                <Phone className="h-2.5 w-2.5" />
              </span>
            </div>
            <div className="mt-2 grid grid-cols-3 gap-1 text-[7px] font-semibold">
              <span className={`rounded-lg border border-primary-dark py-1 text-center text-primary-dark ${goldGradient}`}>Accept</span>
              <span className="rounded-lg border border-accent bg-white py-1 text-center text-primary-dark">Decline</span>
              <span className="inline-flex items-center justify-center gap-0.5 rounded-lg border border-accent bg-primary py-1 text-white">
                <MessageCircle className="h-2 w-2" /> Contact
              </span>
            </div>
          </div>
        ))}
      </div>
      <BottomNav active="interest" />
    </div>
  )
}

function ChatScreen() {
  const msgs = [
    ['in', 'Assalamualaikum, hope you are doing well.', '10:20 AM'],
    ['out', 'Wa alaikum assalam! Yes, Alhamdulillah. How about you?', '10:25 AM'],
    ['in', 'I am good, thank you. I enjoyed reading your profile.', '10:30 AM'],
    ['out', 'That means a lot. Would love to know more about your family.', '10:35 AM'],
    ['in', 'That sounds wonderful, Alhamdulillah.', '10:42 AM'],
  ]
  return (
    <div className="flex h-full flex-col bg-background">
      <AppHeader
        title="Ayesha Khan"
        subtitle="Online"
        left={<CircleBtn icon={ArrowLeft} />}
        right={<Avatar name="Ayesha" className="h-7 w-7 text-[10px]" ring={false} online />}
      />
      <div className="flex-1 space-y-1.5 overflow-hidden p-2.5 text-[8px] leading-snug">
        {msgs.map(([dir, text, time]) => (
          <div
            key={time}
            className={
              dir === 'in'
                ? 'max-w-[78%] rounded-xl border border-line bg-white px-2 py-1.5 text-ink'
                : 'ml-auto max-w-[78%] rounded-xl rounded-br-sm bg-primary px-2 py-1.5 text-white'
            }
          >
            {text}
            <span className={`mt-0.5 block text-right text-[6px] ${dir === 'in' ? 'text-muted' : 'text-white/60'}`}>{time}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center gap-1.5 border-t border-line bg-white px-2 py-2">
        <Paperclip className="h-3 w-3 text-primary" />
        <Smile className="h-3 w-3 text-primary" />
        <span className="flex-1 rounded-full bg-background px-2 py-1.5 text-[8px] text-muted">Type a message…</span>
        <Mic className="h-3 w-3 text-primary" />
        <span className="grid h-6 w-6 place-items-center rounded-full bg-accent text-primary-dark">
          <SendHorizontal className="h-3 w-3" />
        </span>
      </div>
    </div>
  )
}

function Toggle({ on }) {
  return (
    <span className={`relative h-2.5 w-5 shrink-0 rounded-full ${on ? 'bg-accent' : 'bg-line'}`}>
      <span
        className={`absolute -top-[3px] h-4 w-4 rounded-full border border-line bg-white shadow ${on ? 'right-[-3px]' : 'left-[-3px]'}`}
      />
    </span>
  )
}

function SettingsScreen() {
  const groups = [
    {
      title: 'Profile visibility',
      rows: [
        { icon: EyeOff, label: 'Hide my profile', sub: 'Not shown in search results', on: false },
        { icon: Eye, label: 'Incognito browsing', sub: 'Browse without being noticed', on: false },
        { icon: Shield, label: 'Show online status', sub: "Let others see when you're online", on: true },
      ],
    },
    {
      title: 'Photos & contact',
      rows: [
        { icon: ImageIcon, label: 'Photo privacy', sub: 'Only matches can view album', on: true },
        { icon: LockKeyhole, label: 'Contact requests', sub: 'Only accepted matches can contact', on: true },
      ],
    },
  ]
  return (
    <div className="flex h-full flex-col bg-background">
      <AppHeader title="Privacy" subtitle="Control who sees your profile" left={<CircleBtn icon={ArrowLeft} />} />
      <div className="px-2.5 pb-3">
        {groups.map((g) => (
          <div key={g.title}>
            <p className="mb-1.5 mt-3 px-0.5 text-[8px] font-semibold uppercase tracking-wider text-muted">{g.title}</p>
            <div className="overflow-hidden rounded-xl border border-line bg-white">
              {g.rows.map(({ icon: Icon, label, sub, on }) => (
                <div key={label} className="flex items-center gap-2 border-b border-line px-2.5 py-2 last:border-b-0">
                  <Icon className="h-3 w-3 shrink-0 text-accent" />
                  <span className="min-w-0 flex-1">
                    <span className="block text-[9px] font-medium text-ink">{label}</span>
                    <span className="block truncate text-[7px] text-muted">{sub}</span>
                  </span>
                  <Toggle on={on} />
                </div>
              ))}
            </div>
          </div>
        ))}
        <p className="mb-1.5 mt-3 px-0.5 text-[8px] font-semibold uppercase tracking-wider text-muted">Safety</p>
        <div className="flex items-center gap-2 rounded-xl border border-line bg-white px-2.5 py-2.5">
          <UserRoundX className="h-3 w-3 text-accent" />
          <span className="flex-1 text-[9px] font-medium text-ink">Blocked profiles</span>
          <ChevronRight className="h-3 w-3 text-ink-soft" />
        </div>
      </div>
    </div>
  )
}

const builtInScreens = [
  { key: 'profile', label: 'Profile', node: <ProfileScreen /> },
  { key: 'matches', label: 'Matches', node: <MatchScreen /> },
  { key: 'interests', label: 'Interests', node: <InterestsScreen /> },
  { key: 'chat', label: 'Private chat', node: <ChatScreen /> },
  { key: 'settings', label: 'Privacy settings', node: <SettingsScreen /> },
]

/* Screens are drawn at a fixed 214 × 500 design size and scaled up by
   --phone-scale, so text, icons and spacing all grow together. */
const SCREEN_W = 214
const SCREEN_H = 500

export function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`relative rounded-[calc(2.3rem*var(--phone-scale,1))] border border-ink/20 bg-ink p-[calc(8px*var(--phone-scale,1))] shadow-2xl shadow-primary/25 ${className}`}
    >
      <div className="absolute left-1/2 top-[calc(14px*var(--phone-scale,1))] z-20 h-[calc(16px*var(--phone-scale,1))] w-[calc(80px*var(--phone-scale,1))] -translate-x-1/2 rounded-full bg-ink" />
      <div
        className="relative overflow-hidden rounded-[calc(1.9rem*var(--phone-scale,1))] bg-background"
        style={{
          width: `calc(${SCREEN_W}px * var(--phone-scale, 1))`,
          height: `calc(${SCREEN_H}px * var(--phone-scale, 1))`,
        }}
      >
        <div
          className="absolute left-0 top-0 origin-top-left"
          style={{ width: SCREEN_W, height: SCREEN_H, transform: 'scale(var(--phone-scale, 1))' }}
        >
          {children}
        </div>
      </div>
    </div>
  )
}

/* Row of phones: a horizontal strip you can swipe (mobile) or
   scroll with the arrows / trackpad / scrollbar (desktop) */
export function AppGallery() {
  const rowRef = useRef(null)
  const [edge, setEdge] = useState({ start: true, end: false })

  const screens = appScreenshots.length
    ? appScreenshots.map((s) => ({
        key: s.src,
        label: s.label,
        node: <img src={s.src} alt={`${s.label} screen`} className="h-full w-full object-cover object-top" loading="lazy" />,
      }))
    : builtInScreens

  const updateEdges = useCallback(() => {
    const el = rowRef.current
    if (!el) return
    setEdge({
      start: el.scrollLeft <= 4,
      end: el.scrollLeft + el.clientWidth >= el.scrollWidth - 4,
    })
  }, [])

  /* Desktop: size the phones so a whole phone (plus its label) fits in the
     browser window under the navbar. MAX_DESKTOP_SCALE is the largest size
     allowed — lower it to make the phones smaller. */
  const MAX_DESKTOP_SCALE = 1.3
  const fitToWindow = useCallback(() => {
    const el = rowRef.current
    if (!el) return
    if (window.innerWidth < 1024) {
      el.style.removeProperty('--phone-scale') // mobile/tablet use the class values
      return
    }
    const room = window.innerHeight - 260 // navbar + stagger + caption + breathing room
    const scale = Math.max(1, Math.min(MAX_DESKTOP_SCALE, room / 516))
    el.style.setProperty('--phone-scale', scale.toFixed(3))
  }, [])

  useEffect(() => {
    const onResize = () => {
      fitToWindow()
      updateEdges()
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [fitToWindow, updateEdges])

  const scrollByPhone = (dir) => {
    const el = rowRef.current
    if (!el) return
    const card = el.querySelector('figure')
    const step = card ? card.getBoundingClientRect().width + 32 : 360
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  const arrowBtn =
    'absolute top-1/2 z-30 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border-2 border-accent bg-primary text-accent shadow-lg shadow-primary/30 transition hover:bg-primary-dark disabled:pointer-events-none disabled:opacity-0 md:grid'

  return (
    <div>
      <div className="relative">
        <button type="button" aria-label="Previous screen" onClick={() => scrollByPhone(-1)} disabled={edge.start} className={`${arrowBtn} left-0 xl:-left-6`}>
          <ChevronLeft className="h-6 w-6" />
        </button>
        <button type="button" aria-label="Next screen" onClick={() => scrollByPhone(1)} disabled={edge.end} className={`${arrowBtn} right-0 xl:-right-6`}>
          <ChevronRight className="h-6 w-6" />
        </button>

        <div
          ref={rowRef}
          onScroll={updateEdges}
          className="phone-row -mx-4 flex scroll-px-4 sm:scroll-px-6 lg:scroll-px-8 snap-x snap-mandatory items-start gap-6 overflow-x-auto px-4 pb-8 pt-4 [--phone-scale:1.15] sm:-mx-6 sm:gap-8 sm:px-6 sm:[--phone-scale:1.3] lg:-mx-8 lg:px-8 lg:[--phone-scale:1.3] lg:[mask-image:linear-gradient(to_right,transparent,black_24px,black_calc(100%-24px),transparent)]"
        >
          {screens.map((s, i) => (
            <motion.figure
              key={s.key}
              {...inView}
              variants={fadeUp}
              custom={i * 0.08}
              className={`shrink-0 snap-center lg:snap-start ${i % 2 === 1 ? 'lg:mt-10' : ''}`}
            >
              <PhoneFrame>{s.node}</PhoneFrame>
              <figcaption className="mt-5 text-center font-heading text-base font-semibold text-primary-dark">
                {s.label}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
      {!appScreenshots.length && (
        <p className="mt-2 text-center text-xs text-ink/50">
          Illustrative preview. Sample names and details, not real members.
        </p>
      )}
    </div>
  )
}
