"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, Clock, User, Calendar, Share2, Bookmark, ThumbsUp } from "lucide-react"

// This would typically come from a database or API
const articleData: { [key: string]: any } = {
  "1": {
    title: "Breaking Free from Gaming Addiction: A Step-by-Step Guide",
    content: `
# Breaking Free from Gaming Addiction: A Step-by-Step Guide

Gaming addiction is a real and serious condition that affects millions of people worldwide. If you're reading this, you've already taken the first and most important step: recognizing that there might be a problem.

## Understanding Gaming Addiction

Gaming addiction, also known as Internet Gaming Disorder, is characterized by:
- Loss of control over gaming habits
- Prioritizing gaming over other activities and daily responsibilities
- Continuing to game despite negative consequences
- Experiencing withdrawal symptoms when unable to play

## Step 1: Acknowledge the Problem

The first step is often the hardest. Many gamers struggle with denial, thinking they can stop anytime they want. Signs that gaming has become problematic include:

- Gaming for more than 4-6 hours daily
- Neglecting work, school, or relationships
- Lying about time spent gaming
- Feeling anxious or irritable when not gaming
- Using gaming to escape from problems or negative emotions

## Step 2: Set Clear Boundaries

Start with small, achievable goals:

### Time Limits
- Begin with a 2-hour daily limit
- Use phone alarms or gaming apps with built-in timers
- Gradually reduce time as you build healthier habits

### Gaming Schedule
- Designate specific gaming hours (e.g., 7-9 PM)
- No gaming before completing daily responsibilities
- Implement "gaming-free" days

## Step 3: Create Alternative Activities

Replace gaming time with fulfilling activities:

### Physical Activities
- Join a gym or sports club
- Take daily walks
- Try yoga or martial arts

### Social Activities
- Meet friends for coffee
- Join hobby groups or clubs
- Volunteer in your community

### Creative Pursuits
- Learn a musical instrument
- Try drawing or painting
- Write in a journal

## Step 4: Modify Your Environment

Make gaming less accessible:
- Move gaming devices out of your bedroom
- Uninstall games from your phone
- Use website blockers during work/study hours
- Create a dedicated workspace free from gaming distractions

## Step 5: Build a Support Network

Recovery is easier with support:
- Join online support groups like GamerMind
- Talk to trusted friends and family
- Consider professional counseling
- Find an accountability partner

## Step 6: Address Underlying Issues

Gaming addiction often masks deeper problems:
- Depression and anxiety
- Social isolation
- Low self-esteem
- Stress from work or relationships

Working with a therapist can help address these root causes.

## Step 7: Practice Self-Compassion

Recovery isn't linear. You may have setbacks, and that's okay. Remember:
- Progress, not perfection
- Each day is a new opportunity
- Small steps lead to big changes
- You're not alone in this journey

## When to Seek Professional Help

Consider professional help if:
- You've tried multiple times to cut back unsuccessfully
- Gaming is severely impacting your life
- You're experiencing depression or anxiety
- You're having thoughts of self-harm

## Resources for Recovery

- **National Suicide Prevention Lifeline**: 988
- **SAMHSA National Helpline**: 1-800-662-4357
- **Online Gaming Addicts Anonymous**: olganon.org
- **Computer Gaming Addicts Anonymous**: cgaa.info

## Conclusion

Breaking free from gaming addiction is challenging but absolutely possible. Thousands of people have successfully regained control of their lives while still enjoying gaming in moderation. Remember, seeking help is a sign of strength, not weakness.

Your journey to recovery starts with a single step. You've already taken that step by reading this article. Now, take the next one.
    `,
    author: "Dr. Sarah Chen",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Gaming Addiction",
    tags: ["addiction", "recovery", "balance", "mental-health"],
  },
}

