# Pause TeeVee — pausetv.app

The public landing page for **Pause TeeVee**, a polished player for the streaming service a user already has. This site is a standalone Next.js project and does not modify the sibling `teevee-app` application.

## Product positioning

Pause TeeVee lets users connect an Xtream Codes account or M3U playlist from a service they are authorized to access, then browse and watch their live TV, movies, and series.

Pause TeeVee is a player only. It does not provide, sell, host, or bundle channels or content.

Verified product functionality represented on the site:

- Live TV with a program guide (EPG)
- Movies and series from the user’s connected service
- Continue Watching, favorites, and search
- Picture in Picture plus audio and subtitle controls on supported devices
- Remote-first Apple TV and Fire TV experience
- Xtream Codes and M3U provider setup

## Supported access paths

| Platform | Path |
| --- | --- |
| iPhone / iPad | [App Store](https://apps.apple.com/us/app/pause-teevee/id6777469362) |
| Apple TV | Uses the same Pause TeeVee App Store record |
| Amazon Fire TV | Sideload via Downloader code `7344014` or the direct APK link configured in `lib/constants.ts` |

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
3. Update the Fire TV APK URL in `lib/constants.ts` when a new release is published.
4. Confirm the linked privacy policy, terms, and support pages remain current.
