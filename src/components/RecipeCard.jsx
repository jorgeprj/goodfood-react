import React from 'react'

import { Link } from 'react-router-dom';

import '../styles/RecipeCard.css'
import CustomImage from './CustomImage'
import StarRating from './StarRating';


const RecipeCard = ({ recipe, chef }) => {

  return (
    <div className='recipe-card'>
        <CustomImage imgSrc={recipe.image} pt="65%"/>
        <div className='recipe-card-info'>
          <img className='chef-img' src={chef.img} alt="" />
          <p className='recipe-title'>{recipe.title}</p>
          <StarRating rating={recipe.rating}/>
          <p className='recipe-desc'>{recipe.desc}</p>
          <div className='recipe-stats'>
            <p><b>{recipe.mins}</b><br/>Mins</p>
            <p><b>{recipe.people}</b><br/>People</p>
            <p><b>{recipe.ingredients.length}</b><br/>Ingredients</p>
          </div>
          <Link to={`/recipes/${recipe.id}`} className="view-btn">View Recipe</Link>
        </div>
    </div>
  )
}

export default RecipeCard