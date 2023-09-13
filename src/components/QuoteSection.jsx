import React from 'react'

import { FaQuoteLeft } from 'react-icons/fa';

import '../styles/QuoteSection.css'

const QuoteSection = () => {
  return (
    <div className='quote'>
        <p className='quote-text'><FaQuoteLeft/> Cooking is all about people. Food is perhaps the only universal thing that has the power to bring everyone together. No matter where you're from, what you do for a living, we all need to eat. And that becomes the common ground.</p>
        <p className='quote-author'>- Chef Gordon Ramsay</p>
    </div>
  )
}

export default QuoteSection