import { Heart, Github, Twitter, DiscIcon as Discord } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md border-t border-cyan-400/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
                <Heart className="w-5 h-5 text-black" />
              </div>
              <span className="font-gaming text-xl font-bold neon-text">GamerMind</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Supporting gamers on their mental health journey. You're not alone in this quest.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-gaming text-lg font-semibold text-cyan-400 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/articles" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Articles
                </a>
              </li>
              <li>
                <a href="/chat" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Anonymous Chat
                </a>
              </li>
              <li>
                <a href="/tips" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Quick Tips
                </a>
              </li>
              <li>
                <a href="/stories" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Success Stories
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-gaming text-lg font-semibold text-cyan-400 mb-4">Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Crisis Hotline
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Find Therapist
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Community Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-cyan-400/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2024 GamerMind. Made with ❤️ for the gaming community.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Discord className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
              <Github className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
