import { useRef, useState, useEffect } from 'react'

export default function Contact() {
  const ref = useRef(null)
  const [vis, setVis] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setVis(true); obs.disconnect() }
    }, { threshold: 0.1 })
    if (ref.current) obs.observe(ref.current)
    return () => obs.disconnect()
  }, [])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Valid email required'
    if (!form.message.trim() || form.message.trim().length < 10) e.message = 'Message must be at least 10 characters'
    return e
  }

  const handleChange = (e) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
    if (errors[e.target.name]) setErrors((er) => ({ ...er, [e.target.name]: '' }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }

    setStatus('sending')
    try {
      // Replace YOUR_FORM_ID with your Formspree form ID after signup at formspree.io
      const res = await fetch('https://formspree.io/f/mzdwwlqk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: form.subject || '(no subject)',
          message: form.message,
          _subject: `Portfolio message from ${form.name}`,
        }),
      })
      if (res.ok) {
        setStatus('success')
        setForm({ name: '', email: '', subject: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative py-28 px-6">
      {/* Background accent */}
      <div
        className="gradient-orb w-72 h-72 opacity-10"
        style={{
          background: 'radial-gradient(circle, #C8F135 0%, transparent 70%)',
          bottom: '10%',
          right: '15%',
        }}
      />

      <div className="relative max-w-6xl mx-auto">
        <div
          ref={ref}
          className="mb-14 transition-all duration-700"
          style={{ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(20px)' }}
        >
          <p className="text-xs font-mono tracking-widest uppercase mb-3" style={{ color: '#C8F135' }}>
            / Contact
          </p>
          <h2 className="font-display font-bold text-4xl md:text-5xl">
            Let&apos;s connect
          </h2>
          <p className="mt-3 text-base" style={{ color: '#8A8880', maxWidth: '480px' }}>
            Whether it&apos;s a project, collaboration, internship, or just a chat about data — I&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Left: form */}
          <div
            className="lg:col-span-3 transition-all duration-700"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(28px)',
              transitionDelay: '150ms',
            }}
          >
            <div className="card-glass rounded-2xl p-8">
              {status === 'success' ? (
                <div className="text-center py-12">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: 'rgba(200,241,53,0.12)' }}
                  >
                    <svg width="32" height="32" fill="none" stroke="#C8F135" strokeWidth="2.5" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-xl mb-2">Message sent!</h3>
                  <p className="text-sm" style={{ color: '#8A8880' }}>
                    Thanks for reaching out. I&apos;ll get back to you shortly.
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 btn-ghost px-5 py-2 rounded-full text-sm"
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#8A8880' }}>
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm"
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs" style={{ color: '#F87171' }}>{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#8A8880' }}>
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@example.com"
                        className="input-field w-full px-4 py-3 rounded-xl text-sm"
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs" style={{ color: '#F87171' }}>{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#8A8880' }}>
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      placeholder="What's it about?"
                      className="input-field w-full px-4 py-3 rounded-xl text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase tracking-widest mb-2" style={{ color: '#8A8880' }}>
                      Message *
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell me what's on your mind..."
                      rows={5}
                      className="input-field w-full px-4 py-3 rounded-xl text-sm resize-none"
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs" style={{ color: '#F87171' }}>{errors.message}</p>
                    )}
                  </div>

                  {status === 'error' && (
                    <div
                      className="px-4 py-3 rounded-xl text-sm"
                      style={{ background: 'rgba(248,113,113,0.08)', border: '1px solid rgba(248,113,113,0.2)', color: '#F87171' }}
                    >
                      Something went wrong. Please try again or email me directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="btn-primary w-full py-3.5 rounded-xl text-sm font-semibold flex items-center justify-center gap-2 disabled:opacity-60"
                  >
                    {status === 'sending' ? (
                      <>
                        <svg className="animate-spin" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0 1 21.485 12 59.77 59.77 0 0 1 3.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right: info */}
          <div
            className="lg:col-span-2 flex flex-col gap-5 transition-all duration-700"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? 'none' : 'translateY(28px)',
              transitionDelay: '300ms',
            }}
          >
            {[
              {
                icon: (
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                  </svg>
                ),
                label: 'Email',
                value: 'pramanikkunal65@gmail.com',
                href: 'mailto:pramanikkunal65@gmail.com',
              },
              {
                icon: (
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                ),
                label: 'LinkedIn',
                value: 'kunal-pramanik-5aa131267',
                href: 'https://www.linkedin.com/in/kunal-pramanik-5aa131267',
              },
              {
                icon: (
                  <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                ),
                label: 'GitHub',
                value: 'Kunal-Pramanik',
                href: 'https://github.com/Kunal-Pramanik',
              },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card-glass rounded-xl p-5 flex items-center gap-4 transition-all duration-200 hover:border-accent/20 group"
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-accent/10 transition-colors"
                  style={{ background: 'rgba(200,241,53,0.06)', color: '#C8F135' }}
                >
                  {item.icon}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-mono uppercase tracking-widest mb-0.5" style={{ color: '#8A8880' }}>
                    {item.label}
                  </p>
                  <p className="text-sm truncate" style={{ color: '#C8C5BC' }}>
                    {item.value}
                  </p>
                </div>
              </a>
            ))}

            {/* Note about how form works */}
            <div
              className="rounded-xl p-4 text-xs leading-relaxed"
              style={{
                background: 'rgba(200,241,53,0.05)',
                border: '1px solid rgba(200,241,53,0.1)',
                color: '#8A8880',
              }}
            >
              <span style={{ color: '#C8F135' }}>✦ Powered by Formspree</span> — messages are stored and I get notified by email instantly.
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
