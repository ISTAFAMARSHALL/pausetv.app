/** Replace the marked values before publishing. */
export const IPHONE_APP_LINK = 'https://apps.apple.com/us/app/pause-teevee/id6777469362'
// This is the same App Store record; Apple presents the supported platform version.
export const APPLE_TV_APP_LINK = IPHONE_APP_LINK
export const AMAZON_SIDELOAD_APK_LINK = 'https://github.com/ISTAFAMARSHALL/teevee-firetv-releases/releases/download/firetv-v1.0.1-vc39/teevee-firetv-v1.0.1-vc39.apk'
export const AFTV_CODE = '7344014'

export const LINKS = {
  iphone: IPHONE_APP_LINK,
  appleTv: APPLE_TV_APP_LINK,
  fireTvApk: AMAZON_SIDELOAD_APK_LINK,
  privacy: 'https://rad-medovik-d72bb2.netlify.app/privacy.html',
  terms: 'https://rad-medovik-d72bb2.netlify.app/terms.html',
  support: 'https://rad-medovik-d72bb2.netlify.app/support.html',
} as const
