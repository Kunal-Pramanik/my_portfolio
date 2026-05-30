import { useEffect, useRef, useState } from 'react'

const projects = [
  {
    id: '01',
    name: 'SarkariYojana AI',
    tagline: 'AI chatbot for 4,600+ Indian government schemes',
    description:
      'Production-grade RAG-powered chatbot combining FAISS vector search, real-time web search via Serper API, JWT auth with Supabase, persistent Firebase chat history, and topic-aware guardrails. Streaming Next.js frontend with source citation cards.',
    stack: ['Groq LLaMA 3', 'RAG', 'FAISS', 'Supabase', 'Firebase', 'Next.js', 'Vector Embeddings'],
    url: 'https://github.com/Kunal-Pramanik/Sarkari_yojana_ai',
    highlight: true,
    color: '#C8F135',
  },
  {
    id: '02',
    name: 'IllumiRefine AI',
    tagline: 'Extreme low-light image enhancement platform',
    description:
      'Full-stack computer vision platform using a Self-Calibrated Illumination (SCI) neural network. Novel SCI-Guided Adaptive Fusion pipeline — sub-2-second end-to-end processing. React frontend on Vercel, CPU-optimized PyTorch/FastAPI on Hugging Face.',
    stack: ['PyTorch', 'OpenCV', 'FastAPI', 'React', 'Hugging Face', 'Deep Learning'],
    url: 'https://github.com/Kunal-Pramanik/IllumiRefine-AI',
    color: '#0BCCB5',
  },
  {
    id: '03',
    name: 'Connect2Faculty',
    tagline: 'Semantic search engine for academic discovery',
    description:
      'End-to-end faculty discovery engine at DA-IICT. Custom BDE pipeline with BS4/FastAPI, 384-dimensional MiniLM vector embeddings for semantic similarity, Next.js 14 dashboard, FastAPI backend on Render, SQLite vector storage.',
    stack: ['NLP', 'MiniLM', 'FastAPI', 'Next.js 14', 'SQLite', 'Web Scraping'],
    url: 'https://github.com/Kunal-Pramanik/Connect2Faculty',
    color: '#A78BFA',
  },
  {
    id: '04',
    name: 'Bankruptcy Predictor',
    tagline: 'ML dashboard for financial risk assessment',
    description:
      'Interactive ML dashboard predicting company bankruptcy risk from real-world financial indicators. Comprehensive EDA to surface key risk signals. Random Forest classifier with high accuracy; deployed via Streamlit for real-time inference.',
    stack: ['Python', 'Random Forest', 'Streamlit', 'EDA', 'Scikit-learn'],
    url: 'https://github.com/Kunal-Pramanik/Bankruptcy_Predictor',
    color: '#F59E0B',
  },
]

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          obs.disconnect()
        }
      },
      { threshold: 0.15 }
    )
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="proj-card rounded-2xl p-7 transition-all duration-700"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'none' : 'translateY(30px)',
        transitionDelay: `${index * 100}ms`,
      }}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div>
          <span
            className="text-xs font-mono tracking-widest"
            style={{ color: project.color, opacity: 0.7 }}
          >
            {project.id}
          </span>
          <h3 className="font-display font-bold text-lg mt-1">{project.name}</h3>
          <p className="text-sm mt-0.5" style={{ color: project.color, opacity: 0.9 }}>
            {project.tagline}
          </p>
        </div>
        
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-shrink-0 p-2 rounded-full transition-all"
          style={{ border: `1px solid ${project.color}33`, color: project.color }}
          onMouseEnter={(e) => (e.currentTarget.style.background = `${project.color}15`)}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
          aria-label={`View ${project.name} on GitHub`}
        >
          <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
          </svg>
        </a>
      </div>

      <p className="text-sm leading-relaxed mb-5" style={{ color: '#8A8880' }}>
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span
            key={t}
            className="text-xs px-2.5 py-1 rounded-md font-mono"
            style={{
              background: `${project.color}10`,
              border: `1px solid ${project.color}25`,
              color: project.color,
              opacity: 0.85,
            }}
          >
            {t}
          </span>
        ))}
      </div>

      {project.highlight && (
        <div
          className="mt-4 pt-4 flex items-center gap-2 text-xs font-mono"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', color: '#8A8880' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Production deployed
        </div>
      )}
    </div>
  )
}

export default function Projects() {
  const headRef = useRef(null)
  const [headVis, setHeadVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setHeadVis(true); obs.disconnect() }
    }, { threshold: 0.3 })
    if (headRef.current) obs.observe(headRef.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          ref={headRef}
          className="mb-14 transition-all duration-700 overflow-visible"
          style={{ opacity: headVis ? 1 : 0, transform: headVis ? 'none' : 'translateY(20px)', paddingBottom: '8px' }}
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#C8F135' }}>
            / Projects
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl overflow-visible pb-3 leading-[1.2]">
            Things I&apos;ve built
          </h2>
          <p className="mt-3 text-base" style={{ color: '#8A8880', maxWidth: '480px' }}>
            Production-grade AI and ML systems, from full-stack web apps to computer vision pipelines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>

        <div className="mt-8 text-center">
          
            href="https://github.com/Kunal-Pramanik"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-sm"
          >
            <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
            </svg>
            See all repos on GitHub
          </a>
        </div>
      </div>
    </section>
  )
}
