import React from 'react'

import { FaSearch } from 'react-icons/fa'

import '../styles/PreviousSearches.css'

const Recipes = () => {
	const searches = [
		"pizza", "burger", "cookies", "juice", "asian", "pasta", "salad", "ice cream", "lasagna", "soup", "tacos", "feijoada", "sushi", "fish", "meat"
	]

	return (
		<div>
			<div className='previous-searches section'>
				<h2>Previous Searches</h2>
				<div className='previous-searches-container'>
					{searches.map((search, index) => (
						<div key={index} style={{ animationDelay: index * 0.2 + "s" }} className='search-item'>
							{search}
						</div>
					))}
				</div>
				<div className='search-box'>
					<input type="text" placeholder='Search...' />
					<button className='btn'>
						<FaSearch />
					</button>
				</div>
			</div>
		</div>
	)
}

export default Recipes