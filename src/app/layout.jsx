import { Inter, Lexend } from 'next/font/google'
import clsx from 'clsx'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Josmaxim',
    default: 'Josmaxim - Legacy Planning made simple for boutique investors',
  },
  description:
    'Unlocking Possibilities, One Investment at a Time. Our financial wizards turn dreams into dollars, ideas into investments, and plans into profits.',
}

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const lexend = Lexend({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-lexend',
})

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={clsx(
        'h-full scroll-smooth bg-white antialiased',
        inter.variable,
        lexend.variable,
      )}
    >
      <body className="flex h-full flex-col">{children}</body>
    </html>
  )
}
