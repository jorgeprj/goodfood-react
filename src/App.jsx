import { useState } from 'react'

import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ImproveSection from './components/ImproveSection'
import QuoteSection from './components/QuoteSection'
import ChefsSection from './components/ChefsSection'


function App() {

  return (
    <div>
      <Navbar />
      <div className='container main'>
        <HeroSection />
        <ImproveSection />
        <QuoteSection />
        <ChefsSection />
      </div>
    </div>
  )
}

export default App