export default function ArticlePage() {
  const params = useParams()
  const articleId = params.id as string
  const article = articleData[articleId]

  if (!article) {
    return (
      <div className="pt-24 pb-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-gaming text-2xl font-bold mb-4 text-red-400">Article Not Found</h1>
          <p className="text-gray-300 mb-6">The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/articles" className="glow-button">
            Back to Articles
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <Link
          href="/articles"
          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Articles
        </Link>

        {/* Article Header */}
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {article.tags.map((tag: string) => (
              <span key={tag} className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm rounded-full">
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="font-gaming text-3xl md:text-4xl font-bold mb-6 neon-text">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-6 text-gray-400 mb-6">
            <div className="flex items-center">
              <User className="w-4 h-4 mr-2" />
              {article.author}
            </div>
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {new Date(article.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              {article.readTime}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4">
            <button className="flex items-center px-4 py-2 bg-blue-400/20 border border-blue-400/30 rounded-lg text-blue-400 hover:bg-blue-400/30 transition-colors">
              <ThumbsUp className="w-4 h-4 mr-2" />
              Helpful
            </button>
            <button className="flex items-center px-4 py-2 bg-purple-400/20 border border-purple-400/30 rounded-lg text-purple-400 hover:bg-purple-400/30 transition-colors">
              <Bookmark className="w-4 h-4 mr-2" />
              Save
            </button>
            <button className="flex items-center px-4 py-2 bg-green-400/20 border border-green-400/30 rounded-lg text-green-400 hover:bg-green-400/30 transition-colors">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </button>
          </div>
        </header>

        {/* Article Content */}
        <article className="gaming-card">
          <div className="prose prose-invert prose-lg max-w-none">
            <div
              className="text-gray-300 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: article.content
                  .replace(/^# /gm, '<h1 class="font-gaming text-2xl font-bold text-cyan-400 mb-4 mt-8">')
                  .replace(/^## /gm, '<h2 class="font-gaming text-xl font-semibold text-purple-400 mb-3 mt-6">')
                  .replace(/^### /gm, '<h3 class="font-gaming text-lg font-semibold text-pink-400 mb-2 mt-4">')
                  .replace(/^- /gm, '<li class="mb-1">')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="text-white">$1</strong>')
                  .replace(/\n/g, '</p><p class="mb-4">')
                  .replace(/^(?!<h|<l)/gm, '<p class="mb-4">'),
              }}
            />
          </div>
        </article>

        {/* Article Footer */}
        <footer className="mt-12 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div>
              <h3 className="font-gaming text-lg font-semibold text-cyan-400 mb-2">Was this article helpful?</h3>
              <div className="flex gap-4">
                <button className="flex items-center px-4 py-2 bg-green-400/20 border border-green-400/30 rounded-lg text-green-400 hover:bg-green-400/30 transition-colors">
                  <ThumbsUp className="w-4 h-4 mr-2" />
                  Yes, helpful
                </button>
                <button className="px-4 py-2 bg-slate-700/50 border border-gray-600/50 rounded-lg text-gray-300 hover:border-cyan-400/50 hover:text-cyan-400 transition-all duration-300">
                  Needs improvement
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-400 mb-4">Need immediate support?</p>
              <Link href="/chat" className="glow-button">
                Join Anonymous Chat
              </Link>
            </div>
          </div>
        </footer>

        {/* Related Articles */}
        <section className="mt-16">
          <h3 className="font-gaming text-2xl font-bold mb-8 neon-text">Related Articles</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link href="/articles/2" className="gaming-card group hover:scale-105 transition-transform duration-300">
              <h4 className="font-gaming text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                Managing Social Anxiety in Online Gaming
              </h4>
              <p className="text-gray-300 text-sm mb-3">
                Tips for overcoming social anxiety when playing multiplayer games...
              </p>
              <div className="text-xs text-gray-400">6 min read</div>
            </Link>

            <Link href="/articles/3" className="gaming-card group hover:scale-105 transition-transform duration-300">
              <h4 className="font-gaming text-lg font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors">
                The Psychology Behind Gaming Escapism
              </h4>
              <p className="text-gray-300 text-sm mb-3">Understanding why we use games to escape reality...</p>
              <div className="text-xs text-gray-400">10 min read</div>
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
