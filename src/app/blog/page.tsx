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
              <span>June 2024</span>
              <span className="mx-2">•</span>
              <span>5 min read</span>
            </div>
            <h2 className="text-2xl font-bold text-gray-100 mb-4">
              Starting My Journey into Computer Science
            </h2>
            <p className="text-gray-300 mb-4">
              Hey there,<br/><br/>
              I’ve just begun my journey into the world of Computer Science, and it already feels like I’ve opened the door to something vast, powerful, and deeply exciting. Whether it’s writing my first few lines of code, understanding how computers think, or exploring how technology shapes the world, it’s all new and fascinating.<br/><br/>
              My interest in coding started back in school. I still remember the first time I wrote a simple program that printed my name on the screen. It was such a small thing, but seeing the computer respond to something I wrote felt almost magical. Since then, I’ve always been curious about how things work behind the scenes, how websites load, how apps are built, and how machines learn.<br/><br/>
              I’m currently learning the basics more seriously now. I’m working with languages like Python, C++, and Java, and exploring core concepts like data structures, algorithms, and how the internet works. It’s a lot to absorb, but every moment of clarity makes the effort worth it.<br/><br/>
              I recently started using Git and GitHub to track my projects. At first, it seemed overwhelming, but now I can see why version control is considered such an essential part of modern software development.<br/><br/>
              Right now, I’m focused on building a strong foundation, one topic at a time. I’m learning through hands-on coding, tutorials, and trial-and-error. Every mistake is a lesson, and every solution builds confidence.<br/><br/>
              I’m not sure where this path will lead,maybe web development, AI, security, or something I haven't discovered yet. But I know this is what I want to be doing.<br/><br/>
              This is just the beginning.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Journey</span>
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Learning</span>
              <span className="px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Computer Science</span>
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