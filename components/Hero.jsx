import { useEffect, useState } from 'react'

const roles = [
  'Data Scientist',
  'ML Engineer',
  'Full-Stack Builder',
  'LLM Engineer',
]

function TypeWriter({ words }) {
  const [display, setDisplay] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[wordIdx]
    let timeout

    if (!deleting && charIdx < word.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), 80)
    } else if (!deleting && charIdx === word.length) {
      timeout = setTimeout(() => setDeleting(true), 1800)
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), 45)
    } else if (deleting && charIdx === 0) {
      setDeleting(false)
      setWordIdx((i) => (i + 1) % words.length)
    }

    setDisplay(word.slice(0, charIdx))
    return () => clearTimeout(timeout)
  }, [charIdx, deleting, wordIdx, words])

  return (
    <span style={{ color: '#C8F135' }}>
      {display}
      <span className="animate-blink" style={{ borderRight: '2px solid #C8F135', marginLeft: '2px' }}>&nbsp;</span>
    </span>
  )
}

export default function Hero() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background orbs */}
      <div
        className="gradient-orb w-96 h-96 opacity-20"
        style={{
          background: 'radial-gradient(circle, #C8F135 0%, transparent 70%)',
          top: '10%',
          right: '10%',
        }}
      />
      <div
        className="gradient-orb w-80 h-80 opacity-15"
        style={{
          background: 'radial-gradient(circle, #0BCCB5 0%, transparent 70%)',
          bottom: '20%',
          left: '5%',
        }}
      />

      {/* Grid lines decorative */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(200,241,53,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(200,241,53,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 flex flex-col lg:flex-row items-center gap-16">

        {/* Left: text */}
        <div className="flex-1">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 opacity-0 animate-fade-up"
            style={{
              background: 'rgba(200,241,53,0.08)',
              border: '1px solid rgba(200,241,53,0.2)',
              animationFillMode: 'forwards',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#C8F135' }}
            />
            <span
              className="text-xs font-mono tracking-widest uppercase"
              style={{ color: '#C8F135' }}
            >
              Open to opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="font-display font-bold leading-[1.05] mb-4 opacity-0 animate-fade-up animate-delay-100"
            style={{
              fontSize: 'clamp(2.8rem, 6vw, 5rem)',
              animationFillMode: 'forwards',
            }}
          >
            Kunal
            <br />
            <span className="text-gradient">Pramanik</span>
          </h1>

          {/* Typewriter */}
          <p
            className="font-display text-2xl font-semibold mb-6 opacity-0 animate-fade-up animate-delay-200"
            style={{ animationFillMode: 'forwards', minHeight: '2rem' }}
          >
            <TypeWriter words={roles} />
          </p>

          {/* Summary */}
          <p
            className="font-body text-base leading-relaxed mb-8 opacity-0 animate-fade-up animate-delay-300"
            style={{
              color: '#8A8880',
              maxWidth: '520px',
              animationFillMode: 'forwards',
            }}
          >
            M.Sc. Data Science student at DA-IICT, Gandhinagar. I transform
            complex data into actionable products — from RAG-powered AI chatbots
            to computer vision pipelines and semantic search engines.
          </p>

          {/* CTAs */}
          <div
            className="flex flex-wrap gap-3 mb-10 opacity-0 animate-fade-up animate-delay-400"
            style={{ animationFillMode: 'forwards' }}
          >
            <a href="#projects" className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold">
              View Projects
            </a>
            <a href="#contact" className="btn-ghost px-6 py-2.5 rounded-full text-sm">
              Get in Touch
            </a>
          </div>

          {/* Social links */}
          <div
            className="flex items-center gap-6 opacity-0 animate-fade-up animate-delay-500"
            style={{ animationFillMode: 'forwards' }}
          >
            
              href="https://github.com/Kunal-Pramanik"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#8A8880' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F135')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8880')}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>

            
              href="https://www.linkedin.com/in/kunal-pramanik-5aa131267"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#8A8880' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F135')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8880')}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
              LinkedIn
            </a>

            
              href="mailto:202518001@dau.ac.in"
              className="flex items-center gap-2 text-sm transition-colors"
              style={{ color: '#8A8880' }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#C8F135')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8880')}
            >
              <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
              Email
            </a>
          </div>

        </div>
        {/* END left column */}

        {/* Right: profile photo */}
        <div
          className="hidden lg:flex items-center justify-center opacity-0 animate-fade-in animate-delay-600"
          style={{ animationFillMode: 'forwards' }}
        >
          <img
            src="/profile.jpg"
            alt="Kunal Pramanik"
            className="w-64 h-72 rounded-3xl object-cover"
            style={{
              border: '2px solid rgba(200,241,53,0.25)',
              boxShadow: '0 0 60px rgba(200,241,53,0.1), 0 24px 48px rgba(0,0,0,0.4)',
            }}
          />
        </div>

      </div>
      {/* END flex row */}

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in animate-delay-800"
        style={{ animationFillMode: 'forwards' }}
      >
        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: '#8A8880' }}>scroll</span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: 'linear-gradient(to bottom, #8A8880, transparent)' }}
        />
      </div>

    </section>
  )
}
