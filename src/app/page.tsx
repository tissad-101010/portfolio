'use client'


import Header from '../components/header/Header' 
import Footer from '../components/footer/Footer'
import Hero from '../components/body/Hero'
import Contact from '../components/body/Contact'
import Projects from '../components/body/Projects'




export default function Home() {
  return (
    
    <main className="min-h-screen bg-gray-50 dark:bg-background transition-colors duration-300">
      <Header />
      <Hero />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
