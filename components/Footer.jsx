export default function Footer() {
  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <p className="font-display font-bold text-xl mb-1">
        KP<span style={{ color: '#C8F135' }}>.</span>
      </p>
      <p className="text-xs font-mono" style={{ color: '#5A5A64' }}>
        Kunal Pramanik · M.Sc. Data Science, DA-IICT · {new Date().getFullYear()}
      </p>
      <p className="text-xs mt-3" style={{ color: '#3A3A44' }}>
        Built with Next.js · Tailwind CSS · Deployed on Vercel
      </p>
    </footer>
  )
}
