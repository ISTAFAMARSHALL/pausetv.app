/** Replace the marked values before publishing. */
export const IPHONE_APP_LINK = 'https://apps.apple.com/us/app/pause-teevee/id6777469362'
// This is the same App Store record; Apple presents the supported platform version.
export const APPLE_TV_APP_LINK = IPHONE_APP_LINK
// Latest Fire TV release on github.com/ISTAFAMARSHALL/teevee-firetv-releases. Update both lines together.
export const FIRE_TV_VERSION = '1.1.0'
export const AMAZON_SIDELOAD_APK_LINK = 'https://github.com/ISTAFAMARSHALL/teevee-firetv-releases/releases/download/firetv-v1.1.0-vc95/application-2b353cd1-4b0c-4461-8702-16ec5b42605b.apk'
export const AFTV_CODE = '7344014'

export const LINKS = {
  iphone: IPHONE_APP_LINK,
  appleTv: APPLE_TV_APP_LINK,
  fireTvApk: AMAZON_SIDELOAD_APK_LINK,
  privacy: 'https://rad-medovik-d72bb2.netlify.app/privacy.html',
  terms: 'https://rad-medovik-d72bb2.netlify.app/terms.html',
  support: 'https://rad-medovik-d72bb2.netlify.app/support.html',
} as const

/**
 * Plans, prices and feature lists mirror the in-app paywall
 * (teevee-app/native/screens/PaywallScreen.tsx + lib/entitlements.ts). Keep them in sync.
 */
export type Plan = {
  id: 'free' | 'sync' | 'plus' | 'pro' | 'lifetime'
  name: string
  tagline: string
  monthly: string
  yearly?: string
  oneTime?: boolean
  featured?: boolean
  features: string[]
}

export const PLANS: Plan[] = [
  {
    id: 'free',
    name: 'Free',
    tagline: 'Basic streaming and parental controls on one device.',
    monthly: '$0',
    features: ['1 account', '1 device', '1 provider', 'Live TV, movies and series', 'Continue Watching, favorites and search', 'Advanced parental controls'],
  },
  {
    id: 'sync',
    name: 'Sync',
    tagline: 'Cloud sync and priority support on two devices.',
    monthly: '$1.99',
    yearly: '$14.99',
    features: ['1 account', '2 devices', '2 providers', 'Cloud sync — favorites, progress, settings and PIN', 'Priority support'],
  },
  {
    id: 'plus',
    name: 'Plus',
    tagline: 'Custom guide and 2-way multi-view on three devices.',
    monthly: '$4.99',
    yearly: '$39.99',
    featured: true,
    features: ['Everything in Sync', '3 devices', '3 providers', 'Custom EPG and channel numbering', '2-way multi-view', 'Online subtitle search', 'Theme packs'],
  },
  {
    id: 'pro',
    name: 'Pro',
    tagline: '4-way multi-view, reminders and downloads on five devices.',
    monthly: '$9.99',
    yearly: '$79.99',
    features: ['Everything in Plus', '5 devices', 'Unlimited providers', '4-way multi-view', 'Programme reminders — get notified, tune in with one press', 'Offline downloads', 'Custom EPG source', '15 more theme packs'],
  },
  {
    id: 'lifetime',
    name: 'Lifetime',
    tagline: 'Every feature, forever. No subscription.',
    monthly: '$49.99',
    oneTime: true,
    features: ['All features forever', 'No subscription needed', 'All current and future features'],
  },
]
