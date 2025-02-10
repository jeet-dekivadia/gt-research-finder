import { Inter, Space_Grotesk } from 'next/font/google'
import type { Metadata } from 'next'
import './globals.css'
import React from 'react'
import CustomCursor from '@/components/CustomCursor'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
})

export const metadata: Metadata = {
  title: 'GT Research Finder',
  description: 'Find research opportunities at Georgia Tech',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="font-sans bg-black min-h-screen">
        <CustomCursor />
        {children}
      </body>
    </html>
  )
}
