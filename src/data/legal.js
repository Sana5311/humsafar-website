/* ------------------------------------------------------------------
   Legal page content: Privacy Policy, Terms of Use, Community Guidelines.

   Each section body is a list of blocks:
     'plain string'        → a paragraph
     { list: [ ... ] }     → a bullet list
   Company name, address and Grievance Officer come from src/lib/site.js.

   IMPORTANT: Have these texts reviewed by a lawyer for India's Digital
   Personal Data Protection Act 2023, the IT Act 2000 / IT Rules 2021 and
   consumer protection rules before publishing. Make sure every statement
   matches what the app actually does.
------------------------------------------------------------------- */

export const privacyPolicy = {
  label: 'Privacy Policy',
  title: 'Your data,',
  script: 'handled with care.',
  intro:
    'This Privacy Policy explains what personal data Humsafar collects, why we collect it, who we share it with, how long we keep it, how we protect it and the rights you have over it.',
  sections: [
    {
      id: 'who-we-are',
      title: 'Who we are',
      body: [
        'Humsafar is a marriage-first matrimonial and matchmaking app, available on Android and iPhone, with this website as its public home. In this policy, "Humsafar", "we", "us" and "our" mean the operator of the Humsafar app and website. "You" means anyone who visits the website or uses the app.',
        'For the purposes of India’s Digital Personal Data Protection Act, 2023, we are the Data Fiduciary for the personal data described in this policy.',
      ],
    },
    {
      id: 'data-we-collect',
      title: 'What data we collect',
      body: [
        'Information you give us when you register and build your profile:',
        {
          list: [
            'Account details: name, mobile number, email address, password, and who the profile is for (yourself or a family member).',
            'Profile details: gender, date of birth, marital status, height, religion, community and language, education, profession, city and state, family details and an "About me" description.',
            'Photos you upload to your profile or album.',
            'Partner preferences, such as age range, location, education and other preferences you set.',
          ],
        },
        'Information created when you use the app:',
        {
          list: [
            'Interests you send, receive, accept or decline, favourite profiles and profiles you block.',
            'Messages you exchange with members after an interest is accepted.',
            'Reports you submit or that are submitted about you, and our review notes.',
            'Privacy and notification settings, such as photo privacy, hidden profile, incognito browsing and online status.',
            'Membership type (Free or Premium) and purchase records. Card and bank details are handled by the payment provider and are not stored by Humsafar.',
          ],
        },
        'Information collected automatically:',
        {
          list: [
            'Device and app information: device model, operating system, app version, language and crash logs.',
            'Usage information: log-in times, features used and approximate location derived from your IP address.',
            'Website visitors: basic, anonymous analytics about pages visited. Messages sent through our contact form include the name, email and message you enter.',
          ],
        },
        'Some profile details, such as religion and community, can be sensitive. You share them only because you choose to, to help find a compatible partner, and you can edit or remove them at any time.',
      ],
    },
    {
      id: 'why-we-use-it',
      title: 'Why we use your data',
      body: [
        {
          list: [
            'To create and run your account and verify your mobile number and email with a one-time password (OTP).',
            'To show your profile to other members and recommend compatible matches based on your preferences.',
            'To let you send interests, chat privately and manage who can see your photos and details.',
            'To review photos before they go live and keep the platform free of fake, misleading or inappropriate content.',
            'To investigate reports, block misuse, prevent fraud and scams, and keep members safe.',
            'To process Premium memberships and payments.',
            'To send service messages, such as OTPs, new interests, messages and important account or policy updates.',
            'To answer your support requests and complaints.',
            'To fix problems, measure performance and improve the app.',
            'To meet our legal obligations and respond to lawful requests from authorities.',
          ],
        },
        'We process your data on the basis of the consent you give when you sign up and use the app, and for legitimate uses permitted by law, such as complying with legal obligations and preventing fraud. We do not sell your personal data.',
      ],
    },
    {
      id: 'what-members-see',
      title: 'What other members can see',
      body: [
        'Your profile details and photos are visible to other registered members, subject to your privacy settings. You can hide your profile, limit your photos to accepted matches, browse in incognito mode and turn off your online status.',
        'Your mobile number and email address are not shown on your profile. They are shared only if you choose to share them, for example after accepting an interest.',
      ],
    },
    {
      id: 'sharing',
      title: 'Who we share data with',
      body: [
        'We share personal data only where needed to run Humsafar, and only with:',
        {
          list: [
            'Service providers who work on our behalf, such as cloud hosting, SMS and OTP delivery, email delivery, crash reporting and analytics. They may use the data only to provide their service to us.',
            'Payment providers, such as Google Play, the Apple App Store or a payment gateway, to process Premium purchases.',
            'Law enforcement, courts or government authorities, when required by law or to protect the safety of members or the public.',
            'A buyer or successor, if Humsafar is merged, acquired or transferred, who will remain bound by this policy.',
          ],
        },
        'Some service providers may store or process data on servers outside India. Where this happens, we take steps to make sure your data stays protected and is transferred only as permitted by Indian law.',
      ],
    },
    {
      id: 'retention',
      title: 'How long we keep data',
      body: [
        'We keep your personal data for as long as your account is active, so the app can work for you.',
        {
          list: [
            'When you delete your account, your profile, photos, preferences, interests and chats are removed from the app straight away and permanently deleted from our systems within 30 days.',
            'Limited records, such as reports about misuse, blocked accounts, payment records and logs, may be kept for longer where the law requires it or to prevent fraud and repeat abuse.',
            'Contact form messages and support emails are kept only as long as needed to handle your request.',
          ],
        },
      ],
    },
    {
      id: 'security',
      title: 'How we protect your data',
      body: [
        'We use reasonable security safeguards to protect your data, including encrypted connections (HTTPS), access controls that limit who in our team can see member data, and secure hosting. Photos are reviewed by our team before they go live.',
        'No online service is completely secure. Please keep your password and OTPs private. Humsafar will never ask you for your password or an OTP. If you notice any unusual activity on your account, contact us immediately.',
        'If a data breach affects your personal data, we will inform you and the Data Protection Board of India as required by law.',
      ],
    },
    {
      id: 'your-rights',
      title: 'Your rights',
      body: [
        'You have the right to:',
        {
          list: [
            'Access a summary of the personal data we hold about you and how it is used.',
            'Correct or update inaccurate or incomplete data. Most details can be edited directly in the app.',
            'Erase your data by deleting your account or asking us to delete it.',
            'Withdraw your consent at any time. Withdrawing consent may mean we can no longer provide the service.',
            'Have your complaints heard by our Grievance Officer, and, if you are not satisfied, approach the Data Protection Board of India.',
            'Nominate another person to exercise these rights on your behalf in case of death or incapacity.',
          ],
        },
        'To use any of these rights, email us from your registered email address or include your registered mobile number. We may need to confirm your identity before acting on a request.',
      ],
    },
    {
      id: 'age',
      title: 'Age requirement',
      body: [
        'Humsafar is only for adults looking for marriage. You must be at least 18 years old and legally able to marry under the laws that apply to you. We do not knowingly collect data from anyone under 18. If we learn that a profile belongs to a minor, we will delete it.',
      ],
    },
    {
      id: 'cookies',
      title: 'Cookies and analytics',
      body: [
        'Our website uses only the cookies and similar technologies needed to run the site and understand, in aggregate, how visitors use it. You can block or delete cookies in your browser settings.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to this policy',
      body: [
        'We may update this policy as Humsafar changes or the law changes. We will post the new version on this page with a new "Last updated" date and, for important changes, notify you in the app.',
      ],
    },
  ],
}

export const termsOfUse = {
  label: 'Terms of Use',
  title: 'Terms of',
  script: 'using Humsafar.',
  intro:
    'These Terms of Use are an agreement between you and Humsafar. By creating an account or using the app or website, you agree to these terms, our Privacy Policy and our Community Guidelines. Please read them carefully.',
  sections: [
    {
      id: 'service',
      title: 'About the service',
      body: [
        'Humsafar is a matrimonial and matchmaking platform for people who are looking for a life partner for marriage. It helps you create a profile, set partner preferences, discover compatible profiles, send interests and chat privately. Humsafar is not a dating app, and it is not a marriage bureau or agent.',
      ],
    },
    {
      id: 'eligibility',
      title: 'Who can use Humsafar',
      body: [
        {
          list: [
            'You must be at least 18 years old and legally able to marry under the laws that apply to you.',
            'You must be looking for marriage. Using Humsafar for casual dating, business, promotion or any other purpose is not allowed.',
            'You must not have been removed from Humsafar before, and you must not be prohibited from using the service by law.',
            'A parent, sibling, relative or friend may create a profile on behalf of someone, but only with that person’s knowledge and consent.',
          ],
        },
      ],
    },
    {
      id: 'account',
      title: 'Your account',
      body: [
        {
          list: [
            'Give accurate, current and complete information, and keep it up to date. Do not create a profile for a person who does not exist or without their consent.',
            'You may have only one active account.',
            'You are responsible for keeping your password and OTPs secret and for all activity on your account. Tell us immediately if you think your account has been misused.',
            'Photos must be recent, of the person the profile is for, and suitable for a family audience. We review photos and may reject or remove any photo.',
          ],
        },
      ],
    },
    {
      id: 'membership',
      title: 'Free and Premium membership',
      body: [
        'You can create a profile and use the basic features of Humsafar for free. Some features are available only with a paid Premium membership.',
        {
          list: [
            'The features, price and duration of each Premium plan are shown in the app before you pay. Prices include applicable taxes unless stated otherwise.',
            'Payments are processed by Google Play, the Apple App Store or our payment partner, and are subject to their terms.',
            'A Premium membership is personal to your account and cannot be transferred.',
            'Unless the plan clearly says it renews automatically, it ends at the end of its duration. Auto-renewing plans can be cancelled at any time from your Google Play or App Store subscription settings, before the next renewal date.',
            'Payments are generally non-refundable once a plan is active, except where the app store’s refund policy or applicable law requires a refund. If you were charged in error, contact us and we will help.',
            'If your account is suspended or removed for breaking these terms, any unused Premium period is not refunded.',
          ],
        },
        'Upgrading to Premium does not guarantee a match, a reply or a marriage.',
      ],
    },
    {
      id: 'prohibited',
      title: 'What you must not do',
      body: [
        {
          list: [
            'Create a fake profile, impersonate anyone or misrepresent your age, marital status, religion, education, profession, income or family.',
            'Harass, threaten, abuse, stalk or intimidate any member, or send sexual or obscene content.',
            'Ask any member for money, gifts, investments or financial details, or run any scam.',
            'Use Humsafar for dating, prostitution, trafficking or any illegal activity.',
            'Promote or sell any product, service or business, or send spam or chain messages.',
            'Copy, download, share or misuse other members’ photos or personal details outside Humsafar.',
            'Ask for or demand dowry. Dowry is illegal in India under the Dowry Prohibition Act, 1961.',
            'Use bots, scrapers or automated tools, try to hack, reverse engineer or overload the app, or get around any security or privacy setting.',
            'Post content that is hateful, discriminatory or that insults any religion, community or caste.',
          ],
        },
        'Our Community Guidelines explain these rules in more detail.',
      ],
    },
    {
      id: 'content',
      title: 'Your content',
      body: [
        'You own the content you add to Humsafar, such as your profile text and photos. By adding it, you give Humsafar a non-exclusive, royalty-free licence to store, display and process it only for running and improving the service, for example showing your profile to matching members. This licence ends when you delete the content or your account, except for copies we must keep as described in our Privacy Policy.',
        'You are responsible for the content you post and confirm that you have the right to post it.',
      ],
    },
    {
      id: 'moderation',
      title: 'Moderation, suspension and removal',
      body: [
        'We review photos, profiles and reports, and may remove content, limit features, suspend or permanently remove any account that breaks these terms or the Community Guidelines, or that puts members at risk. Where appropriate, we will tell you why. If you believe we made a mistake, you can contact us and ask us to review the decision.',
        'We may report illegal activity to the police or other authorities.',
      ],
    },
    {
      id: 'safety',
      title: 'Your safety and responsibility',
      body: [
        'Humsafar verifies mobile numbers and email addresses and reviews photos, but we cannot verify everything a member says about themselves, and we do not run criminal background checks. You are responsible for your own interactions with other members, both online and offline.',
        'Before you commit to anyone, verify their details independently, involve your family, video call before meeting, and meet in a public place. Never send money to anyone you meet on Humsafar. Please read our Safety & Trust page.',
      ],
    },
    {
      id: 'liability',
      title: 'Disclaimers and limitation of liability',
      body: [
        'Humsafar is provided "as is" and "as available". We work hard to keep it running and secure, but we do not promise that it will always be available, error-free, or that you will find a match or get married.',
        'Humsafar is not responsible for the conduct of any member, on or off the platform, or for the accuracy of information members provide. To the fullest extent permitted by law, Humsafar will not be liable for any indirect, incidental or consequential loss arising from your use of the service. Where we are liable, our total liability to you is limited to the amount you paid us for Premium membership in the 12 months before the claim.',
        'Nothing in these terms limits any right you have under applicable consumer protection law that cannot be limited.',
      ],
    },
    {
      id: 'ending',
      title: 'Ending your use of Humsafar',
      body: [
        'You can stop using Humsafar and delete your account at any time from the app or from our Delete Account page. These terms will continue to apply to anything that happened before your account was deleted.',
      ],
    },
    {
      id: 'law',
      title: 'Governing law and disputes',
      body: [
        'These terms are governed by the laws of India. If you have a complaint, please contact us or our Grievance Officer first, and we will try to resolve it. Any dispute that cannot be resolved will be subject to the jurisdiction of the courts in India where Humsafar is registered.',
      ],
    },
    {
      id: 'changes',
      title: 'Changes to these terms',
      body: [
        'We may update these terms from time to time. We will post the new version here with a new "Last updated" date and, for important changes, notify you in the app. If you keep using Humsafar after the changes take effect, you accept the updated terms.',
      ],
    },
  ],
}

export const communityGuidelines = {
  label: 'Community Guidelines',
  title: 'A respectful community,',
  script: 'built for marriage.',
  intro:
    'Humsafar is a place for people and families who are serious about marriage. These guidelines explain how we expect every member to behave, what is not allowed, and how to report someone who breaks the rules.',
  sections: [
    {
      id: 'be-genuine',
      title: 'Be genuine',
      body: [
        {
          list: [
            'Use your real name, age and details. Be honest about your marital status, education, profession and family.',
            'Upload recent photos that clearly show the person the profile is for. No group photos as your main picture, celebrities, cartoons or images from the internet.',
            'If you create a profile for a family member, they must know about it and agree to it.',
            'Only one profile per person.',
          ],
        },
      ],
    },
    {
      id: 'be-respectful',
      title: 'Be respectful',
      body: [
        {
          list: [
            'Treat every member and their family with courtesy, even if you are not interested.',
            'Accept a "no" gracefully. If someone declines your interest, does not reply or blocks you, do not contact them again through another account or channel.',
            'Keep your messages, photos and language appropriate for a family audience.',
            'Respect every religion, community, region and language.',
          ],
        },
      ],
    },
    {
      id: 'harassment',
      title: 'No harassment or abuse',
      body: [
        'We do not allow:',
        {
          list: [
            'Threats, insults, bullying, stalking or repeated unwanted messages.',
            'Sexual, vulgar or obscene messages, photos or requests.',
            'Pressuring anyone to share their phone number, photos, location or personal details before they are ready.',
            'Hate speech or discrimination based on religion, caste, community, gender, disability, skin colour or appearance.',
            'Sharing another member’s photos, chats or details outside Humsafar without their permission.',
          ],
        },
      ],
    },
    {
      id: 'impersonation',
      title: 'No fake profiles or impersonation',
      body: [
        'Pretending to be someone else, using someone else’s photos, creating a profile without the person’s consent, or misrepresenting who you are is not allowed. Fake profiles are removed and may be reported to the police.',
      ],
    },
    {
      id: 'scams',
      title: 'No scams or money requests',
      body: [
        'Never ask another member for money, gifts, loans, investments, bank details, OTPs or documents such as Aadhaar or PAN, for any reason. This includes "emergencies", customs fees, visa costs, medical bills or investment and trading offers.',
        'Asking for or demanding dowry is illegal and is strictly not allowed.',
        'Members who try to scam others are removed permanently and may be reported to the police. If anyone asks you for money, stop talking to them, block them and report them.',
      ],
    },
    {
      id: 'content-rules',
      title: 'No abusive or inappropriate content',
      body: [
        'Profiles, photos and messages must not contain:',
        {
          list: [
            'Nudity, sexual content or suggestive photos.',
            'Violence, weapons, drugs or anything illegal.',
            'Advertising, links to other apps or websites, business promotion or spam.',
            'Content that insults any religion or community.',
            'Personal contact details in your public profile text.',
          ],
        },
      ],
    },
    {
      id: 'minors',
      title: 'Adults only',
      body: [
        'Humsafar is only for adults who are legally able to marry. Profiles of anyone under 18 are removed immediately. If you believe a profile belongs to a minor, please report it.',
      ],
    },
    {
      id: 'reporting',
      title: 'How to report',
      body: [
        'If someone breaks these guidelines or makes you feel unsafe:',
        {
          list: [
            'Open their profile or your chat with them and tap Report. Choose the reason that fits best, such as fake profile, harassment, asking for money or inappropriate content.',
            'Tap Block to stop them from seeing your profile, sending you interests or messaging you.',
            'For anything serious, also email us with the member’s profile name or ID, what happened and screenshots if you have them.',
            'If you are in immediate danger, call 112. For online fraud, call the national cyber crime helpline 1930 or report at cybercrime.gov.in.',
          ],
        },
        'Reports are confidential. The member you report is not told who reported them.',
      ],
    },
    {
      id: 'enforcement',
      title: 'What happens when rules are broken',
      body: [
        'Our team reviews every report. Depending on how serious it is, we may give a warning, remove content, limit features, suspend the account or remove it permanently. Serious cases, such as scams, threats or exploitation, may be reported to the police. If your account was actioned and you believe it was a mistake, contact us and we will review it.',
      ],
    },
  ],
}
