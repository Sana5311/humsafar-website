/* ==================================================================
   Site content — edit text here without touching page layouts.
   ================================================================== */

/* ------------------------------------------------------------------
   Real app screenshots for the phone mockup on the Home page.
   Put the images in /public/screens/ and list them here, e.g.
     { src: '/screens/home.png', label: 'Home' },
   While this list is empty, built-in preview screens are shown.
------------------------------------------------------------------- */
export const appScreenshots = [
  { src: '/screens/welcome.webp', label: 'Welcome' },
  { src: '/screens/sign-up.webp', label: 'Free sign-up' },
  { src: '/screens/home.webp', label: 'Home' },
  { src: '/screens/offer.webp', label: 'Premium offer' },
  { src: '/screens/match-profile.webp', label: 'Match profile' },
  { src: '/screens/interests-received.webp', label: 'Interests received' },
  { src: '/screens/interests-sent.webp', label: 'Interests sent' },
  { src: '/screens/interests-accepted.webp', label: 'Interests accepted' },
  { src: '/screens/messages.webp', label: 'Messages' },
  { src: '/screens/chat.webp', label: 'Private chat' },
  { src: '/screens/notifications.webp', label: 'Notifications' },
  { src: '/screens/profile.webp', label: 'My profile' },
  { src: '/screens/edit-profile.webp', label: 'Edit profile' },
  { src: '/screens/edit-photos.webp', label: 'Photos' },
  { src: '/screens/favourites.webp', label: 'Favourites' },
  { src: '/screens/premium.webp', label: 'Premium plans' },
  { src: '/screens/privacy.webp', label: 'Privacy settings' },
  { src: '/screens/settings.webp', label: 'Settings' },
  { src: '/screens/help-center.webp', label: 'Help center' },
]

/* ------------------------------------------------------------------
   Home hero image. Use licensed imagery or your own photography.
   Put the file in /public/images/ and set e.g. '/images/hero.jpg'.
   While empty, a decorative illustration is shown instead.
------------------------------------------------------------------- */
export const heroImage = {
  src: '',
  alt: 'A happy couple beginning their journey together',
}

/* ------------------------------------------------------------------
   Testimonials — ONLY add genuine ones, with the member's permission.
   The testimonials section on the Home page stays hidden while this
   list is empty. Format:
     { quote: '…', name: 'First name or initials', detail: 'City' },
------------------------------------------------------------------- */
export const testimonials = []

/* ------------------------------------------------------------------
   Home page — value proposition (section 03)
------------------------------------------------------------------- */
export const valueProps = [
  {
    icon: 'SlidersHorizontal',
    title: 'Compatibility',
    description: 'Relevant partner preferences, so you see people who share what matters to you.',
  },
  {
    icon: 'LockKeyhole',
    title: 'Privacy',
    description: 'Control over your personal information, photos and contact details.',
  },
  {
    icon: 'Gem',
    title: 'Marriage-first',
    description: 'A serious matchmaking journey for people who are ready for marriage.',
  },
  {
    icon: 'HeartHandshake',
    title: 'Connections',
    description: 'Connect only when both sides are ready, so every conversation starts with mutual interest.',
  },
]

/* ------------------------------------------------------------------
   Home page — How it works in 4 steps (section 04)
------------------------------------------------------------------- */
export const homeSteps = [
  { icon: 'UserRound', title: 'Create your profile', text: 'Sign up and share who you are, your family and what you value.' },
  { icon: 'SlidersHorizontal', title: 'Tell us about your preferences', text: 'Set the qualities you are looking for in a life partner.' },
  { icon: 'Sparkles', title: 'Explore compatible profiles', text: 'Browse recommendations that match your preferences.' },
  { icon: 'Heart', title: 'Express interest and connect', text: 'Send an interest and chat privately once it is accepted.' },
]

/* ------------------------------------------------------------------
   How It Works — full journey (used on /how-it-works, short on Home)
------------------------------------------------------------------- */
export const journeySteps = [
  {
    icon: 'UserPlus',
    title: 'Register',
    short: 'Sign up with your mobile number.',
    description:
      'Download the app and create your account with your mobile number. A one-time password (OTP) confirms the number is yours.',
    points: ['Quick sign-up with mobile OTP', 'Create a profile for yourself or a family member'],
  },
  {
    icon: 'UserRound',
    title: 'Create your profile',
    short: 'Share who you are, honestly.',
    description:
      'Add your basic details, education, profession, family background and a few words about yourself. Then add clear, recent photos.',
    points: ['Honest details lead to better matches', 'Photos are reviewed before they go live'],
  },
  {
    icon: 'SlidersHorizontal',
    title: 'Set partner preferences',
    short: 'Tell us what matters to you.',
    description:
      'Choose the qualities you are looking for in a life partner, such as age range, location, education, profession, community and lifestyle.',
    points: ['Adjust your preferences at any time', 'Focus on what truly matters to you'],
  },
  {
    icon: 'Sparkles',
    title: 'Get compatible recommendations',
    short: 'See profiles that fit your preferences.',
    description:
      'Humsafar suggests profiles that match your preferences, so you spend time on people who are genuinely compatible.',
    points: ['Recommendations based on your preferences', 'Search and filter on your own as well'],
  },
  {
    icon: 'Heart',
    title: 'Send interests',
    short: 'Show you would like to connect.',
    description:
      'Found someone you like? Send an interest. They can accept or decline, so every conversation starts with mutual interest.',
    points: ['Both sides must agree before connecting', 'Decline politely, with no pressure'],
  },
  {
    icon: 'MessagesSquare',
    title: 'Connect privately',
    short: 'Talk once both of you agree.',
    description:
      'When an interest is accepted, you can chat privately in the app. Your phone number and email stay hidden until you choose to share them.',
    points: ['Private conversations inside the app', 'Block or report anyone, at any time'],
  },
  {
    icon: 'Handshake',
    title: 'Progress toward marriage',
    short: 'Involve families and take it forward.',
    description:
      'When it feels right, video call, involve your families and meet in person, at your own pace. Take your time getting to know each other.',
    points: ['Video call before meeting', 'Meet in public and keep family informed'],
  },
]

