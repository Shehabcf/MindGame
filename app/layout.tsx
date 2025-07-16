import type React from "react"
import type { Metadata } from "next"
import { Inter, Orbitron } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AuthProvider } from "@/contexts/auth-context"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-orbitron" })

export const metadata: Metadata = {
  title: "GamerMind - Mental Health Support for Gamers",
  description: "A supportive platform for gamers dealing with mental health challenges",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>
      <body className="min-h-screen bg-slate-900 text-white font-inter">
        <AuthProvider>
          <div className="relative min-h-screen">
            {/* Animated background */}
            <div className="fixed inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20">
              <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            </div>

            <div className="relative z-10">
              <Navigation />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
