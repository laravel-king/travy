import React from "react"
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Travy - Landing page',
  description: 'Travel UI/UX landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className={outfit.className}>
        <Navbar />
          <main className="relative overflow-hidden">
            {children}
          </main>
        <Footer />
      </body>
    </html>
  )
}
