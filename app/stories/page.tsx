"use client"

import { useState } from "react"
import { Heart, User, Calendar, ArrowRight, Play, Pause } from "lucide-react"

interface Story {
  id: number
  title: string
  author: string
  excerpt: string
  content: string
  date: string
  category: string
  readTime: string
  featured: boolean
  audioUrl?: string
}

const stories: Story[] = [
  {
    id: 1,
    title: "From 16 Hours a Day to Healthy Balance",
    author: "RecoveredGamer23",
    excerpt: "How I went from gaming addiction that cost me my job to finding a healthy relationship with gaming.",
    content:
      "Three years ago, I was gaming 16+ hours a day. I lost my job, my girlfriend left me, and I was living on energy drinks and takeout. The turning point came when I realized I hadn't seen sunlight in a week. I started with small steps - setting a 2-hour timer, going for a 10-minute walk between sessions. It wasn't easy, but with the support of communities like this one, I slowly rebuilt my life. Now I game 2-3 hours on weekends and have a job I love, great friends, and even started dating again. Gaming is still part of my life, but it's no longer my entire life.",
    date: "2024-01-10",
    category: "Gaming Addiction",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 2,
    title: "Overcoming Social Anxiety Through Gaming Communities",
    author: "SocialButterfly",
    excerpt: "How online gaming helped me build confidence to make real-world connections.",
    content:
      "I used to be terrified of talking to people in real life. Gaming was my escape, but it was also making my social anxiety worse. I decided to challenge myself by joining voice chats in games, starting with just listening. Gradually, I began speaking up, making callouts, then actually having conversations. The gaming community taught me that people are generally kind and understanding. This confidence transferred to real life - I started talking to coworkers, joined a local gaming meetup, and even gave a presentation at work. Gaming didn't cure my anxiety, but it gave me a safe space to practice social skills.",
    date: "2024-01-08",
    category: "Social Anxiety",
    readTime: "4 min read",
    featured: false,
  },
  {
    id: 3,
    title: "Breaking the Isolation Cycle",
    author: "BackToLife",
    excerpt: "My journey from complete social isolation to rebuilding meaningful relationships.",
    content:
      "For two years, gaming was my only social interaction. I ordered everything online, worked remotely, and had no real-world friends. Depression hit hard, and I realized I was using gaming to avoid dealing with life. The first step was admitting I needed help. I started therapy, joined online support groups, and slowly began reaching out to old friends. I set 'real world' goals - one social activity per week, whether it was grocery shopping or meeting a friend for coffee. Gaming is still important to me, but now it's balanced with real relationships and activities. I even started a local gaming group that meets in person!",
    date: "2024-01-05",
    category: "Depression",
    readTime: "6 min read",
    featured: false,
  },
  {
    id: 4,
    title: "Finding Purpose Beyond the Screen",
    author: "NewChapter",
    excerpt: "How I discovered my passion for game development and turned my gaming obsession into a career.",
    content:
      "I was spending 12+ hours a day playing games, feeling empty and purposeless. Instead of just consuming games, I decided to learn how to make them. I started with simple tutorials, spent my gaming time learning programming instead. It was hard at first - coding was frustrating compared to the instant gratification of gaming. But slowly, I began creating small projects, joining game jams, connecting with other developers. Two years later, I landed my dream job at a game studio. I still play games, but now I also create them. My obsession became my profession, and I've never been happier.",
    date: "2024-01-03",
    category: "Career Change",
    readTime: "5 min read",
    featured: true,
  },
  {
    id: 5,
    title: "Healing from Gaming-Related Rage",
    author: "CalmGamer",
    excerpt: "My journey to control anger and toxicity in competitive gaming.",
    content:
      "I was that toxic player everyone hated. Constant rage, broken controllers, screaming at teammates. My anger was affecting my relationships and mental health. I realized I was using competitive gaming as an outlet for deeper frustrations in my life. I started anger management therapy, learned breathing techniques, and began practicing mindfulness. I also changed how I approached gaming - focusing on improvement rather than winning, taking breaks when frustrated, and actually complimenting teammates. Gaming became enjoyable again, and my relationships improved dramatically. I even became a positive voice in my gaming communities.",
    date: "2024-01-01",
    category: "Anger Management",
    readTime: "4 min read",
    featured: false,
  },
]

const categories = [
  "All Stories",
  "Gaming Addiction",
  "Social Anxiety",
  "Depression",
  "Career Change",
  "Anger Management",
]

