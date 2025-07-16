"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { Send, Shield, AlertTriangle, Users, Smile, Lock } from "lucide-react"
import { useAuth } from "@/contexts/auth-context"
import { ReportModal } from "@/components/report-modal"

interface Message {
  id: string
  username: string
  message: string
  timestamp: Date
  isSystem?: boolean
  isBot?: boolean
  color: string
}

const userColors = [
  "text-cyan-400",
  "text-purple-400",
  "text-pink-400",
  "text-green-400",
  "text-yellow-400",
  "text-orange-400",
  "text-blue-400",
  "text-red-400",
]

const systemMessages = [
  "Remember: You're not alone in this journey. 💙",
  "Take breaks when you need them. Self-care is important. 🌟",
  "This is a safe space for everyone. Please be kind. 💚",
  "If you're in crisis, please reach out to a professional. 🆘",
  "Small steps lead to big changes. Keep going! ⭐",
]

const botUsers = [
  {
    username: "SupportBot",
    color: "text-cyan-400",
    responses: [
      "Remember, it's okay to take breaks when you need them. Your mental health comes first! 💙",
      "You're not alone in this journey. Many gamers face similar challenges, and recovery is possible.",
      "Small steps lead to big changes. Celebrate every victory, no matter how small! ⭐",
      "If you're feeling overwhelmed, try the 4-7-8 breathing technique: inhale for 4, hold for 7, exhale for 8.",
      "Gaming can be part of a healthy lifestyle when balanced with other activities. You've got this! 🎮",
    ],
  },
  {
    username: "WellnessGuide",
    color: "text-purple-400",
    responses: [
      "Have you tried setting gaming timers? They can help build awareness of time spent playing.",
      "Physical activity between gaming sessions can boost mood and energy. Even 5 minutes helps!",
      "Sleep is crucial for mental health. Consider setting a gaming curfew 1 hour before bed.",
      "Connecting with friends outside of gaming can provide valuable perspective and support.",
      "Mindful gaming means being present and intentional with your play time. Quality over quantity! 🧘",
    ],
  },
]

const sampleMessages: Message[] = [
  {
    id: "1",
    username: "GamerSupport",
    message: "Welcome to the GamerMind anonymous chat! This is a safe space to share and support each other.",
    timestamp: new Date(Date.now() - 300000),
    isSystem: true,
    color: "text-cyan-400",
  },
  {
    id: "2",
    username: "PlayerOne",
    message: "Hey everyone, having a tough day with my gaming habits. Anyone else struggle with setting boundaries?",
    timestamp: new Date(Date.now() - 240000),
    color: "text-purple-400",
  },
  {
    id: "3",
    username: "PixelWarrior",
    message:
      "@PlayerOne I totally get it. I started using a timer app and it really helped me become more aware of my time.",
    timestamp: new Date(Date.now() - 180000),
    color: "text-green-400",
  },
  {
    id: "4",
    username: "QuestSeeker",
    message: "The hardest part for me was admitting I had a problem. But this community makes it feel less scary.",
    timestamp: new Date(Date.now() - 120000),
    color: "text-yellow-400",
  },
]

