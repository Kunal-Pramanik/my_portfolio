'use client'; // Add this at the very top if using Next.js App Router

import { useState, useEffect } from 'react';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
  }, []);

  return (
    <footer
      className="py-10 px-6 text-center"
      style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}
    >
      <p className="font-display font-bold text-xl mb-1">
        KP<span style={{ color: '#C8F135' }}>.</span>
      </p>
      <p className="text-xs font-mono" style={{ color: '#5A5A64' }}>
        Kunal Pramanik · M.Sc. Data Science, DA-IICT · {year}
      </p>
    </footer>
  );
}
