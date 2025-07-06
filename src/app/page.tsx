import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#18181b] text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] px-4 text-center border-b border-[#232329]">
        <div className="max-w-3xl mx-auto py-16">
          {/* Profile Photo */}
          <div className="w-44 h-44 mx-auto mb-8 rounded-full overflow-hidden border-4 border-gray-200/10 shadow-lg flex items-center justify-center bg-[#232329]">
            <Image
              src="/profile.png"
              alt="Sanjith Suresh Kumar profile photo"
              width={320}
              height={320}
              className="object-cover w-full h-full"
              priority
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Sanjith Suresh Kumar</h1>
          <p className="text-lg md:text-xl text-gray-300 mb-1">Computer Science & Engineering (AI & ML) Student</p>
          <p className="text-md text-gray-400 mb-1">PES University</p>
          <p className="text-sm text-gray-500 mb-4">+91 63617 17664 · sanjithsureshkumarwork@gmail.com</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mt-4">
            <Link 
              href="/blog" 
              className="px-6 py-2 bg-gray-200 text-[#18181b] rounded hover:bg-gray-300 transition"
            >
              Read My Blog
            </Link>
            <Link 
              href="#about" 
              className="px-6 py-2 border border-gray-200 text-gray-200 rounded hover:bg-[#232329] transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 border-b border-[#232329]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">About Me</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-base text-gray-300 mb-4">
                I am a passionate 2nd year Computer Science and Engineering student at PES University, specializing in Artificial Intelligence and Machine Learning. I enjoy building bots, automating tasks, and engaging with technical communities. I am also active in robotics, automation, and marketing for student societies.
              </p>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Technical Skills</h3>
                <ul className="text-gray-300 text-sm list-disc list-inside">
                  <li><span className="font-semibold">Programming Languages:</span> Java, C++, Python</li>
                  <li><span className="font-semibold">Libraries/Frameworks:</span> Pandas, Numpy, Matplotlib</li>
                  <li><span className="font-semibold">Other Skills:</span> Data Structures and Algorithms</li>
                </ul>
              </div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Soft Skills</h3>
                <ul className="text-gray-300 text-sm list-disc list-inside grid grid-cols-2 gap-x-4">
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Communication Skills</li>
                  <li>Time Management</li>
                  <li>Adaptability</li>
                  <li>Critical Thinking</li>
                  <li>Attention to detail</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Certifications</h3>
                <ul className="text-gray-300 text-sm list-disc list-inside">
                  <li>Intro to Machine Learning (Kaggle) <span className="text-gray-500">- Oct 2024</span></li>
                  <li>Pandas (Kaggle) <span className="text-gray-500">- Oct 2024</span></li>
                </ul>
              </div>
            </div>
            <div>
              <div className="mb-4">
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Interests</h3>
                <ul className="text-gray-300 text-sm list-disc list-inside">
                  <li>Robotics and Automation</li>
                  <li>Embedded Systems</li>
                  <li>Artificial Intelligence in Robotics</li>
                  <li>Control Systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2 text-gray-100">Extracurricular Activities</h3>
                <ul className="text-gray-300 text-sm list-disc list-inside">
                  <li>Boys&apos; Choir</li>
                  <li>Inter-School Basketball Team</li>
                  <li>Painting</li>
                  <li>Sketching</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-16 px-4 border-b border-[#232329]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#232329] p-6 rounded border border-[#232329]">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">Discord Moderation Bot</h3>
              <ul className="text-gray-300 text-sm list-disc list-inside mb-2">
                <li>Designed and deployed a bot to moderate a server with over 20,000 members</li>
                <li>Integrated automated moderation, user management, and custom commands</li>
              </ul>
              <span className="inline-block mt-2 px-3 py-1 bg-gray-200 text-[#18181b] rounded-full text-xs">Community Management</span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 px-4 border-b border-[#232329]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Experience</h2>
          <div className="space-y-8">
            <div className="bg-[#232329] p-6 rounded border border-[#232329]">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">Freelance Discord Bot Developer <span className="text-gray-500 text-xs">Mar 2020 - Sept 2020</span></h3>
              <p className="text-gray-300 text-sm">Created Bots for Community Management, boosting server engagement and automating tasks.</p>
            </div>
            <div className="bg-[#232329] p-6 rounded border border-[#232329]">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">Member of Technical Body - IEEE Robotics and Automation Society <span className="text-gray-500 text-xs">March 2025 - Present</span></h3>
              <p className="text-gray-300 text-sm">Actively participating in robotics and automation discussions, learning foundational concepts, and engaging with the community to develop technical skills.</p>
            </div>
            <div className="bg-[#232329] p-6 rounded border border-[#232329]">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">Member of Marketing and Sponsorship - IEEE Computer Society <span className="text-gray-500 text-xs">January 2025 - Present</span></h3>
              <p className="text-gray-300 text-sm">Recently joined to explore marketing strategies, assist in promotions, and engage with the community to enhance outreach and event visibility.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 px-4 border-b border-[#232329]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-gray-100">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#232329] p-6 rounded border border-[#232329]">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">Bachelor of Technology</h3>
              <p className="text-gray-100 font-semibold">Computer Science & Engineering with AI & ML</p>
              <p className="text-gray-300 text-sm">PES University (PES1UG24AM250)</p>
              <p className="text-gray-500 text-xs">2028 · Grade: 9.21</p>
            </div>
            <div className="bg-[#232329] p-6 rounded border border-[#232329]">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">Pre-University College</h3>
              <p className="text-gray-300 text-sm">Deeksha Centre For Learning</p>
              <p className="text-gray-500 text-xs">2024 · Grade: 98.33%</p>
            </div>
            <div className="bg-[#232329] p-6 rounded border border-[#232329]">
              <h3 className="text-lg font-semibold mb-2 text-gray-100">High School - ICSE</h3>
              <p className="text-gray-300 text-sm">Bishop Cotton Boys&apos; School</p>
              <p className="text-gray-500 text-xs">2022 · Grade: 87.5%</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4 text-gray-100">Get In Touch</h2>
          <p className="text-base text-gray-300 mb-6">
            I&apos;m always open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link 
              href="mailto:sanjithsureshkumarwork@gmail.com" 
              className="px-6 py-2 bg-gray-200 text-[#18181b] rounded hover:bg-gray-300 transition"
            >
              Email Me
            </Link>
            <Link 
              href="/blog" 
              className="px-6 py-2 border border-gray-200 text-gray-200 rounded hover:bg-[#232329] transition"
            >
              Read My Blog
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-[#232329]">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 text-sm">
            © 2024 Sanjith Suresh Kumar. Built with Next.js and Tailwind CSS.
          </p>
        </div>
      </footer>
    </main>
  )
}