export default function ChatPage() {
  const { isAuthenticated } = useAuth()
  const [messages, setMessages] = useState<Message[]>(sampleMessages)
  const [newMessage, setNewMessage] = useState("")
  const [username, setUsername] = useState("")
  const [isJoined, setIsJoined] = useState(false)
  const [onlineUsers] = useState(47)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const [userColor, setUserColor] = useState("")
  const [reportModalOpen, setReportModalOpen] = useState(false)
  const [reportingMessage, setReportingMessage] = useState<{ id: string; username: string } | null>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  // System messages
  useEffect(() => {
    if (!isJoined) return

    const interval = setInterval(() => {
      const randomMessage = systemMessages[Math.floor(Math.random() * systemMessages.length)]
      const systemMessage: Message = {
        id: Date.now().toString(),
        username: "GamerMind",
        message: randomMessage,
        timestamp: new Date(),
        isSystem: true,
        color: "text-cyan-400",
      }
      setMessages((prev) => [...prev, systemMessage])
    }, 30000)

    return () => clearInterval(interval)
  }, [isJoined])

  // Bot responses
  useEffect(() => {
    if (!isJoined) return

    const interval = setInterval(() => {
      if (Math.random() < 0.3) {
        const randomBot = botUsers[Math.floor(Math.random() * botUsers.length)]
        const randomResponse = randomBot.responses[Math.floor(Math.random() * randomBot.responses.length)]

        const botMessage: Message = {
          id: Date.now().toString(),
          username: randomBot.username,
          message: randomResponse,
          timestamp: new Date(),
          isBot: true,
          color: randomBot.color,
        }
        setMessages((prev) => [...prev, botMessage])
      }
    }, 45000)

    return () => clearInterval(interval)
  }, [isJoined])

  const handleJoinChat = () => {
    if (username.trim()) {
      setIsJoined(true)
      const randomColor = userColors[Math.floor(Math.random() * userColors.length)]
      setUserColor(randomColor)

      const joinMessage: Message = {
        id: Date.now().toString(),
        username: "System",
        message: `${username} joined the chat`,
        timestamp: new Date(),
        isSystem: true,
        color: "text-gray-400",
      }
      setMessages((prev) => [...prev, joinMessage])
    }
  }

  const handleSendMessage = () => {
    if (newMessage.trim() && isJoined) {
      const message: Message = {
        id: Date.now().toString(),
        username,
        message: newMessage.trim(),
        timestamp: new Date(),
        color: userColor,
      }
      setMessages((prev) => [...prev, message])
      setNewMessage("")
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      if (isJoined) {
        handleSendMessage()
      } else {
        handleJoinChat()
      }
    }
  }

  const reportMessage = (messageId: string, username: string) => {
    setReportingMessage({ id: messageId, username })
    setReportModalOpen(true)
  }

  // Require authentication for chat access
  if (!isAuthenticated) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="gaming-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-red-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Lock className="w-8 h-8 text-black" />
            </div>

            <h1 className="font-gaming text-2xl font-bold mb-4 text-red-400">Authentication Required</h1>

            <p className="text-gray-300 mb-6">
              You need to be signed in to access the anonymous chat. This helps us maintain a safe and supportive
              environment.
            </p>

            <button onClick={() => (window.location.href = "/")} className="glow-button w-full">
              Sign In to Continue
            </button>

            <div className="mt-6 p-4 bg-blue-900/20 border border-blue-400/30 rounded-lg">
              <div className="flex items-center text-blue-400 mb-2">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">Why Sign In?</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Prevents spam and abuse</li>
                <li>• Enables better moderation</li>
                <li>• Your chat remains anonymous</li>
                <li>• Helps maintain community safety</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!isJoined) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="max-w-md mx-auto px-4">
          <div className="gaming-card text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-black" />
            </div>

            <h1 className="font-gaming text-2xl font-bold mb-4 neon-text">Join Anonymous Chat</h1>

            <p className="text-gray-300 mb-6">
              Choose a nickname to join our supportive community. Your identity remains completely anonymous.
            </p>

            <div className="mb-6">
              <input
                type="text"
                placeholder="Choose your nickname..."
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                maxLength={20}
              />
            </div>

            <button
              onClick={handleJoinChat}
              disabled={!username.trim()}
              className="glow-button w-full disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-300"
            >
              Join Chat
            </button>

            <div className="mt-6 p-4 bg-yellow-900/20 border border-yellow-400/30 rounded-lg">
              <div className="flex items-center text-yellow-400 mb-2">
                <Shield className="w-5 h-5 mr-2" />
                <span className="font-semibold">Community Guidelines</span>
              </div>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>• Be respectful and supportive</li>
                <li>• No personal information sharing</li>
                <li>• Report inappropriate behavior</li>
                <li>• This is not a crisis intervention service</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-16 h-screen flex flex-col">
      {/* Chat Header */}
      <div className="bg-slate-800/50 backdrop-blur-md border-b border-cyan-400/30 p-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div>
            <h1 className="font-gaming text-xl font-bold neon-text">Anonymous Chat</h1>
            <div className="flex items-center text-sm text-gray-400">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
              {onlineUsers} online
            </div>
          </div>

          <div className="text-sm text-gray-400">
            Chatting as <span className={`font-semibold ${userColor}`}>{username}</span>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="max-w-4xl mx-auto space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.isSystem ? "justify-center" : "justify-start"}`}>
              <div
                className={`max-w-xs md:max-w-md lg:max-w-lg transition-all duration-300 hover:scale-105 ${
                  message.isSystem
                    ? "bg-slate-700/30 border border-gray-600/30 text-center py-2 px-4 rounded-full text-sm"
                    : "gaming-card"
                }`}
              >
                {!message.isSystem && (
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className={`font-semibold ${message.color}`}>{message.username}</span>
                      {message.isBot && (
                        <span className="px-2 py-1 bg-blue-400/20 text-blue-400 text-xs rounded-full">BOT</span>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-gray-500">
                        {message.timestamp.toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                      {!message.isBot && (
                        <button
                          onClick={() => reportMessage(message.id, message.username)}
                          className="text-gray-500 hover:text-red-400 transition-colors"
                        >
                          <AlertTriangle className="w-3 h-3" />
                        </button>
                      )}
                    </div>
                  </div>
                )}

                <p className={`${message.isSystem ? "text-gray-300" : "text-white"} break-words`}>{message.message}</p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Message Input */}
      <div className="bg-slate-800/50 backdrop-blur-md border-t border-cyan-400/30 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center space-x-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Type your message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 pr-12 transition-colors"
                maxLength={500}
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-cyan-400 transition-colors">
                <Smile className="w-5 h-5" />
              </button>
            </div>

            <button
              onClick={handleSendMessage}
              disabled={!newMessage.trim()}
              className="glow-button px-6 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 transition-transform duration-300"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>

          <div className="mt-2 text-xs text-gray-500 text-center">
            Be kind and supportive. This is a safe space for everyone.
          </div>
        </div>
      </div>

      <ReportModal
        isOpen={reportModalOpen}
        onClose={() => {
          setReportModalOpen(false)
          setReportingMessage(null)
        }}
        messageId={reportingMessage?.id || ""}
        username={reportingMessage?.username || ""}
      />
    </div>
  )
}
