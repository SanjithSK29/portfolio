import Link from 'next/link'

export default function Blog() {
  return (
    <main className="min-h-screen bg-[#18181b] text-gray-100 font-sans">
      <div className="max-w-4xl mx-auto px-4 py-20">
        {/* Header */}
        <div className="text-center mb-16 border-b border-[#232329] pb-10">
          <Link 
            href="/" 
            className="inline-flex items-center text-gray-200 hover:text-gray-300 mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Portfolio
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-100 mb-4">My Blog</h1>
          <p className="text-lg text-gray-300">Thoughts on technology, AI/ML, and software development</p>
        </div>

        {/* Blog Posts Placeholder */}
        <div className="space-y-8">
          <div className="bg-[#232329] p-8 rounded border border-[#232329] hover:bg-[#232329]/80 transition-colors">
            <div className="flex items-center text-xs text-gray-400 mb-4">
              <span>Coming Soon</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              My First Blog Post
            </h2>
            <p className="text-gray-300 mb-4">
              This is where your first blog post will go. Write about your experiences, 
              projects, or insights about AI/ML and software development.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">AI/ML</span>
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Technology</span>
            </div>
          </div>

          <div className="bg-[#232329] p-8 rounded border border-[#232329] hover:bg-[#232329]/80 transition-colors">
            <div className="flex items-center text-xs text-gray-400 mb-4">
              <span>Coming Soon</span>
              <span className="mx-2">•</span>
              <span>3 min read</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              Learning Journey in Computer Science
            </h2>
            <p className="text-gray-300 mb-4">
              Share your experiences as a CSE student, challenges you&apos;ve faced, 
              and what you&apos;ve learned along the way.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Education</span>
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Learning</span>
            </div>
          </div>

          <div className="bg-[#232329] p-8 rounded border border-[#232329] hover:bg-[#232329]/80 transition-colors">
            <div className="flex items-center text-xs text-gray-400 mb-4">
              <span>Coming Soon</span>
              <span className="mx-2">•</span>
              <span>7 min read</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              Project Showcase: Building with AI
            </h2>
            <p className="text-gray-300 mb-4">
              Detailed breakdown of one of your AI/ML projects, including the 
              challenges, solutions, and lessons learned.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Projects</span>
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">AI/ML</span>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-[#232329] p-8 rounded text-center border border-[#232329]">
          <h3 className="text-xl font-bold text-gray-100 mb-4">Stay Updated</h3>
          <p className="text-gray-300 mb-6">
            Get notified when I publish new posts about technology and AI/ML.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-4 py-3 bg-[#18181b] border border-gray-200 rounded text-gray-100 placeholder-gray-400 focus:outline-none focus:border-gray-300"
            />
            <button className="px-6 py-3 bg-gray-200 text-[#18181b] font-semibold rounded hover:bg-gray-300 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </main>
  )
} 