/* ------------------------------------------------------------------
   About page — values
------------------------------------------------------------------- */
export const values = [
  {
    icon: 'Gem',
    title: 'Marriage first',
    description: 'Everything we build is for people who are serious about finding a life partner.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Trust & safety',
    description: 'We work to keep profiles genuine and give members control over their privacy.',
  },
  {
    icon: 'HandHeart',
    title: 'Respect',
    description:
      'Every member deserves to be treated with dignity, whether they accept an interest or decline it.',
  },
  {
    icon: 'Users',
    title: 'Family at heart',
    description:
      'In our culture, marriage joins two families, and we respect the role families play.',
  },
]

export const audience = [
  'Single adults who are ready for marriage and want a serious, respectful place to search.',
  'Parents and family members helping a son, daughter, brother or sister find a life partner.',
  'People who value shared beliefs, culture and family values in a relationship.',
  'Anyone who wants more control over their privacy than open social platforms offer.',
]

/* ------------------------------------------------------------------
   FAQs. Items with `home: true` are shown on the Home page;
   all of them are shown on /download.
   CHECK: make sure every answer matches how the app really works,
   especially pricing ("Is Humsafar free to use?").
------------------------------------------------------------------- */
export const faqs = [
  {
    home: true,
    q: 'Is Humsafar free to use?',
    a: 'Downloading the app and creating your profile is free. If optional paid features are offered, their price and what they include are shown clearly in the app before you pay anything.',
  },
  {
    home: true,
    q: 'How do I create a profile?',
    a: 'Download the app, sign up with your mobile number and confirm it with the OTP. Then add your details, education, profession, family background and photos. A family member can also create a profile on your behalf.',
  },
  {
    home: true,
    q: 'How are matches recommended?',
    a: 'Recommendations are based on the partner preferences you set, such as age, location, education, profession, community and lifestyle. Update your preferences at any time to change the profiles you see.',
  },
  {
    home: true,
    q: 'Can I hide my photos or phone number?',
    a: 'Yes. Your phone number and email are never shown on your profile. You decide if and when to share them. In privacy settings you can also show your photos only to members whose interest you have accepted.',
  },
  {
    home: true,
    q: 'How do I delete my account?',
    a: 'Go to Settings in the app and choose Delete account. You can also request deletion from our Delete Account page. Deleting your account permanently removes your profile.',
  },
  {
    q: 'What is Humsafar?',
    a: 'Humsafar is a matrimonial and matchmaking app for people who are looking for a life partner. It helps you create a profile, set partner preferences, discover compatible profiles and connect privately.',
  },
  {
    q: 'Who can use Humsafar?',
    a: 'Adults (18+) who are looking for marriage. A profile can be created by the person themselves or by a family member on their behalf.',
  },
  {
    q: 'Where can I download the app?',
    a: 'Download links for Android (Google Play) and iPhone (App Store) are on the Download & Contact page. If a store says "Coming soon", that version is not live yet.',
  },
  {
    q: 'How are profiles verified?',
    a: 'All accounts confirm a mobile number with an OTP, and photos are reviewed before they go live. The Safety & Trust page explains every protection in detail.',
  },
  {
    q: 'How do I report or block someone?',
    a: 'Open the member’s profile or your chat with them and choose Report or Block. Blocked members can no longer see your profile or contact you. Our team reviews every report.',
  },
  {
    q: 'How do I contact the Humsafar team?',
    a: 'Use the contact form on the Download & Contact page or email our support team. Please include your profile name or ID so we can help faster.',
  },
]

