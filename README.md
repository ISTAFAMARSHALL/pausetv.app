# Pause TeeVee — pausetv.app

The public landing page for **Pause TeeVee**, a polished player for the streaming service a user already has. This site is a standalone Next.js project and does not modify the sibling `teevee-app` application.

## Product positioning

Pause TeeVee lets users connect an Xtream Codes account or M3U playlist from a service they are authorized to access, then browse and watch their live TV, movies, and series.

Pause TeeVee is a player only. It does not provide, sell, host, or bundle channels or content.

Verified product functionality represented on the site:

- Live TV with a program guide (EPG), channel numbering, hide/reorder, custom XMLTV guide source
- Multi-view: 2 channels (Plus) or 4 channels (Pro) on Apple TV, Fire TV and iPhone
- Movies and series from the user’s connected service
- Continue Watching, favorites, and search; cloud sync across devices (Sync plan and up)
- Picture in Picture, audio and subtitle controls, online subtitle search (Plus), sleep timer
- Offline downloads and programme reminders (Pro)
- Parental PIN app lock and rating filters (all plans)
- Accent / background theme packs (Plus, more on Pro)
- Remote-first Apple TV and Fire TV experience
- Xtream Codes and M3U provider setup

## Plans and prices

The pricing section is driven by `PLANS` in `lib/constants.ts`, which mirrors the in-app paywall
(`teevee-app/native/screens/PaywallScreen.tsx` and `native/lib/entitlements.ts`). When a price or
feature list changes in the app, change it there too.

| Plan | Monthly | Yearly |
| --- | --- | --- |
| Free | $0 | — |
| Sync | $1.99 | $14.99 |
| Plus | $4.99 | $39.99 |
| Pro | $9.99 | $79.99 |
| Lifetime | $49.99 one time | — |

## Supported access paths

| Platform | Path |
| --- | --- |
| iPhone / iPad | [App Store](https://apps.apple.com/us/app/pause-teevee/id6777469362) |
| Apple TV | Uses the same Pause TeeVee App Store record |
| Amazon Fire TV | Sideload via Downloader code `4935510` or the direct APK link configured in `lib/constants.ts` (`FIRE_TV_VERSION` + `AMAZON_SIDELOAD_APK_LINK`, currently v1.2.0 / vc97) |

## Run locally

```bash
npm install
npm run dev
```

Open the local URL printed by Next.js, normally `http://localhost:3000`.

## Production checks

```bash
npm run lint
npm run build
npm run start
```

## Key files

- `app/page.tsx` — landing-page content and sections
- `app/globals.css` — responsive design system and visual styling
- `app/layout.tsx` — SEO, Open Graph, Twitter, favicon, and Apple web-app metadata
- `lib/constants.ts` — App Store, Fire TV APK, and Downloader destinations
- `public/site.webmanifest` — installable-web-app metadata

## Brand assets

The site uses the approved Pause TeeVee native app icon and a Knicks Blue / Knicks Orange visual system:

- Background: `#04101e`
- Accent: `#f58426`
- `public/icon.png`, `public/logo.png`, `public/favicon.ico`, and `public/favicon.svg`
- Apple touch and web-manifest icon variants
- `public/og-image.png` for social link previews

## Before deployment

1. Point `www.pausetv.app` to the host serving this project.
2. Confirm the current App Store record continues to include the intended Apple TV version.
3. Update `FIRE_TV_VERSION` and the APK URL in `lib/constants.ts` when a new Fire TV release is published, and re-point the Downloader code at the new APK.
4. Confirm the linked privacy policy, terms, and support pages remain current.
