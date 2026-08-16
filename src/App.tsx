import { BrowserRouter, Routes, Route, useLocation, Navigate } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/Nav'
import Footer from './components/Footer'
import Cursor from './components/Cursor'
import Home from './pages/Home'
import HireHome from './pages/hire/HireHome'
import About from './pages/About'
import Contact from './pages/Contact'
import CaseStudy from './pages/work/CaseStudy'
import { useParallax } from './hooks/useParallax'
import { useScrollReveal } from './hooks/useScrollReveal'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => { window.scrollTo(0, 0) }, [pathname])
  return null
}

function AppInner() {
  useParallax()
  useScrollReveal()
  const { pathname } = useLocation()
  // The hiring copy carries its own minimal nav and footer
  const isHire = pathname.startsWith('/hire')
  return (
    <>
      <ScrollToTop />
      <Cursor />
      {!isHire && <Nav />}
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hire" element={<HireHome />} />
          {/* The archive page is gone: /work scrolls to the homepage section */}
          <Route path="/work" element={<Navigate to="/#work" replace />} />
          <Route path="/work/:slug" element={<CaseStudy />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {!isHire && <Footer />}
    </>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <AppInner />
    </BrowserRouter>
  )
}
