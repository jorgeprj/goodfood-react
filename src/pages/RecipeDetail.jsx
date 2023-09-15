import React from 'react'
import { useParams } from 'react-router-dom';

import { LuChefHat } from 'react-icons/lu'

import '../styles/RecipeDetail.css';


const RecipeDetail = ({ recipes, chefs }) => {
	const { id } = useParams();
	const recipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));
	const chef = chefs.find((chef) => chef.id == recipe.chefId);

	if (!recipe) {
		return <div>Receita não encontrada</div>;
	}

	return (
		<div className="recipe-details section">
			<div className='recipe-section'>
				<div className='recipe-info'>
					<h1 className='recipe-title'>{recipe.title}</h1>
					<p className='recipe-chef'><LuChefHat/> Chef {chef.name}</p>
					<p className='recipe-text'>{recipe.desc}</p>
					<h2 className='recipe-subtitle'>Ingredients</h2>
					{recipe.ingredients.map((ingredient, index) => (
        				<p className='recipe-text' key={index}>- {ingredient}</p>
      				))}
				</div>
				<img className='recipe-image' src={`../public/${recipe.image}`}/>
			</div>
			<h2 className='recipe-subtitle'>Step by Step</h2>
			{recipe.stepByStep.map((stepByStep, index) => (
        				<p className='recipe-text' key={index} style={{lineHeight: "2em"}}>{index + 1}. {stepByStep}</p>
      				))}
			<div>

			</div>
		</div>
	);
}

export default RecipeDetail