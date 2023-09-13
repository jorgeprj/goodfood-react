import React from 'react'

import ChefCard from './ChefCard'

import { GiSushis, GiTacos, GiHamburger, GiMeatCleaver, GiFireBowl, GiPieSlice } from 'react-icons/gi';

import '../styles/ChefsSection.css'

const ChefsSection = () => {
  const chefs = [
    {
      name: "Joe Yamamoto",
      img: "img/top-chefs/img_8.jpg",
      icon: GiSushis,
      bio: "Specialized in the art of Japanese cuisine, Joe Yamamoto is a master of high-quality sushi and sashimi.",
      ranking: "02",
      recipesCount: 118,
      cuisine: "Asian",
      rating: 9.95
    },
    {
      name: "Pierre Dupont",
      img: "img/top-chefs/img_5.jpg",
      icon: GiFireBowl,
      bio: "Descended from a long line of French chefs, Pierre is a master in the art of contemporary French cuisine.",
      ranking: "01",
      recipesCount: 67,
      cuisine: "French",
      rating: 9.93
    },
    {
      name: "Luca Rossi",
      img: "img/top-chefs/img_10.jpg",
      icon: GiPieSlice,
      bio: "Luca is an Italian chef passionate about desserts. He specializes in creating delicious sweets that win everyone's hearts.",
      ranking: "05",
      recipesCount: 103,
      cuisine: "Italian",
      rating: 9.91
    },
    {
      name: "Max Fischer",
      img: "img/top-chefs/img_13.jpg",
      icon: GiMeatCleaver,
      bio: "Originally from Germany, Maximilian is known for his expertise in preparing meat-based dishes, both traditional and contemporary.",
      ranking: "03",
      recipesCount: 86,
      cuisine: "American",
      rating: 9.89
    },
    {
      name: "Bella Lopez",
      img: "img/top-chefs/img_1.jpg",
      icon: GiTacos,
      bio: "A passionate Mexican cuisine enthusiast, Bella Lopez is known for her skills in preparing traditional dishes with a modern twist.",
      ranking: "08",
      recipesCount: 57,
      cuisine: "Mexican",
      rating: 9.82
    },
    {
      name: "David Smith",
      img: "img/top-chefs/img_12.jpg",
      icon: GiHamburger,
      bio: "With a love for American cuisine, David Smith is a master in preparing classic dishes, from barbecue to gourmet burgers.",
      ranking: "06",
      recipesCount: 72,
      cuisine: "American",
      rating: 9.75
    }
  ]
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