export default function StoriesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Stories")
  const [selectedStory, setSelectedStory] = useState<Story | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const filteredStories =
    selectedCategory === "All Stories" ? stories : stories.filter((story) => story.category === selectedCategory)

  const featuredStories = filteredStories.filter((story) => story.featured)
  const regularStories = filteredStories.filter((story) => !story.featured)

  const handleReadMore = (story: Story) => {
    setSelectedStory(story)
  }

  const handleCloseModal = () => {
    setSelectedStory(null)
    setIsPlaying(false)
  }

  const toggleAudio = () => {
    setIsPlaying(!isPlaying)
    // In a real app, this would control actual audio playback
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-gaming text-4xl md:text-5xl font-bold mb-6 neon-text">Success Stories</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Real stories from gamers who've overcome mental health challenges. Their journeys prove that recovery is
            possible and you're not alone.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/50"
                  : "bg-slate-800/50 text-gray-300 border border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Featured Stories */}
        {featuredStories.length > 0 && (
          <div className="mb-16">
            <h2 className="font-gaming text-2xl font-bold mb-8 text-cyan-400">Featured Stories</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredStories.map((story) => (
                <div
                  key={story.id}
                  className="gaming-card group cursor-pointer transform transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  style={{ perspective: "1000px" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs font-bold rounded-full">
                        FEATURED
                      </span>
                      <span className="text-xs text-gray-400">{story.readTime}</span>
                    </div>

                    <h3 className="font-gaming text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                      {story.title}
                    </h3>

                    <p className="text-gray-300 mb-4 line-clamp-3">{story.excerpt}</p>

                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="flex items-center text-sm text-gray-400">
                          <User className="w-4 h-4 mr-1" />
                          {story.author}
                        </div>
                        <div className="flex items-center text-sm text-gray-400">
                          <Calendar className="w-4 h-4 mr-1" />
                          {new Date(story.date).toLocaleDateString()}
                        </div>
                      </div>
                      <span className="px-2 py-1 bg-purple-400/20 text-purple-400 text-xs rounded-full">
                        {story.category}
                      </span>
                    </div>

                    <button
                      onClick={() => handleReadMore(story)}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      Read Full Story
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Regular Stories */}
        <div>
          <h2 className="font-gaming text-2xl font-bold mb-8 text-purple-400">Community Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularStories.map((story) => (
              <div
                key={story.id}
                className="gaming-card group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:rotate-1"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2 py-1 bg-pink-400/20 text-pink-400 text-xs rounded-full">{story.category}</span>
                  <span className="text-xs text-gray-400">{story.readTime}</span>
                </div>

                <h3 className="font-gaming text-lg font-semibold mb-3 text-white group-hover:text-purple-400 transition-colors">
                  {story.title}
                </h3>

                <p className="text-gray-300 mb-4 line-clamp-4">{story.excerpt}</p>

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-400">
                    <User className="w-4 h-4 mr-1" />
                    {story.author}
                  </div>
                  <div className="flex items-center text-sm text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(story.date).toLocaleDateString()}
                  </div>
                </div>

                <button
                  onClick={() => handleReadMore(story)}
                  className="flex items-center text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                >
                  Read Story
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Share Your Story CTA */}
        <div className="mt-20 text-center">
          <div className="gaming-card max-w-2xl mx-auto bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border-cyan-400/30">
            <Heart className="w-12 h-12 text-pink-400 mx-auto mb-4" />
            <h3 className="font-gaming text-2xl font-bold mb-4 neon-text">Share Your Story</h3>
            <p className="text-gray-300 mb-6">
              Your journey could inspire others. Share your story of recovery, growth, and hope with the GamerMind
              community.
            </p>
            <button className="glow-button">Submit Your Story</button>
          </div>
        </div>
      </div>

      {/* Story Modal */}
      {selectedStory && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="gaming-card max-w-4xl max-h-[90vh] overflow-y-auto relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors text-2xl"
            >
              ×
            </button>

            <div className="mb-6">
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-bold ${
                    selectedStory.featured
                      ? "bg-gradient-to-r from-cyan-400 to-purple-500 text-black"
                      : "bg-purple-400/20 text-purple-400"
                  }`}
                >
                  {selectedStory.featured ? "FEATURED" : selectedStory.category}
                </span>

                {selectedStory.audioUrl && (
                  <button
                    onClick={toggleAudio}
                    className="flex items-center px-3 py-2 bg-green-400/20 border border-green-400/30 rounded-lg text-green-400 hover:bg-green-400/30 transition-colors"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="w-4 h-4 mr-2" />
                        Pause Audio
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 mr-2" />
                        Listen
                      </>
                    )}
                  </button>
                )}
              </div>

              <h2 className="font-gaming text-3xl font-bold mb-4 neon-text">{selectedStory.title}</h2>

              <div className="flex items-center space-x-6 text-sm text-gray-400 mb-6">
                <div className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  {selectedStory.author}
                </div>
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(selectedStory.date).toLocaleDateString()}
                </div>
                <span>{selectedStory.readTime}</span>
              </div>
            </div>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">{selectedStory.content}</p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-700">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center px-4 py-2 bg-pink-400/20 border border-pink-400/30 rounded-lg text-pink-400 hover:bg-pink-400/30 transition-colors">
                    <Heart className="w-4 h-4 mr-2" />
                    Inspiring
                  </button>
                  <span className="text-sm text-gray-400">Thank you for sharing your story</span>
                </div>

                <button
                  onClick={handleCloseModal}
                  className="px-6 py-2 bg-slate-700/50 border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
