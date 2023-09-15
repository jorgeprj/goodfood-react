import React from 'react'
import { useParams } from 'react-router-dom';

const Chef = ( {chefs} ) => {
    const { id } = useParams();
	const chef = chefs.find((chef) => chef.id === parseInt(id, 10));

	if (!chef) {
		return(
            <div>
                Chef not found!
            </div>
        );
	}

  return (
    <div>{chef.name}</div>
  )
}

export default Chef