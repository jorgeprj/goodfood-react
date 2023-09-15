import React from 'react'

import { FaStar } from 'react-icons/fa'

import '../styles/StarRating.css'

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0);
    return (
        
        <div className='star-rating'>
            {stars.map((_, index) => (
                <FaStar key={index} color={index < rating ? '#FFA500' : '#DDDDDD'}/>
            ))}
            <p className='star-rating-text'>{rating} of 5</p>
        </div>
    )
}


export default StarRating