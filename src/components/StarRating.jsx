import React from 'react'

import { FaStar } from 'react-icons/fa'

const StarRating = ({ rating }) => {
    const stars = Array(5).fill(0);
    return (
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: "1em" }}>
            {stars.map((_, index) => (
                <FaStar key={index} color={index < rating ? '#FFA500' : '#DDDDDD'}/>
            ))}
            <p style={{marginLeft: "1em"}}>{rating} of 5</p>
        </div>
    )
}


export default StarRating