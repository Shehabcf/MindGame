"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star, Calendar, Trophy, Target, Clock, CheckCircle, RotateCcw } from "lucide-react"

interface Tip {
  id: number
  title: string
  content: string
  category: string
  duration: string
  difficulty: "Easy" | "Medium" | "Hard"
  points: number
}

const tips: Tip[] = [
  {
    id: 1,
    title: "The 20-20-20 Rule",
    content:
      "Every 20 minutes, look at something 20 feet away for 20 seconds. This helps reduce eye strain and gives your mind a micro-break from intense gaming sessions.",
    category: "Health",
    duration: "20 seconds",
    difficulty: "Easy",
    points: 10,
  },
  {
    id: 2,
    title: "Breathing Reset Technique",
    content:
      "When you feel frustrated or angry during gaming, pause and take 4 deep breaths: inhale for 4 counts, hold for 4, exhale for 4. This activates your parasympathetic nervous system.",
    category: "Emotional",
    duration: "1 minute",
    difficulty: "Easy",
    points: 15,
  },
  {
    id: 3,
    title: "Gaming Session Timer",
    content:
      "Set a timer for 90 minutes before starting any gaming session. When it goes off, take a 15-minute break to stretch, hydrate, or step outside.",
    category: "Time Management",
    duration: "15 minutes",
    difficulty: "Medium",
    points: 20,
  },
  {
    id: 4,
    title: "Social Check-In",
    content:
      "Before starting a long gaming session, send a quick message to a friend or family member. This maintains real-world connections and accountability.",
    category: "Social",
    duration: "2 minutes",
    difficulty: "Easy",
    points: 15,
  },
  {
    id: 5,
    title: "Mindful Gaming Start",
    content:
      "Before launching your game, take 30 seconds to set an intention: 'I'm playing to have fun and will stop when I'm no longer enjoying it.'",
    category: "Mindfulness",
    duration: "30 seconds",
    difficulty: "Easy",
    points: 10,
  },
  {
    id: 6,
    title: "Physical Reset Routine",
    content:
      "Between matches or levels, do 10 jumping jacks, 10 push-ups, or stretch your neck and shoulders. Keep your body active during gaming breaks.",
    category: "Health",
    duration: "2 minutes",
    difficulty: "Medium",
    points: 25,
  },
  {
    id: 7,
    title: "Gratitude Gaming Log",
    content:
      "At the end of each gaming session, write down one thing you enjoyed and one thing you learned. This builds positive associations with gaming.",
    category: "Mindfulness",
    duration: "1 minute",
    difficulty: "Easy",
    points: 15,
  },
  {
    id: 8,
    title: "Sleep Boundary Setting",
    content:
      "Set a 'gaming curfew' 1 hour before your intended bedtime. Use this time for relaxing activities like reading or light stretching.",
    category: "Sleep",
    duration: "1 hour",
    difficulty: "Hard",
    points: 30,
  },
]

const categories = ["All", "Health", "Emotional", "Time Management", "Social", "Mindfulness", "Sleep"]

