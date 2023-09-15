import React from 'react'

import ChefCard from './ChefCard'

import { GiSushis, GiTacos, GiHamburger, GiMeatCleaver, GiFireBowl, GiPieSlice } from 'react-icons/gi';

import '../styles/ChefsSection.css'

import chefs from '../data/chefs.json'

const ChefsSection = () => {
  return (
    <div className='section chefs'>
        <h1 className='title'>Our Top Chefs</h1>
        <div className='top-chefs-container'>
          {chefs.map(chef => <ChefCard key={chef.name} chef={chef} />)}
        </div>
    </div>
  )
}

export default ChefsSection