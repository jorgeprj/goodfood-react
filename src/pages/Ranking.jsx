import React, { useState } from 'react'
import ChefCard from '../components/ChefCard'

import '../styles/Ranking.css'

const Ranking = ({ chefs }) => {
	const [sort, setSort] = useState("Rating");

	const sortByRating = (a, b) => {
		if (sort === "Rating") {
			return b.rating - a.rating;
		}
		return 0;
	};


	const sortByWorldRanking = (a, b) => {
		if (sort === "World Ranking") {
			const rankingA = parseInt(a.ranking, 10);
			const rankingB = parseInt(b.ranking, 10);
			return rankingA - rankingB;
		}
		return 0;
	};


	const getSortFunction = () => {
		if (sort === "Rating") {
			return sortByRating;
		} else if (sort === "World Ranking") {
			return sortByWorldRanking;
		}
		return () => 0;
	};

	const sortedChefs = [...chefs].sort(getSortFunction());

	return (
		<div>
			<h1>Ranking</h1>
			<p className='ranking-desc'>
				Welcome to "GoodFood Raking" the premier chef rating website that stands out for meticulously assessing five essential criteria: culinary creativity, excellence in execution and technique, the use of quality ingredients, customer service quality, and a commitment to sustainability. Our mission is to provide you with detailed and reliable information so that you can make informed culinary choices, discovering the best culinary talents and exceptional dining experiences around the world. Explore "GoodFood" and immerse yourself in a world of unique flavors and exceptional restaurants.
			</p>
			<div className='ranking-filter'>
				<h2>Order by</h2>
				<button
					className={`button ${sort === "Rating" ? "active" : ""}`}
					onClick={() => setSort("Rating")}
				>
					GF Rating
				</button>
				<button
					className={`button ${sort === "World Ranking" ? "active" : ""}`}
					onClick={() => setSort("World Ranking")}
				>
					World Ranking
				</button>

			</div>

			{sortedChefs.map(chef =>
				<div className='ranking-card'>
					<ChefCard key={chef.id} chef={chef} />
				</div>
			)}
		</div>
	)
}

export default Ranking