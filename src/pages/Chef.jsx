import React from 'react'
import { useParams } from 'react-router-dom';

import NotFound from './NotFound';
import RecipeCard from '../components/RecipeCard';

import { GiKnifeFork } from 'react-icons/gi'

import '../styles/Chef.css'
import { LuChefHat } from 'react-icons/lu';

const Chef = ({ recipes, chefs }) => {
	const { id } = useParams();
	const chef = chefs.find((chef) => chef.id === parseInt(id, 10));

	if (!chef) {
		return (
			<NotFound />
		);
	}

	return (
		<div>
			<div className='chef-profile'>
				<img src={`../public/${chef.img}`} alt="" />
				<div className='chef-profile-info'>
					<div className='chef-profile-name'>
						<h2>{chef.name}</h2>
					</div>
					
					<p className='chef-prof'><LuChefHat />Chef</p>
					<div className='chef-details-info'>
						<p className='details-info'>Recipes: <b>{chef.recipesCount}</b></p>
						<p className='details-info'>Cuisine: <b>{chef.cuisine}</b></p>
					</div>
				</div>
				<div className='chef-profile-rating'>
                    <p className='rating-label'>Rating</p>
                    <p className='rating-value'><GiKnifeFork color={'var(--primary-color)'} /> {chef.rating}</p>
                </div>

				<div className='chef-profile-rating'>
                    <p className='rating-label'>World Ranking</p>
                    <p className='rating-value'>#{chef.ranking}</p>
                </div>
			</div>
			<div className='chef-profile-bio'>
				<h2>Bio</h2>
				<p>{chef.bio}</p>
			</div>
			<div className="divider"></div>
			<div className='chef-profile-recipes'>
				<h2>Recipes</h2>
				<div className='chef-recipes-container'>
					{recipes
						.filter(recipe => recipe.chefId === chef.id)
						.map(filteredRecipe => (
							<div key={filteredRecipe.id}>
									<RecipeCard recipe={filteredRecipe} chef={chef} />
							</div>
						))}
				</div>
			</div>
		</div>
	)
}

export default Chef