import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kunal Pramanik — Data Scientist & ML Engineer</title>
        <meta name="description" content="Kunal Pramanik — M.Sc. Data Science student at DA-IICT. Building AI chatbots, ML dashboards, and semantic search engines." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Kunal Pramanik — Data Scientist" />
        <meta property="og:description" content="M.Sc. Data Science at DA-IICT. RAG, LLMs, Computer Vision, Full-Stack ML." />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="noise-bg min-h-screen">
        <Navbar />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
