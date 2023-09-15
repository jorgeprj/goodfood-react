import React from 'react'
import { useParams } from 'react-router-dom';
import NotFound from './NotFound';

const Chef = ( {chefs} ) => {
    const { id } = useParams();
	const chef = chefs.find((chef) => chef.id === parseInt(id, 10));

	if (!chef) {
		return(
      <NotFound/>
        );
	}

  return (
    <div>{chef.name}</div>
  )
}

export default Chef