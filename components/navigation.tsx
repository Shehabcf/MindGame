"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState, useRef, useEffect } from "react"
import { Menu, X, Heart, MessageCircle, BookOpen, Lightbulb, Users, User, LogOut } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { AuthModal } from "@/components/auth-modal"

const navItems = [
  { href: "/", label: "Home", icon: Heart },
  { href: "/articles", label: "Articles", icon: BookOpen },
  { href: "/chat", label: "Chat", icon: MessageCircle },
  { href: "/tips", label: "Tips", icon: Lightbulb },
  { href: "/stories", label: "Stories", icon: Users },
]

export function Navigation() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [authModalOpen, setAuthModalOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const userMenuRef = useRef<HTMLDivElement>(null)

  const { user, logout, isAuthenticated } = useAuth()

  // Close user menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target as Node)) {
        setUserMenuOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleLogout = () => {
    logout()
    setUserMenuOpen(false)
    setIsOpen(false)
  }

  const openAuthModal = () => {
    setAuthModalOpen(true)
    setIsOpen(false)
  }

  return (
    <>
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-400/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-black" />
              </div>
              <span className="font-gaming text-xl font-bold neon-text">GamerMind</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/50"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}
            </div>

            {/* Desktop Auth */}
            <div className="hidden md:flex items-center space-x-4">
              {isAuthenticated && user ? (
                <div className="relative" ref={userMenuRef}>
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center space-x-2 px-3 py-2 rounded-lg text-cyan-400 hover:bg-cyan-400/10 transition-colors"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-black font-bold text-sm">{user.username[0].toUpperCase()}</span>
                    </div>
                    <span className="max-w-24 truncate">{user.username}</span>
                  </button>

                  {userMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-slate-800 border border-cyan-400/30 rounded-lg shadow-lg z-50">
                      <div className="p-2">
                        <div className="px-3 py-2 text-sm text-gray-400 border-b border-gray-700">{user.email}</div>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-3 py-2 text-gray-300 hover:text-red-400 hover:bg-red-400/10 rounded transition-colors flex items-center"
                        >
                          <LogOut className="w-4 h-4 mr-2" />
                          Sign Out
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <button onClick={openAuthModal} className="glow-button text-sm px-4 py-2">
                  <User className="w-4 h-4 mr-2 inline" />
                  Sign In
                </button>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10 transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-cyan-400/30">
              {/* Navigation items */}
              {navItems.map((item) => {
                const Icon = item.icon
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/50"
                        : "text-gray-300 hover:text-cyan-400 hover:bg-cyan-400/10"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                )
              })}

              {/* Mobile Auth */}
              <div className="px-4 py-3 border-t border-cyan-400/30 mt-4">
                {isAuthenticated && user ? (
                  <div className="space-y-2">
                    <div className="flex items-center space-x-3 text-cyan-400">
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-black font-bold text-sm">{user.username[0].toUpperCase()}</span>
                      </div>
                      <div>
                        <div className="font-semibold">{user.username}</div>
                        <div className="text-xs text-gray-400">{user.email}</div>
                      </div>
                    </div>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-3 py-2 text-red-400 hover:bg-red-400/10 rounded transition-colors flex items-center"
                    >
                      <LogOut className="w-4 h-4 mr-2" />
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <button onClick={openAuthModal} className="glow-button w-full flex items-center justify-center">
                    <User className="w-4 h-4 mr-2" />
                    Sign In
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>

      <AuthModal isOpen={authModalOpen} onClose={() => setAuthModalOpen(false)} />
    </>
  )
}
