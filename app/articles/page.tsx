"use client"

import { useState, useEffect } from "react"
import { Search, Filter, Clock, User, Tag } from "lucide-react"
import Link from "next/link"

const articles = [
  {
    id: 1,
    title: "Breaking Free from Gaming Addiction: A Step-by-Step Guide",
    excerpt: "Learn practical strategies to regain control over your gaming habits without giving up gaming entirely.",
    category: "addiction",
    readTime: "8 min read",
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    tags: ["addiction", "recovery", "balance"],
    featured: true,
  },
  {
    id: 2,
    title: "Managing Social Anxiety in Online Gaming Communities",
    excerpt: "Tips for overcoming social anxiety when playing multiplayer games and building healthy relationships.",
    category: "anxiety",
    readTime: "6 min read",
    author: "Mike Rodriguez",
    date: "2024-01-12",
    tags: ["anxiety", "social", "multiplayer"],
  },
  {
    id: 3,
    title: "The Psychology Behind Gaming Escapism",
    excerpt: "Understanding why we use games to escape reality and how to create healthier coping mechanisms.",
    category: "depression",
    readTime: "10 min read",
    author: "Dr. Alex Thompson",
    date: "2024-01-10",
    tags: ["depression", "escapism", "psychology"],
  },
  {
    id: 4,
    title: "Building Real-World Connections as a Gamer",
    excerpt:
      "Strategies for maintaining friendships and relationships outside of gaming while staying true to your passion.",
    category: "social",
    readTime: "7 min read",
    author: "Emma Wilson",
    date: "2024-01-08",
    tags: ["social", "relationships", "balance"],
  },
  {
    id: 5,
    title: "Sleep Hygiene for Gamers: Breaking the All-Night Cycle",
    excerpt: "How to establish healthy sleep patterns while maintaining your gaming schedule.",
    category: "health",
    readTime: "5 min read",
    author: "Dr. James Park",
    date: "2024-01-05",
    tags: ["health", "sleep", "routine"],
  },
  {
    id: 6,
    title: "Dealing with Gaming-Related Rage and Frustration",
    excerpt: "Techniques for managing anger and frustration during competitive gaming sessions.",
    category: "anger",
    readTime: "6 min read",
    author: "Lisa Chang",
    date: "2024-01-03",
    tags: ["anger", "competitive", "emotional-regulation"],
  },
]

const categories = [
  { id: "all", name: "All Articles", color: "text-white" },
  { id: "addiction", name: "Gaming Addiction", color: "text-red-400" },
  { id: "anxiety", name: "Social Anxiety", color: "text-yellow-400" },
  { id: "depression", name: "Depression", color: "text-blue-400" },
  { id: "social", name: "Social Issues", color: "text-green-400" },
  { id: "health", name: "Physical Health", color: "text-purple-400" },
  { id: "anger", name: "Anger Management", color: "text-orange-400" },
]

export default function ArticlesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [filteredArticles, setFilteredArticles] = useState(articles)

  useEffect(() => {
    let filtered = articles

    // Filter by category
    if (selectedCategory !== "all") {
      filtered = filtered.filter((article) => article.category === selectedCategory)
    }

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(
        (article) =>
          article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.tags.some((tag) => tag.toLowerCase().includes(searchTerm.toLowerCase())),
      )
    }

    setFilteredArticles(filtered)
  }, [searchTerm, selectedCategory])

  // Check for URL filter parameter
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const filter = urlParams.get("filter")
    if (filter && categories.find((cat) => cat.id === filter)) {
      setSelectedCategory(filter)
    }
  }, [])

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-gaming text-4xl md:text-5xl font-bold mb-6 neon-text">Mental Health Articles</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Evidence-based articles and guides written by mental health professionals who understand gaming culture.
          </p>
        </div>

        {/* Search and Filter */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400"
              />
            </div>

            {/* Category Filter */}
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="pl-10 pr-8 py-3 bg-slate-800/50 border border-cyan-400/30 rounded-lg text-white focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 appearance-none cursor-pointer"
              >
                {categories.map((category) => (
                  <option key={category.id} value={category.id} className="bg-slate-800">
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/50"
                    : "bg-slate-800/50 text-gray-300 border border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-400"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, index) => (
            <article
              key={article.id}
              className={`gaming-card group cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                article.featured ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Link href={`/articles/${article.id}`}>
                <div className="mb-4">
                  {article.featured && (
                    <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-400 to-purple-500 text-black text-xs font-bold rounded-full mb-3">
                      FEATURED
                    </span>
                  )}

                  <div className="flex flex-wrap gap-2 mb-3">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs rounded-full"
                      >
                        <Tag className="w-3 h-3 mr-1" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h2 className="font-gaming text-xl font-semibold mb-3 text-white group-hover:text-cyan-400 transition-colors">
                    {article.title}
                  </h2>

                  <p className="text-gray-300 mb-4 line-clamp-3">{article.excerpt}</p>
                </div>

                <div className="flex items-center justify-between text-sm text-gray-400">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {article.author}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                  </div>
                  <div className="text-gray-500">{new Date(article.date).toLocaleDateString()}</div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        {/* No Results */}
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-lg mb-4">No articles found</div>
            <p className="text-gray-500">Try adjusting your search terms or category filter.</p>
          </div>
        )}

        {/* Load More Button */}
        {filteredArticles.length > 0 && (
          <div className="text-center mt-12">
            <button className="glow-button">Load More Articles</button>
          </div>
        )}
      </div>
    </div>
  )
}
