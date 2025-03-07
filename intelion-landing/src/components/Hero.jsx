import React from 'react'
import heroBg from '../assets/background.jpg'

const Hero = () => {
  return (
    <header className="text-white text-center py-32 px-8 md:px-16 lg:px-24 bg-cover bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
        <h1 className="text-6xl font-extrabold drop-shadow-lg">Intelion - Empowering Fintech Solutions</h1>
        <p className="mt-6 text-xl max-w-3xl mx-auto font-light bg-opacity-75 px-6 py-3 rounded-lg">
          Next-generation financial solutions that revolutionize the way businesses operate.
        </p>
      </header>
  )
}

export default Hero