/* ------------------------------------------------------------------
   Full FAQ page (/faq), grouped by topic
------------------------------------------------------------------- */
export const faqCategories = [
  {
    id: 'registration',
    title: 'Registration & login',
    items: [
      {
        q: 'Who can register on Humsafar?',
        a: 'Adults who are looking for marriage and are legally able to marry. A profile can be created by the person themselves, or by a parent, sibling, relative or friend with their knowledge and consent.',
      },
      {
        q: 'How do I create an account?',
        a: 'Download the Humsafar app, sign up with your mobile number and verify it with the OTP we send. Then add your profile details, photos and partner preferences.',
      },
      {
        q: 'Can I have more than one profile?',
        a: 'No. Each person can have only one active profile. Duplicate profiles are removed.',
      },
      {
        q: 'I forgot my password. What should I do?',
        a: 'On the login screen, tap Forgot password and follow the steps. You will receive an OTP on your registered mobile number to set a new password.',
      },
      {
        q: 'Can I change my registered mobile number?',
        a: 'Contact our support team from your registered email address with your profile ID, and we will help you update it after confirming your identity.',
      },
    ],
  },
  {
    id: 'verification',
    title: 'Verification',
    items: [
      {
        q: 'How are profiles verified?',
        a: 'Every account confirms its mobile number with an OTP, members confirm their email address, and every profile photo is reviewed by our team before it goes live.',
      },
      {
        q: 'What does the Verified badge mean?',
        a: 'It shows that the member has completed Humsafar’s verification steps for their account. It does not guarantee everything a member says about themselves, so always verify details independently and involve your family.',
      },
      {
        q: 'Why was my photo rejected?',
        a: 'Photos are rejected if they are unclear, not of the person the profile is for, inappropriate, group photos, or taken from the internet. Upload a recent, clear photo of yourself and it will be reviewed again.',
      },
    ],
  },
  {
    id: 'matching',
    title: 'Matches & interests',
    items: [
      {
        q: 'How does Humsafar suggest matches?',
        a: 'Matches are based on the partner preferences you set, such as age, location, education and other details, together with the information in both profiles.',
      },
      {
        q: 'How do I improve my matches?',
        a: 'Complete your profile, add recent photos, describe yourself and your family in "About me", and keep your partner preferences realistic and up to date.',
      },
      {
        q: 'What happens when I send an interest?',
        a: 'The member sees your interest in their Received list and can accept or decline it. Once they accept, you can chat privately in the app.',
      },
      {
        q: 'Can I take back an interest or remove a favourite?',
        a: 'Yes. You can manage the interests you have sent and your favourite profiles from the Interests and Profile sections of the app.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy',
    items: [
      {
        q: 'Who can see my phone number?',
        a: 'Nobody, unless you choose to share it. Your phone number and email are never shown on your profile.',
      },
      {
        q: 'Can I control who sees my photos?',
        a: 'Yes. In Privacy settings, turn on Photo privacy so that only accepted matches can view your album.',
      },
      {
        q: 'Can I hide my profile or browse privately?',
        a: 'Yes. You can hide your profile from search results, browse in incognito mode and turn off your online status from Privacy settings.',
      },
      {
        q: 'How do I delete my account and data?',
        a: 'Go to Settings in the app and choose Delete account, or follow the steps on our Delete Account page. Your profile is removed straight away. Read the Privacy Policy for full details.',
      },
    ],
  },
  {
    id: 'payments',
    title: 'Membership & payments',
    items: [
      {
        q: 'Is Humsafar free?',
        a: 'Yes, you can create a profile, set preferences, browse matches and send interests for free. Some extra features are available with a Premium membership.',
      },
      {
        q: 'What do I get with Premium?',
        a: 'The features, price and duration of each Premium plan are shown in the app before you pay, so you can choose the plan that suits you.',
      },
      {
        q: 'How do I pay?',
        a: 'Premium is purchased securely through Google Play, the Apple App Store or our payment partner. Humsafar does not store your card or bank details.',
      },
      {
        q: 'Can I get a refund?',
        a: 'Payments are generally non-refundable once a plan is active, except where the app store’s refund policy or the law requires it. If you were charged in error, contact us with your payment details and we will help.',
      },
      {
        q: 'My payment went through but Premium is not active. What should I do?',
        a: 'Close and reopen the app and check your internet connection. If Premium is still not active after a few minutes, contact support with your profile ID and payment receipt.',
      },
    ],
  },
  {
    id: 'troubleshooting',
    title: 'Troubleshooting',
    items: [
      {
        q: 'I did not receive my OTP.',
        a: 'Check that your mobile number is correct and has network coverage, wait a minute and tap Resend OTP. If it still does not arrive, contact support.',
      },
      {
        q: 'The app is not loading or keeps closing.',
        a: 'Update Humsafar to the latest version from your app store, check your internet connection and restart your phone. If the problem continues, contact us with your phone model and a screenshot.',
      },
      {
        q: 'I am not getting notifications.',
        a: 'Make sure notifications are allowed for Humsafar in your phone settings and in the app’s notification settings, and that battery saver is not blocking the app.',
      },
      {
        q: 'My account was suspended. What can I do?',
        a: 'Accounts are suspended when our Terms of Use or Community Guidelines are broken. If you believe this was a mistake, contact us with your profile ID and we will review it.',
      },
      {
        q: 'How do I report or block someone?',
        a: 'Open the member’s profile or your chat with them and choose Report or Block. Blocked members can no longer see your profile or contact you. Our team reviews every report.',
      },
    ],
  },
]
