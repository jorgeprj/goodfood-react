import React from 'react'
import { useParams } from 'react-router-dom';

import { LuChefHat } from 'react-icons/lu'

import '../styles/RecipeDetail.css';

const RecipeDetail = ({ recipes }) => {
	const { id } = useParams();
	const recipe = recipes.find((recipe) => recipe.id === parseInt(id, 10));

	if (!recipe) {
		return <div>Receita não encontrada</div>;
	}

	return (
		<div className="recipe-details section">
			<div className='recipe-section'>
				<div className='recipe-info'>
					<h1 className='recipe-title'>{recipe.title}</h1>
					<p className='recipe-chef'><LuChefHat/> Chef {recipe.chef}</p>
					<p className='recipe-text'>{recipe.desc}</p>
					<h2 className='recipe-subtitle'>Ingredients</h2>
					<p>1 pacote de massa para pizza (ou você pode fazer a massa caseira)</p>
					<p>Farinha de trigo para polvilhar</p>
					<p>1 xícara de molho de tomate</p>
					<p>1 colher de chá de azeite de oliva</p>
					<p>1 dente de alho picado</p>
				</div>
				<img className='recipe-image' src={`../public/${recipe.image}`}/>
			</div>
			<h2 className='recipe-subtitle'>Step by Step</h2>
			<p className='recipe-text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam quidem expedita ipsum sequi assumenda est numquam eos eius dicta consequuntur voluptas officia totam aliquam laboriosam ut, architecto, hic accusamus unde!</p>
		</div>
	);
}

export default RecipeDetail