export default function TipsPage() {
  const [currentTip, setCurrentTip] = useState(0)
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [completedTips, setCompletedTips] = useState<number[]>([])
  const [streak, setStreak] = useState(0)
  const [totalPoints, setTotalPoints] = useState(0)
  const [filteredTips, setFilteredTips] = useState(tips)

  // Reset progress when entering the page
  useEffect(() => {
    setCompletedTips([])
    setTotalPoints(0)
    setStreak(0)
  }, [])

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredTips(tips)
    } else {
      setFilteredTips(tips.filter((tip) => tip.category === selectedCategory))
    }
    setCurrentTip(0)
  }, [selectedCategory])

  const nextTip = () => {
    setCurrentTip((prev) => (prev + 1) % filteredTips.length)
  }

  const prevTip = () => {
    setCurrentTip((prev) => (prev - 1 + filteredTips.length) % filteredTips.length)
  }

  const markAsCompleted = (tipId: number) => {
    if (!completedTips.includes(tipId)) {
      setCompletedTips((prev) => [...prev, tipId])
      const tip = tips.find((t) => t.id === tipId)
      if (tip) {
        setTotalPoints((prev) => prev + tip.points)
        // Update streak if completing 3 tips
        if (completedTips.length + 1 >= 3) {
          setStreak(1)
        }
      }
    }
  }

  const resetProgress = () => {
    setCompletedTips([])
    setTotalPoints(0)
    setStreak(0)
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "text-green-400 bg-green-400/20"
      case "Medium":
        return "text-yellow-400 bg-yellow-400/20"
      case "Hard":
        return "text-red-400 bg-red-400/20"
      default:
        return "text-gray-400 bg-gray-400/20"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      Health: "text-green-400",
      Emotional: "text-purple-400",
      "Time Management": "text-blue-400",
      Social: "text-pink-400",
      Mindfulness: "text-cyan-400",
      Sleep: "text-indigo-400",
    }
    return colors[category] || "text-gray-400"
  }

  const currentTipData = filteredTips[currentTip]

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-gaming text-4xl md:text-5xl font-bold mb-6 neon-text">Quick Tips & Coping Strategies</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            1-minute techniques to improve your gaming experience and mental health. Build healthy habits one tip at a
            time.
          </p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="gaming-card text-center hover:scale-105 transition-transform duration-300">
            <Trophy className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-yellow-400">{totalPoints}</div>
            <div className="text-gray-300 text-sm">Total Points</div>
          </div>

          <div className="gaming-card text-center hover:scale-105 transition-transform duration-300">
            <Target className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-green-400">{completedTips.length}</div>
            <div className="text-gray-300 text-sm">Tips Completed</div>
          </div>

          <div className="gaming-card text-center hover:scale-105 transition-transform duration-300">
            <Calendar className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-cyan-400">{streak}</div>
            <div className="text-gray-300 text-sm">Day Streak</div>
          </div>

          <div className="gaming-card text-center hover:scale-105 transition-transform duration-300">
            <Star className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <div className="text-2xl font-bold text-purple-400">
              {Math.floor((completedTips.length / tips.length) * 100)}%
            </div>
            <div className="text-gray-300 text-sm">Progress</div>
          </div>
        </div>

        {/* Category Filter and Reset */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mb-12">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105 ${
                  selectedCategory === category
                    ? "bg-cyan-400/20 text-cyan-400 border border-cyan-400/50"
                    : "bg-slate-800/50 text-gray-300 border border-gray-600/50 hover:border-cyan-400/50 hover:text-cyan-400"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <button
            onClick={resetProgress}
            className="flex items-center px-4 py-2 bg-red-400/20 border border-red-400/30 rounded-lg text-red-400 hover:bg-red-400/30 transition-colors"
          >
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset Progress
          </button>
        </div>

        {/* Main Tip Card */}
        {currentTipData && (
          <div className="max-w-4xl mx-auto mb-12">
            <div className="gaming-card relative overflow-hidden hover:scale-105 transition-transform duration-300">
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-purple-500/20"></div>
              </div>

              <div className="relative z-10">
                {/* Tip Header */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <div className="flex items-center space-x-3 mb-2">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${getCategoryColor(currentTipData.category)}`}
                      >
                        {currentTipData.category}
                      </span>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${getDifficultyColor(currentTipData.difficulty)}`}
                      >
                        {currentTipData.difficulty}
                      </span>
                    </div>
                    <h2 className="font-gaming text-2xl md:text-3xl font-bold text-white mb-2">
                      {currentTipData.title}
                    </h2>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {currentTipData.duration}
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        {currentTipData.points} points
                      </div>
                    </div>
                  </div>

                  <div className="text-sm text-gray-400">
                    {currentTip + 1} of {filteredTips.length}
                  </div>
                </div>

                {/* Tip Content */}
                <div className="mb-8">
                  <p className="text-lg text-gray-300 leading-relaxed">{currentTipData.content}</p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={prevTip}
                      className="flex items-center px-4 py-2 bg-slate-700/50 border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                    >
                      <ChevronLeft className="w-5 h-5 mr-1" />
                      Previous
                    </button>

                    <button
                      onClick={nextTip}
                      className="flex items-center px-4 py-2 bg-slate-700/50 border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300 hover:scale-105"
                    >
                      Next
                      <ChevronRight className="w-5 h-5 ml-1" />
                    </button>
                  </div>

                  <button
                    onClick={() => markAsCompleted(currentTipData.id)}
                    disabled={completedTips.includes(currentTipData.id)}
                    className={`flex items-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                      completedTips.includes(currentTipData.id)
                        ? "bg-green-400/20 text-green-400 border border-green-400/50 cursor-not-allowed"
                        : "glow-button hover:scale-105"
                    }`}
                  >
                    {completedTips.includes(currentTipData.id) ? (
                      <>
                        <CheckCircle className="w-5 h-5 mr-2" />
                        Completed
                      </>
                    ) : (
                      <>
                        <Target className="w-5 h-5 mr-2" />
                        Mark Complete
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Progress Bar */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="gaming-card hover:scale-105 transition-transform duration-300">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-gaming text-lg font-semibold text-cyan-400">Overall Progress</h3>
              <span className="text-sm text-gray-400">
                {completedTips.length} / {tips.length} completed
              </span>
            </div>

            <div className="w-full bg-slate-700/50 rounded-full h-3 mb-4">
              <div
                className="bg-gradient-to-r from-cyan-400 to-purple-500 h-3 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${(completedTips.length / tips.length) * 100}%` }}
              ></div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-lg font-bold text-green-400">
                  {tips.filter((tip) => tip.difficulty === "Easy" && completedTips.includes(tip.id)).length}
                </div>
                <div className="text-xs text-gray-400">Easy Tips</div>
              </div>
              <div>
                <div className="text-lg font-bold text-yellow-400">
                  {tips.filter((tip) => tip.difficulty === "Medium" && completedTips.includes(tip.id)).length}
                </div>
                <div className="text-xs text-gray-400">Medium Tips</div>
              </div>
              <div>
                <div className="text-lg font-bold text-red-400">
                  {tips.filter((tip) => tip.difficulty === "Hard" && completedTips.includes(tip.id)).length}
                </div>
                <div className="text-xs text-gray-400">Hard Tips</div>
              </div>
              <div>
                <div className="text-lg font-bold text-purple-400">{streak}</div>
                <div className="text-xs text-gray-400">Day Streak</div>
              </div>
            </div>
          </div>
        </div>

        {/* All Tips Grid */}
        <div className="max-w-6xl mx-auto">
          <h3 className="font-gaming text-2xl font-bold mb-8 text-center neon-text">
            All {selectedCategory !== "All" ? selectedCategory : ""} Tips
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTips.map((tip, index) => (
              <div
                key={tip.id}
                className={`gaming-card cursor-pointer transition-all duration-300 hover:scale-105 ${
                  index === currentTip ? "ring-2 ring-cyan-400/50" : ""
                } ${completedTips.includes(tip.id) ? "bg-green-900/20 border-green-400/30" : ""}`}
                onClick={() => setCurrentTip(index)}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(tip.difficulty)}`}>
                    {tip.difficulty}
                  </span>
                  {completedTips.includes(tip.id) && <CheckCircle className="w-5 h-5 text-green-400" />}
                </div>

                <h4 className="font-gaming text-lg font-semibold mb-2 text-white">{tip.title}</h4>

                <p className="text-gray-300 text-sm mb-4 line-clamp-3">{tip.content}</p>

                <div className="flex items-center justify-between text-xs text-gray-400">
                  <div className="flex items-center">
                    <Clock className="w-3 h-3 mr-1" />
                    {tip.duration}
                  </div>
                  <div className="flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    {tip.points} pts
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Daily Challenge */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="gaming-card bg-gradient-to-r from-purple-900/20 to-cyan-900/20 border-purple-400/30 hover:scale-105 transition-transform duration-300">
            <div className="text-center">
              <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="font-gaming text-2xl font-bold mb-4 text-yellow-400">Daily Challenge</h3>
              <p className="text-gray-300 mb-6">Complete 3 tips today to maintain your streak and earn bonus points!</p>

              <div className="flex justify-center space-x-2 mb-6">
                {[1, 2, 3].map((num) => (
                  <div
                    key={num}
                    className={`w-8 h-8 rounded-full flex items-center justify-center font-bold transition-all duration-300 ${
                      completedTips.length >= num ? "bg-green-400 text-black scale-110" : "bg-slate-700 text-gray-400"
                    }`}
                  >
                    {completedTips.length >= num ? "✓" : num}
                  </div>
                ))}
              </div>

              {completedTips.length >= 3 ? (
                <div className="text-green-400 font-semibold animate-pulse">
                  🎉 Daily challenge completed! +50 bonus points
                </div>
              ) : (
                <div className="text-gray-400">{3 - completedTips.length} more tips to complete today's challenge</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
