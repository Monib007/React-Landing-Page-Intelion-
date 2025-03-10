import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

const IntelionLanding = () => {
  return (
    <div className="min-h-screen">
        <Navbar />
        <Hero />
        <Features />
        <CallToAction />
        <Footer />
    </div>
  )
}

export default IntelionLanding