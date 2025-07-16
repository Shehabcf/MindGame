"use client"

import type React from "react"

import { useState } from "react"
import { Mail, MessageSquare, Send, CheckCircle, AlertCircle } from "lucide-react"

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("idle")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Simple validation
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })
    } else {
      setSubmitStatus("error")
    }

    setIsSubmitting(false)
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-gaming text-4xl md:text-5xl font-bold mb-6 neon-text">Contact Us</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Have questions, feedback, or need support? We're here to help. Reach out to the GamerMind team anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="gaming-card">
            <div className="flex items-center mb-6">
              <MessageSquare className="w-8 h-8 text-cyan-400 mr-3" />
              <h2 className="font-gaming text-2xl font-bold text-cyan-400">Send us a Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="feedback">Feedback & Suggestions</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="crisis">Crisis Support</option>
                  <option value="report">Report an Issue</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <div className="flex items-center p-4 bg-green-900/20 border border-green-400/30 rounded-lg text-green-400">
                  <CheckCircle className="w-5 h-5 mr-3" />
                  <span>Message sent successfully! We'll get back to you within 24 hours.</span>
                </div>
              )}

              {submitStatus === "error" && (
                <div className="flex items-center p-4 bg-red-900/20 border border-red-400/30 rounded-lg text-red-400">
                  <AlertCircle className="w-5 h-5 mr-3" />
                  <span>Please fill in all required fields and try again.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="glow-button w-full disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="gaming-card">
              <div className="flex items-center mb-4">
                <Mail className="w-6 h-6 text-purple-400 mr-3" />
                <h3 className="font-gaming text-xl font-semibold text-purple-400">Quick Contact</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>
                  <strong>General Support:</strong> support@gamermind.com
                </p>
                <p>
                  <strong>Crisis Support:</strong> crisis@gamermind.com
                </p>
                <p>
                  <strong>Partnerships:</strong> partners@gamermind.com
                </p>
                <p>
                  <strong>Response Time:</strong> Within 24 hours
                </p>
              </div>
            </div>

            {/* Emergency Support */}
            <div className="gaming-card bg-red-900/20 border-red-400/30">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-red-400 mr-3" />
                <h3 className="font-gaming text-xl font-semibold text-red-400">Emergency Support</h3>
              </div>
              <div className="space-y-3 text-gray-300">
                <p>If you're in immediate danger or having thoughts of self-harm:</p>
                <div className="space-y-2">
                  <p>
                    <strong>US:</strong> Call 988 (Suicide & Crisis Lifeline)
                  </p>
                  <p>
                    <strong>UK:</strong> Call 116 123 (Samaritans)
                  </p>
                  <p>
                    <strong>International:</strong> Visit findahelpline.com
                  </p>
                </div>
                <p className="text-sm text-red-300">
                  GamerMind is not a crisis intervention service. Please contact emergency services if you're in
                  immediate danger.
                </p>
              </div>
            </div>

            {/* Community Guidelines */}
            <div className="gaming-card">
              <h3 className="font-gaming text-xl font-semibold text-cyan-400 mb-4">Before You Contact Us</h3>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>• Check our FAQ section for common questions</li>
                <li>• Be specific about your issue or feedback</li>
                <li>• Include relevant details (browser, device, etc.)</li>
                <li>• Be respectful and patient with our response</li>
                <li>• For urgent matters, use appropriate channels</li>
              </ul>
            </div>

            {/* Social Links */}
            <div className="gaming-card">
              <h3 className="font-gaming text-xl font-semibold text-pink-400 mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-cyan-400/20">
                    Discord
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-purple-400/20">
                    Twitter
                  </div>
                </a>
                <a href="#" className="text-gray-400 hover:text-pink-400 transition-colors">
                  <div className="w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center hover:bg-pink-400/20">
                    Reddit
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
