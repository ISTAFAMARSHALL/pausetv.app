import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pausetv.app'),
  title: 'Pause TeeVee | Your TV, beautifully',
  description: 'A polished player for the streaming service you already use.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico', type: 'image/x-icon', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '1024x1024' },
    ],
    apple: [{ url: '/apple-touch-icon.png', type: 'image/png', sizes: '1024x1024' }],
  },
  appleWebApp: {
    capable: true,
    title: 'Pause TeeVee',
    statusBarStyle: 'black-translucent',
  },
  openGraph: {
    type: 'website',
    url: '/',
    title: 'Pause TeeVee | Your TV, beautifully',
    description: 'A polished player for the streaming service you already use.',
    siteName: 'Pause TeeVee',
    images: [{ url: '/og-image.png', width: 1731, height: 909, alt: 'Pause TeeVee cinematic television experience' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pause TeeVee | Your TV, beautifully',
    description: 'A polished player for the streaming service you already use.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
