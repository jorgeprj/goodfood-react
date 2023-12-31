import React from 'react'
import { Link } from 'react-router-dom';

import { GiKnifeFork } from 'react-icons/gi';

import '../styles/ChefCard.css'

const ChefCard = ({ chef }) => {
    return (
        <div className='chef-card'>
            <img src={chef.img} alt="" />
            <div className='chef-card-container'>
                <div className='chef-card-info'>
                    <h3 className='chef-card-name'>
                        {chef.name}
                    </h3>
                    <p className='chef-recipes'>Recipes: <b>{chef.recipesCount}</b></p>
                    <p className='chef-cuisine'>Cuisine: <b>{chef.cuisine}</b></p>
                    <p className='chef-ranking'>Ranking: <b>#{chef.ranking}</b></p>
                    <Link to={`/chefs/${chef.id}`} className='chef-more-details'>+ More Details</Link>

                </div>
                <div className='chef-rating'>
                    <p className='rating-label'>Rating</p>
                    <p className='rating-value'><GiKnifeFork color={'var(--primary-color)'} /> {chef.rating}</p>
                </div>
            </div>
        </div>
    )
}


export default ChefCard