import { useEffect, useRef, useState } from 'react'

const skillGroups = [
  {
    category: 'Languages & Databases',
    icon: '⌨',
    skills: ['Python', 'SQL', 'PostgreSQL', 'SQLite', 'C'],
  },
  {
    category: 'ML & AI',
    icon: '🧠',
    skills: ['Machine Learning', 'NLP', 'LLM Engineering', 'RAG', 'Deep Learning', 'Computer Vision', 'Vector Embeddings', 'EDA', 'Statistical Analysis'],
  },
  {
    category: 'Frameworks & Cloud',
    icon: '☁',
    skills: ['FastAPI', 'Next.js', 'Streamlit', 'React', 'Vercel', 'Render', 'Hugging Face', 'Linux'],
  },
  {
    category: 'Data Engineering',
    icon: '⚙',
    skills: ['Data Pipelines', 'BeautifulSoup4', 'Web Scraping', 'FAISS', 'MiniLM', 'Git / GitHub'],
  },
]

const timeline = [
  {
    year: 'Jul 2025 – Present',
    title: 'M.Sc. Data Science',
    org: 'DA-IICT (Dhirubhai Ambani University)',
    loc: 'Gandhinagar, Gujarat',
    type: 'edu',
  },
  {
    year: 'Oct 2023',
    title: 'IBM Data Analytics Internship',
    org: 'IBM · Credential ID: PLAN-3C665A29A398',
    loc: 'Certified',
    type: 'cert',
  },
  {
    year: 'Jul 2022 – Jun 2024',
    title: 'President, Wann Hostel',
    org: 'Scottish Church College',
    loc: 'Kolkata, West Bengal',
    type: 'vol',
  },
  {
    year: 'Jul 2021 – Jul 2024',
    title: 'B.Sc. Mathematics — Grade A',
    org: 'Scottish Church College',
    loc: 'Kolkata, West Bengal',
    type: 'edu',
  },
]

const typeColor = {
  edu: '#C8F135',
  cert: '#0BCCB5',
  vol: '#A78BFA',
}
const typeLabel = {
  edu: 'Education',
  cert: 'Certification',
  vol: 'Leadership',
}

export default function Skills() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" className="relative py-28 px-6" style={{ background: 'rgba(26,26,36,0.3)' }}>
      {/* Faint diagonal stripe */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(-45deg, rgba(200,241,53,0.15) 0px, rgba(200,241,53,0.15) 1px, transparent 1px, transparent 24px)',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={ref}
          className="mb-14 transition-all duration-700"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)' }}
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#C8F135' }}>
            / Skills & Background
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            What I work with
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills grid */}
          <div className="space-y-8">
            {skillGroups.map((grp, gi) => (
              <div
                key={grp.category}
                className="transition-all duration-700"
                style={{
                  opacity: vis ? 1 : 0,
                  transform: vis ? 'none' : 'translateY(20px)',
                  transitionDelay: `${gi * 120}ms`,
                }}
              >
                <p
                  className="text-xs font-mono uppercase tracking-widest mb-3 flex items-center gap-2"
                  style={{ color: '#8A8880' }}
                >
                  <span>{grp.icon}</span>
                  {grp.category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {grp.skills.map((s) => (
                    <span key={s} className="skill-pill text-xs px-3 py-1.5 rounded-lg cursor-default" style={{ color: '#C8C5BC' }}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Timeline */}
          <div>
            <p
              className="text-xs font-mono uppercase tracking-widest mb-6"
              style={{ color: '#8A8880' }}
            >
              Timeline
            </p>
            <div className="relative pl-5">
              <div
                className="absolute left-0 top-2 bottom-2 w-px"
                style={{ background: 'rgba(255,255,255,0.07)' }}
              />
              <div className="space-y-7">
                {timeline.map((item, i) => (
                  <div
                    key={i}
                    className="relative transition-all duration-700"
                    style={{
                      opacity: vis ? 1 : 0,
                      transform: vis ? 'none' : 'translateX(-16px)',
                      transitionDelay: `${200 + i * 120}ms`,
                    }}
                  >
                    <span
                      className="absolute -left-5 top-1.5 w-2.5 h-2.5 rounded-full border-2 -translate-x-1/2"
                      style={{
                        background: typeColor[item.type],
                        borderColor: '#0A0A0F',
                        boxShadow: `0 0 8px ${typeColor[item.type]}60`,
                      }}
                    />
                    <div className="flex items-center gap-2 mb-0.5">
                      <span
                        className="text-xs px-2 py-0.5 rounded font-mono"
                        style={{
                          background: `${typeColor[item.type]}12`,
                          color: typeColor[item.type],
                        }}
                      >
                        {typeLabel[item.type]}
                      </span>
                    </div>
                    <p className="font-display font-semibold text-sm">{item.title}</p>
                    <p className="text-xs mt-0.5" style={{ color: '#8A8880' }}>
                      {item.org}
                    </p>
                    <p className="text-xs mt-0.5 font-mono" style={{ color: '#5A5A64' }}>
                      {item.year} · {item.loc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
