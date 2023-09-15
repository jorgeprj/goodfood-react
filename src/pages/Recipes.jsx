import React from 'react'

import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'

const Recipes = ( {recipes, chefs} ) => {
	return (
		<div>
			<PreviousSearches />
			<div className='recipes-container'>
				{recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} chef={chefs.find((chef) => chef.id == recipe.chefId)} />
                ))}
			</div>
		</div>
	)
}

export default Recipes