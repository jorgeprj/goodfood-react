import React, { useState } from 'react'

import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'

const Recipes = ( {recipes, chefs} ) => {
	const [search, setSearch] = useState("");
	return (
		<div>
			<PreviousSearches search={search} setSearch={setSearch} />
			<div className='recipes-container'>
				{recipes
					.filter(recipe => recipe.title.toLowerCase().includes(search.toLowerCase()))
					.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} chef={chefs.find((chef) => chef.id == recipe.chefId)} />
                ))}
			</div>
		</div>
	)
}

export default Recipes