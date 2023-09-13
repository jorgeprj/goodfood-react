import { useState } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ImproveSection from './components/ImproveSection'
import QuoteSection from './components/QuoteSection'

function App() {

  return (
    <div>
      <Navbar />
      <div className='container main'>
        <HeroSection />
        <ImproveSection />
        <QuoteSection />
      </div>
    </div>
  )
}

export default App
