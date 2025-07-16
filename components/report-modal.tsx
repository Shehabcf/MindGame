"use client"

import type React from "react"
import { useState } from "react"
import { X, AlertTriangle, CheckCircle } from "lucide-react"

interface ReportModalProps {
  isOpen: boolean
  onClose: () => void
  messageId: string
  username: string
}

const reportReasons = [
  { id: "harassment", label: "Harassment or Bullying" },
  { id: "spam", label: "Spam or Unwanted Content" },
  { id: "inappropriate", label: "Inappropriate Content" },
  { id: "threats", label: "Threats or Violence" },
  { id: "hate", label: "Hate Speech" },
  { id: "impersonation", label: "Impersonation" },
  { id: "other", label: "Other" },
]

export function ReportModal({ isOpen, onClose, messageId, username }: ReportModalProps) {
  const [selectedReason, setSelectedReason] = useState("")
  const [customReason, setCustomReason] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedReason) return

    setIsSubmitting(true)

    // Simulate report submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitted(true)
    setIsSubmitting(false)

    // Auto-close after showing success
    setTimeout(() => {
      onClose()
      setIsSubmitted(false)
      setSelectedReason("")
      setCustomReason("")
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
        <div className="gaming-card max-w-md w-full text-center">
          <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-green-400" />
          </div>
          <h3 className="font-gaming text-xl font-bold text-green-400 mb-2">Report Submitted</h3>
          <p className="text-gray-300">
            Thank you for helping keep our community safe. Our moderation team will review this report promptly.
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="gaming-card max-w-md w-full relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-red-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <AlertTriangle className="w-8 h-8 text-red-400" />
          </div>
          <h2 className="font-gaming text-xl font-bold text-red-400">Report Message</h2>
          <p className="text-gray-300 text-sm mt-2">
            Reporting message from <span className="text-cyan-400">{username}</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-3">
              Why are you reporting this message? *
            </label>
            <div className="space-y-2">
              {reportReasons.map((reason) => (
                <label
                  key={reason.id}
                  className="flex items-center cursor-pointer hover:bg-slate-700/30 p-2 rounded transition-colors"
                >
                  <input
                    type="radio"
                    name="reason"
                    value={reason.id}
                    checked={selectedReason === reason.id}
                    onChange={(e) => setSelectedReason(e.target.value)}
                    className="sr-only"
                  />
                  <div
                    className={`w-4 h-4 rounded-full border-2 mr-3 flex items-center justify-center transition-colors ${
                      selectedReason === reason.id ? "border-red-400 bg-red-400" : "border-gray-600"
                    }`}
                  >
                    {selectedReason === reason.id && <div className="w-2 h-2 rounded-full bg-black"></div>}
                  </div>
                  <span className="text-gray-300 text-sm">{reason.label}</span>
                </label>
              ))}
            </div>
          </div>

          {selectedReason === "other" && (
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">Please specify:</label>
              <textarea
                value={customReason}
                onChange={(e) => setCustomReason(e.target.value)}
                className="w-full px-3 py-2 bg-slate-800/50 border border-red-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-400 focus:ring-1 focus:ring-red-400 resize-none transition-colors"
                rows={3}
                placeholder="Describe the issue..."
                required
              />
            </div>
          )}

          <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-lg p-3">
            <p className="text-yellow-400 text-xs">
              <strong>Note:</strong> False reports may result in restrictions on your account. Only report content that
              genuinely violates our community guidelines.
            </p>
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-slate-700/50 border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={!selectedReason || isSubmitting}
              className="flex-1 px-4 py-2 bg-red-400/20 border border-red-400/50 rounded-lg text-red-400 hover:bg-red-400/30 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Submitting..." : "Submit Report"}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
