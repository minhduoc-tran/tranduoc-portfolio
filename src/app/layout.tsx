import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import localFont from 'next/font/local'

import CanvasCursor from '@/components/common/canvas-cursor'
import { ThemeProvider } from '@/provider/theme-provider'

import './globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 200 300 400 500 600 700 800 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 200 300 400 500 600 700 800 900',
})

const sourceCodePro = Source_Code_Pro({
  subsets: ['vietnamese', 'latin'],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-source-code-pro',
})

export const metadata: Metadata = {
  title: 'Tran Duoc',
  description: 'Personal portfolio create by Tran Duoc',
  openGraph: {
    title: 'Trần Được',
    description: 'I am a Software Engineer',
    siteName: 'Tran Duoc',
    type: 'website',
    images: [
      {
        url: '/images/DHF_1747.jpg',
        secureUrl: '/images/DHF_1747.jpg',
      },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sourceCodePro.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <CanvasCursor />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
