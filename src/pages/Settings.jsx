import React from 'react'
import { useState } from 'react'

import { FaCheck } from 'react-icons/fa6'
import '../styles/Settings.css'

const Settings = () => {
	const [theme, setTheme] = useState("light")
	const primaryColors = [
		"#17C64F",
		"rgb(33, 150, 243)",
		"rgb(255, 193, 7)",
		"rgb(255, 0, 86)",
		"rgb(156, 39, 176)",
	]

	const fontSizes = [
		{
			title: "Small",
			value: "12px"
		},
		{
			title: "Medium",
            value: "16px"
		},
		{
			title: "Large",
            value: "20px"
		}
	]

	const animationSpeeds = [
		{
            title: "Slow",
            value: "2s"
        },
        {
            title: "Normal",
            value: "1s"
        },
        {
            title: "Fast",
            value: "0.5s"
        }
	]

	const [primaryColor, setPrimaryColor] = useState(0)
	const [fontSize, setFontSize] = useState(1)
	const [animationSpeed, setAnimationSpeed] = useState(2)
	return (
		<div>
			<div className='section d-block'>
				<h2>Preferred theme</h2>
				<div className='options-container'>
					<div className='option light'>
						{theme === "light" && (
							<div className='check'>
								<FaCheck />
							</div>
						)}
					</div>
					<div className='option dark'>
						{theme === "dark" && (
							<div className='check'>
								<FaCheck />
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='section d-block'>
				<h2>Primary Color</h2>
				<div className='options-container'>
					{primaryColors.map((color, index) => (
						<div className='option light' style={{backgroundColor: color}}>
							{ primaryColor === index && (
								<div className='check'>
                                    <FaCheck />
                                </div>
							)}
						</div>
					))}
				</div>
			</div>
			<div className='section d-block'>
				<h2>Font Size</h2>
				<div className='options-container'>
					{fontSizes.map((size, index) => (
						<button className='btn'>
							{size.title}
							{fontSize === index && (
                                <span><FaCheck /></span>
                            )}
						</button>
					))}
				</div>
			</div>
			<div className='section d-block'>
				<h2>Animation Speed</h2>
				<div className='options-container'>
					{animationSpeeds.map((speed, index) => (
						<button className='btn'>
							{speed.title}
							{animationSpeed === index && (
                                <span><FaCheck /></span>
                            )}
						</button>
					))}
				</div>
			</div>
		</div>
	)
}

export default Settings