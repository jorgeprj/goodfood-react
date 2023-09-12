import React from 'react'

import '../styles/HeroSection.css'
import '../styles/CustomImage.css'

import CustomImage from './CustomImage'

const HeroSection = () => {
	const images = [
		"/img/gallery/img_1.jpg",
        "/img/gallery/img_5.jpg",
		"/img/gallery/img_9.jpg",
        "/img/gallery/img_11.jpg",
		"/img/gallery/img_7.jpg",
        "/img/gallery/img_13.jpg",
        "/img/gallery/img_17.jpg",
        "/img/gallery/img_10.jpg",
		"/img/gallery/img_19.jpg",
	]
	return (
		<div className='section hero'>
			<div className='col typography'>
				<h1 className='title'>What Are We About</h1>
				<p className='info'>Welcome to GoodFood - your one-stop culinary hub! Dive into a world of delectable recipes crafted by our expert chefs, uncover kitchen tips, explore captivating food articles, and more. Whether you're a seasoned cook or a novice, GoodFood is your free gateway to culinary inspiration. So start exploring now.</p>
				<button className='btn'>Explore Now</button>
			</div>
			<div className='col gallery'>
				{ images.map((src, index) => (
					<CustomImage key={index} imgSrc={src} pt={"95%"} />
				))}
			</div>
		</div>
	)
}

export default HeroSection