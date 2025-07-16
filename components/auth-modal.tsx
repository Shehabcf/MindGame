"use client"

import type React from "react"
import { useState } from "react"
import { X, User, Mail, Lock, LogIn, UserPlus, Eye, EyeOff } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  defaultMode?: "login" | "register"
}

export function AuthModal({ isOpen, onClose, defaultMode = "login" }: AuthModalProps) {
  const [mode, setMode] = useState<"login" | "register">(defaultMode)
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  })
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [error, setError] = useState("")
  const { login, register, isLoading } = useAuth()

  if (!isOpen) return null

  const resetForm = () => {
    setFormData({
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    })
    setError("")
    setShowPassword(false)
    setShowConfirmPassword(false)
  }

  const handleClose = () => {
    resetForm()
    onClose()
  }

  const handleModeSwitch = (newMode: "login" | "register") => {
    setMode(newMode)
    resetForm()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (mode === "register") {
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords don't match")
        return
      }

      const result = await register(formData.username, formData.email, formData.password)
      if (result.success) {
        handleClose()
      } else {
        setError(result.error || "Registration failed")
      }
    } else {
      const result = await login(formData.email, formData.password)
      if (result.success) {
        handleClose()
      } else {
        setError(result.error || "Login failed")
      }
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
    // Clear error when user starts typing
    if (error) setError("")
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="gaming-card max-w-md w-full relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            {mode === "login" ? <LogIn className="w-8 h-8 text-black" /> : <UserPlus className="w-8 h-8 text-black" />}
          </div>
          <h2 className="font-gaming text-2xl font-bold neon-text">
            {mode === "login" ? "Welcome Back" : "Join GamerMind"}
          </h2>
          <p className="text-gray-300 mt-2">
            {mode === "login" ? "Sign in to continue your journey" : "Start your healing journey today"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {mode === "register" && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Username *</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  required
                  minLength={3}
                  className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Choose a username"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Password *</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                minLength={6}
                className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                placeholder="Enter your password"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {mode === "register" && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Confirm Password *</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  required
                  minLength={6}
                  className="w-full pl-10 pr-12 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                  placeholder="Confirm your password"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          )}

          {error && (
            <div className="p-3 bg-red-900/20 border border-red-400/30 rounded-lg text-red-400 text-sm">{error}</div>
          )}

          {mode === "login" && (
            <div className="p-3 bg-blue-900/20 border border-blue-400/30 rounded-lg text-blue-400 text-sm">
              <strong>Demo Account:</strong> demo@gamermind.com / password123
            </div>
          )}

          <button
            type="submit"
            disabled={isLoading}
            className="glow-button w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isLoading ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                {mode === "login" ? "Signing In..." : "Creating Account..."}
              </>
            ) : (
              <>
                {mode === "login" ? <LogIn className="w-5 h-5 mr-2" /> : <UserPlus className="w-5 h-5 mr-2" />}
                {mode === "login" ? "Sign In" : "Create Account"}
              </>
            )}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-400">
            {mode === "login" ? "Don't have an account?" : "Already have an account?"}
            <button
              onClick={() => handleModeSwitch(mode === "login" ? "register" : "login")}
              className="text-cyan-400 hover:text-cyan-300 ml-2 font-semibold transition-colors"
            >
              {mode === "login" ? "Sign Up" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  )
}
