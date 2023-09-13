import React from 'react'

import '../styles/ImproveSection.css'

const ImproveSection = () => {
    const list = [
        "Learn incredible recipes",
        "Chef-curated dishes crafted ",
        "Write you own recipes",
        "Exploration of international cuisines",
        "Interactive cooking tutorials",
        "In-depth articles on food trends"
    ]
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
                <button className='btn'>Signup Now</button>
            </div>
        </div>
    )
}

export default ImproveSection