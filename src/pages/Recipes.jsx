import React from 'react'

import PreviousSearches from '../components/PreviousSearches'
import RecipeCard from '../components/RecipeCard'

const Recipes = () => {
	const recipes = [
		{
			title: "Gourmet Steak",
			image: "img/gallery/img_1.jpg",
			chefImg: "img/top-chefs/img_13.jpg",
			desc: "A perfectly grilled premium cut with sophisticated accompaniments."
		},
		{
			title: "Dragon Roll",
            image: "img/gallery/img_22.jpg",
            chefImg: "img/top-chefs/img_8.jpg",
			desc: "A delectable sushi roll featuring eel, avocado, and a savory sauce."
		},
		{
			title: "Angus Burger",
            image: "img/gallery/img_8.jpg",
            chefImg: "img/top-chefs/img_12.jpg",
			desc: "A delectable Angus beef burger adorned with gourmet toppings."
		},
		{
			title: "Meatball Pasta",
            image: "img/gallery/img_12.jpg",
            chefImg: "img/top-chefs/img_1.jpg",
			desc: "A flavorful fusion of spicy meatballs and pasta with a Mexican twist."
		},
		{
			title: "Samba Soul Feijoada",
            image: "img/gallery/img_14.jpg",
            chefImg: "img/top-chefs/img_5.jpg",
			desc: "A delicious traditional Brazilian black bean stew with a soulful twist."
		},
		{
			title: "Magic Pizza",
            image: "img/gallery/img_20.jpg",
            chefImg: "img/top-chefs/img_12.jpg",
			desc: "A delightful pizza topped with the magic of pepperoni slices."
		}
	].sort(() => Math.random() - 0.5)

	return (
		<div>
			<PreviousSearches />
			<div className='recipes-container'>
				{recipes.map((recipe, index) => (
                    <RecipeCard key={index} recipe={recipe} />
                ))}
			</div>
		</div>
	)
}

export default Recipes