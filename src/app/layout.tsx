import type { Metadata } from 'next'
import { Source_Code_Pro } from 'next/font/google'
import localFont from 'next/font/local'

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
        {children}
      </body>
    </html>
  )
}
