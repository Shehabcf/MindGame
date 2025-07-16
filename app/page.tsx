"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ChevronRight, Shield, Users, Heart, Star, Play, ArrowRight, Zap } from "lucide-react"

const testimonials = [
  {
    name: "Alex_GamerPro",
    text: "GamerMind helped me realize I wasn't alone. The community here actually gets what it's like to struggle with gaming addiction.",
    rating: 5,
    game: "League of Legends",
  },
  {
    name: "SarahPlays",
    text: "The tips section became my daily ritual. Small steps, but they really add up. I'm sleeping better and gaming healthier.",
    rating: 5,
    game: "Valorant",
  },
  {
    name: "MikeTheBuilder",
    text: "Anonymous chat was a game-changer. Being able to talk without judgment helped me open up about my anxiety.",
    rating: 5,
    game: "Minecraft",
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
          <div className="absolute top-40 right-20 w-1 h-1 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-40 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-pulse delay-2000"></div>
          <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse delay-3000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="float-animation">
            <h1 className="font-gaming text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
              <span className="neon-text">Gamer</span>
              <span className="text-purple-400">Mind</span>
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Level up your mental health. A safe space for gamers dealing with
            <span className="text-cyan-400"> anxiety</span>,<span className="text-purple-400"> addiction</span>, and
            <span className="text-pink-400"> isolation</span>.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link href="/tips" className="glow-button pulse-glow group">
              <Play className="w-5 h-5 inline mr-2 group-hover:scale-110 transition-transform" />
              Start Healing
            </Link>
            <Link
              href="/articles"
              className="border border-cyan-400/50 text-cyan-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-cyan-400/10 hover:border-cyan-400 hover:scale-105 group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="gaming-card text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300">Gamers Helped</div>
            </div>
            <div className="gaming-card text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Anonymous Support</div>
            </div>
            <div className="gaming-card text-center hover:scale-105 transition-transform duration-300">
              <div className="text-3xl font-bold text-pink-400 mb-2">100%</div>
              <div className="text-gray-300">Judgment Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* What is GamerMind */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-6 neon-text">What is GamerMind?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We understand that gaming can be both an escape and a trap. GamerMind provides tools, community, and
              resources specifically designed for gamers' unique mental health challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-cyan-400">Safe Space</h3>
              <p className="text-gray-300">
                Anonymous, judgment-free environment where you can share your struggles without fear.
              </p>
            </div>

            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-purple-400">Community</h3>
              <p className="text-gray-300">Connect with fellow gamers who understand your journey and challenges.</p>
            </div>

            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-pink-400">Support</h3>
              <p className="text-gray-300">
                Professional resources and peer support tailored for gaming-related mental health.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Help */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-6 neon-text">Who We Help</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="gaming-card hover:scale-105 transition-transform duration-300">
              <h3 className="font-gaming text-xl font-semibold mb-4 text-cyan-400">Gaming Addiction</h3>
              <p className="text-gray-300 mb-4">
                Struggling to control your gaming time? We provide strategies and support to help you find balance.
              </p>
              <Link
                href="/articles?filter=addiction"
                className="text-cyan-400 hover:text-cyan-300 flex items-center group"
              >
                Read Articles <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="gaming-card hover:scale-105 transition-transform duration-300">
              <h3 className="font-gaming text-xl font-semibold mb-4 text-purple-400">Social Anxiety</h3>
              <p className="text-gray-300 mb-4">
                Gaming as an escape from social situations? Learn healthy coping mechanisms and gradual exposure
                techniques.
              </p>
              <Link
                href="/articles?filter=anxiety"
                className="text-purple-400 hover:text-purple-300 flex items-center group"
              >
                Get Help <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="gaming-card hover:scale-105 transition-transform duration-300">
              <h3 className="font-gaming text-xl font-semibold mb-4 text-pink-400">Isolation & Depression</h3>
              <p className="text-gray-300 mb-4">
                Feeling disconnected from the real world? Connect with others who understand and find your way back.
              </p>
              <Link href="/stories" className="text-pink-400 hover:text-pink-300 flex items-center group">
                Read Stories <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-6 neon-text">Success Stories</h2>
            <p className="text-xl text-gray-300">Real gamers, real progress, real hope.</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="gaming-card text-center min-h-[200px] flex flex-col justify-center hover:scale-105 transition-transform duration-300">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <blockquote className="text-lg text-gray-300 mb-6 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="text-cyan-400 font-semibold">{testimonials[currentTestimonial].name}</div>
              <div className="text-gray-400 text-sm">{testimonials[currentTestimonial].game} Player</div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 hover:scale-125 ${
                    index === currentTestimonial ? "bg-cyan-400" : "bg-gray-600 hover:bg-gray-500"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-gaming text-3xl md:text-4xl font-bold mb-6 neon-text">Ready to Start Your Journey?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of gamers who've taken the first step towards better mental health. Your next level awaits.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/chat" className="glow-button group">
              <Zap className="w-5 h-5 inline mr-2 group-hover:animate-pulse" />
              Join Anonymous Chat
            </Link>
            <Link
              href="/tips"
              className="border border-purple-400/50 text-purple-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400 hover:scale-105 group"
            >
              Get Daily Tips
              <ArrowRight className="w-5 h-5 inline ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
