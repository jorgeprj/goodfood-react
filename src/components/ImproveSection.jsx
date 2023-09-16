import React from 'react'

import '../styles/ImproveSection.css'
import { Link } from 'react-router-dom';

const ImproveSection = () => {
    const list = [
        "Learn incredible recipes",
        "Chef-curated dishes crafted ",
        "Write you own recipes",
        "Exploration of international cuisines",
        "Interactive cooking tutorials",
        "In-depth articles on food trends"
    ]

    function login() {
        window.location.href = '/login';
    }

    return (
        <div className='section improve-section'>
            <div className='col img'>
                <img src='/img/gallery/img_6.jpg' alt='improve-section' />
            </div>
            <div className='col typography'>
                <h1 className='title'>Improve Your Culinary Skills</h1>
				{ list.map((item, index) => (
					<p className='skill-item' key={index}>{item}</p>
				))}
                <Link to="/login"><button className='btn'>Signup Now</button></Link>
            </div>
        </div>
    )
}

export default ImproveSection