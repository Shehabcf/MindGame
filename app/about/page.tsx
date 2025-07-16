import { Target, Heart, Shield, Users, Zap, Globe } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="font-gaming text-4xl md:text-5xl font-bold mb-6 neon-text">About GamerMind</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Bridging the gap between gaming culture and mental health support through understanding, community, and
            innovation.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-20">
          <div className="gaming-card max-w-4xl mx-auto text-center">
            <Target className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="font-gaming text-3xl font-bold mb-6 text-cyan-400">Our Mission</h2>
            <p className="text-lg text-gray-300 leading-relaxed">
              GamerMind exists to provide a safe, understanding, and judgment-free space for gamers struggling with
              mental health challenges. We recognize that gaming culture has unique aspects that traditional mental
              health resources often overlook. Our platform combines the familiarity of gaming aesthetics with
              evidence-based mental health support, creating an environment where gamers can seek help without fear of
              stigma or misunderstanding.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="mb-20">
          <h2 className="font-gaming text-3xl font-bold text-center mb-12 neon-text">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-green-400">Safety First</h3>
              <p className="text-gray-300">
                Creating a secure environment where users can share vulnerabilities without fear of judgment or
                harassment.
              </p>
            </div>

            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-pink-400">Empathy & Understanding</h3>
              <p className="text-gray-300">
                We understand gaming culture from the inside out, providing support that resonates with gamers'
                experiences.
              </p>
            </div>

            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Users className="w-12 h-12 text-purple-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-purple-400">Community Power</h3>
              <p className="text-gray-300">
                Harnessing the strength of gaming communities to create peer support networks and shared healing
                experiences.
              </p>
            </div>

            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-yellow-400">Innovation</h3>
              <p className="text-gray-300">
                Using cutting-edge technology and gamification to make mental health support engaging and accessible.
              </p>
            </div>

            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Globe className="w-12 h-12 text-cyan-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-cyan-400">Accessibility</h3>
              <p className="text-gray-300">
                Making mental health resources available 24/7, regardless of location, financial status, or gaming
                platform.
              </p>
            </div>

            <div className="gaming-card text-center group hover:scale-105 transition-transform duration-300">
              <Target className="w-12 h-12 text-orange-400 mx-auto mb-4 group-hover:animate-pulse" />
              <h3 className="font-gaming text-xl font-semibold mb-4 text-orange-400">Evidence-Based</h3>
              <p className="text-gray-300">
                All our resources and techniques are grounded in scientific research and proven therapeutic approaches.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="mb-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-gaming text-3xl font-bold text-center mb-12 neon-text">Our Story</h2>
            <div className="gaming-card">
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                GamerMind was born from a simple realization: traditional mental health resources often fail to connect
                with gaming communities. Too many gamers were suffering in silence, feeling misunderstood by therapists
                who viewed gaming as inherently problematic, or dismissed by communities that stigmatized mental health
                struggles.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Our founders, themselves passionate gamers who had experienced mental health challenges, recognized the
                need for a platform that spoke the language of gaming culture while providing genuine,
                professional-grade support. They envisioned a space where the positive aspects of gaming
                communities—collaboration, achievement, progression, and mutual support—could be channeled toward mental
                wellness.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                Today, GamerMind serves thousands of users worldwide, providing everything from crisis intervention to
                daily wellness tips, all wrapped in an interface that feels like home to gamers. We're not just another
                mental health app—we're a gaming-native platform built by gamers, for gamers.
              </p>
            </div>
          </div>
        </section>

        {/* Impact Stats */}
        <section className="mb-20">
          <h2 className="font-gaming text-3xl font-bold text-center mb-12 neon-text">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="gaming-card text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">50K+</div>
              <div className="text-gray-300">Gamers Supported</div>
            </div>
            <div className="gaming-card text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="gaming-card text-center">
              <div className="text-4xl font-bold text-pink-400 mb-2">95%</div>
              <div className="text-gray-300">User Satisfaction</div>
            </div>
            <div className="gaming-card text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">1M+</div>
              <div className="text-gray-300">Messages of Support</div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="gaming-card max-w-2xl mx-auto bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-cyan-400/30">
            <h3 className="font-gaming text-2xl font-bold mb-4 neon-text">Join Our Mission</h3>
            <p className="text-gray-300 mb-6">
              Whether you're seeking support or want to help others, there's a place for you in the GamerMind community.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/chat" className="glow-button">
                Get Support Now
              </a>
              <a
                href="/contact-us"
                className="border border-purple-400/50 text-purple-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
