"use client"

import type React from "react"
import { createContext, useContext, useState, useEffect } from "react"

interface User {
  id: string
  username: string
  email: string
  joinDate: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>
  register: (username: string, email: string, password: string) => Promise<{ success: boolean; error?: string }>
  logout: () => void
  isLoading: boolean
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

// Mock user database for demonstration
const mockUsers: { [email: string]: { password: string; user: User } } = {
  "demo@gamermind.com": {
    password: "password123",
    user: {
      id: "1",
      username: "DemoUser",
      email: "demo@gamermind.com",
      joinDate: "2024-01-01",
    },
  },
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Check for stored user data on mount
    try {
      const storedUser = localStorage.getItem("gamermind_user")
      const storedToken = localStorage.getItem("gamermind_token")

      if (storedUser && storedToken) {
        const userData = JSON.parse(storedUser)
        // Verify token is still valid (in real app, this would be server-side)
        const tokenData = JSON.parse(atob(storedToken.split(".")[1] || "{}"))
        if (tokenData.exp > Date.now() / 1000) {
          setUser(userData)
        } else {
          // Token expired, clear storage
          localStorage.removeItem("gamermind_user")
          localStorage.removeItem("gamermind_token")
        }
      }
    } catch (error) {
      console.error("Error loading user data:", error)
      localStorage.removeItem("gamermind_user")
      localStorage.removeItem("gamermind_token")
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check credentials
      const userRecord = mockUsers[email]
      if (!userRecord || userRecord.password !== password) {
        setIsLoading(false)
        return { success: false, error: "Invalid email or password" }
      }

      // Create mock JWT token
      const token = btoa(
        JSON.stringify({
          userId: userRecord.user.id,
          email: userRecord.user.email,
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 hours
        }),
      )

      // Store user data and token
      setUser(userRecord.user)
      localStorage.setItem("gamermind_user", JSON.stringify(userRecord.user))
      localStorage.setItem("gamermind_token", `header.${token}.signature`)

      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: "Login failed. Please try again." }
    }
  }

  const register = async (
    username: string,
    email: string,
    password: string,
  ): Promise<{ success: boolean; error?: string }> => {
    setIsLoading(true)

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Check if user already exists
      if (mockUsers[email]) {
        setIsLoading(false)
        return { success: false, error: "User with this email already exists" }
      }

      // Validate input
      if (!username.trim() || username.length < 3) {
        setIsLoading(false)
        return { success: false, error: "Username must be at least 3 characters" }
      }

      if (password.length < 6) {
        setIsLoading(false)
        return { success: false, error: "Password must be at least 6 characters" }
      }

      // Create new user
      const newUser: User = {
        id: Date.now().toString(),
        username: username.trim(),
        email,
        joinDate: new Date().toISOString(),
      }

      // Add to mock database
      mockUsers[email] = {
        password,
        user: newUser,
      }

      // Create mock JWT token
      const token = btoa(
        JSON.stringify({
          userId: newUser.id,
          email: newUser.email,
          exp: Math.floor(Date.now() / 1000) + 24 * 60 * 60, // 24 hours
        }),
      )

      // Store user data and token
      setUser(newUser)
      localStorage.setItem("gamermind_user", JSON.stringify(newUser))
      localStorage.setItem("gamermind_token", `header.${token}.signature`)

      setIsLoading(false)
      return { success: true }
    } catch (error) {
      setIsLoading(false)
      return { success: false, error: "Registration failed. Please try again." }
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("gamermind_user")
    localStorage.removeItem("gamermind_token")
  }

  const value = {
    user,
    login,
    register,
    logout,
    isLoading,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
