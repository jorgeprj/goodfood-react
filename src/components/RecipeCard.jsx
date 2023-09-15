import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/RecipeCard.css'
import CustomImage from './CustomImage'

const RecipeCard = ({ recipe, chef }) => {

  return (
    <div className='recipe-card'>
        <CustomImage imgSrc={recipe.image} pt="65%"/>
        <div className='recipe-card-info'>
          <img className='chef-img' src={chef.img} alt="" />
          <p className='recipe-title'>{recipe.title}</p>
          <p className='recipe-desc'>{recipe.desc}</p>
          <Link to={`/recipes/${recipe.id}`} className="view-btn">View Recipe</Link>
        </div>
    </div>
  )
}

export default RecipeCard