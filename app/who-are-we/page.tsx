import { Code, Heart, Gamepad2, Brain, Shield, Users } from "lucide-react"

const teamMembers = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "Former game developer turned mental health advocate. Alex struggled with gaming addiction for years before finding balance and dedicating their life to helping others.",
    specialties: ["Gaming Psychology", "Product Strategy", "Community Building"],
    avatar: "AC",
    color: "from-cyan-400 to-blue-500",
  },
  {
    name: "Dr. Sarah Martinez",
    role: "Chief Clinical Officer",
    bio: "Licensed therapist specializing in gaming-related mental health issues. Sarah bridges the gap between traditional therapy and gaming culture.",
    specialties: ["Clinical Psychology", "Gaming Addiction", "Anxiety Disorders"],
    avatar: "SM",
    color: "from-purple-400 to-pink-500",
  },
  {
    name: "Jordan Kim",
    role: "Lead Developer",
    bio: "Full-stack developer and competitive esports player. Jordan ensures our platform feels native to gaming communities while maintaining professional standards.",
    specialties: ["Web Development", "UX Design", "Gaming Communities"],
    avatar: "JK",
    color: "from-green-400 to-cyan-500",
  },
  {
    name: "Maya Patel",
    role: "Community Manager",
    bio: "Former Twitch streamer who experienced burnout and mental health challenges. Maya now helps create safe spaces for gamers to connect and heal.",
    specialties: ["Community Management", "Content Creation", "Peer Support"],
    avatar: "MP",
    color: "from-yellow-400 to-orange-500",
  },
  {
    name: "Dr. Marcus Johnson",
    role: "Research Director",
    bio: "Researcher in digital wellness and gaming psychology. Marcus ensures all our interventions are evidence-based and culturally appropriate.",
    specialties: ["Research", "Data Analysis", "Digital Wellness"],
    avatar: "MJ",
    color: "from-red-400 to-purple-500",
  },
  {
    name: "Luna Rodriguez",
    role: "Content Specialist",
    bio: "Mental health writer and former gaming journalist. Luna creates content that resonates with gamers while providing genuine therapeutic value.",
    specialties: ["Content Writing", "Mental Health Education", "Gaming Journalism"],
    avatar: "LR",
    color: "from-pink-400 to-red-500",
  },
]

const advisors = [
  {
    name: "Dr. Emily Watson",
    role: "Clinical Advisor",
    expertise: "Addiction Psychology",
  },
  {
    name: "Tyler Brooks",
    role: "Gaming Industry Advisor",
    expertise: "Esports & Community",
  },
  {
    name: "Dr. James Liu",
    role: "Technology Advisor",
    expertise: "Digital Health",
  },
]

export default function WhoAreWePage() {
  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-gaming text-4xl md:text-5xl font-bold mb-6 neon-text">Who Are We</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the passionate team of gamers, developers, and mental health professionals building the future of
            gaming wellness.
          </p>
        </div>

        {/* Our Story */}
        <section className="mb-20">
          <div className="gaming-card max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <Heart className="w-16 h-16 text-pink-400 mx-auto mb-4" />
              <h2 className="font-gaming text-3xl font-bold text-pink-400">Our Story</h2>
            </div>
            <div className="space-y-6 text-lg text-gray-300">
              <p>
                GamerMind was born from personal experience. Our founders weren't just developers or therapists—they
                were gamers who had walked the difficult path of mental health struggles within gaming culture. They
                understood the unique challenges that traditional mental health services couldn't address.
              </p>
              <p>
                In 2023, after years of research and community feedback, we launched GamerMind as more than just another
                mental health app. We created a platform that speaks the language of gaming, understands the culture,
                and provides support that actually resonates with our community.
              </p>
              <p>
                Today, we're a diverse team of gamers, mental health professionals, developers, and community builders,
                all united by a single mission: making mental health support accessible, relatable, and effective for
                gaming communities worldwide.
              </p>
            </div>
          </div>
        </section>

        {/* Core Team */}
        <section className="mb-20">
          <h2 className="font-gaming text-3xl font-bold text-center mb-12 neon-text">Core Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="gaming-card group hover:scale-105 transition-transform duration-300">
                <div className="text-center mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <span className="text-black font-bold text-xl">{member.avatar}</span>
                  </div>
                  <h3 className="font-gaming text-xl font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium">{member.role}</p>
                </div>

                <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>

                <div className="space-y-2">
                  <h4 className="font-semibold text-purple-400 text-sm">Specialties:</h4>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-400/20 text-purple-300 text-xs rounded-full">
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* What Drives Us */}
        <section className="mb-20">
          <h2 className="font-gaming text-3xl font-bold text-center mb-12 neon-text">What Drives Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="gaming-card text-center">
              <Gamepad2 className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="font-gaming text-xl font-semibold mb-3 text-cyan-400">Gaming Native</h3>
              <p className="text-gray-300">
                We're not outsiders looking in. We're gamers who understand the culture, the challenges, and the
                incredible potential of gaming communities.
              </p>
            </div>

            <div className="gaming-card text-center">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="font-gaming text-xl font-semibold mb-3 text-purple-400">Evidence-Based</h3>
              <p className="text-gray-300">
                Every feature, every piece of content, and every intervention is grounded in scientific research and
                proven therapeutic approaches.
              </p>
            </div>

            <div className="gaming-card text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="font-gaming text-xl font-semibold mb-3 text-green-400">Safety First</h3>
              <p className="text-gray-300">
                We prioritize user safety and privacy above all else, creating spaces where vulnerability is met with
                support, not judgment.
              </p>
            </div>
          </div>
        </section>

        {/* Advisors */}
        <section className="mb-20">
          <h2 className="font-gaming text-3xl font-bold text-center mb-12 text-yellow-400">Advisory Board</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {advisors.map((advisor, index) => (
              <div key={index} className="gaming-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-black" />
                </div>
                <h3 className="font-gaming text-lg font-semibold text-white mb-1">{advisor.name}</h3>
                <p className="text-yellow-400 text-sm mb-2">{advisor.role}</p>
                <p className="text-gray-300 text-sm">{advisor.expertise}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Us */}
        <section className="text-center">
          <div className="gaming-card max-w-2xl mx-auto bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-cyan-400/30">
            <Code className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="font-gaming text-2xl font-bold mb-4 neon-text">Join Our Mission</h3>
            <p className="text-gray-300 mb-6">
              We're always looking for passionate individuals who want to make a difference in gaming mental health.
              Whether you're a developer, therapist, content creator, or community builder, there might be a place for
              you on our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact-us" className="glow-button">
                Get In Touch
              </a>
              <a
                href="/about"
                className="border border-purple-400/50 text-purple-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:bg-purple-400/10 hover:border-purple-400"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
