import React from 'react'
import { useState, useEffect } from 'react'

import { FaCheck } from 'react-icons/fa6'
import '../styles/Settings.css'

const Settings = () => {
	const [settings, setSettings] = useState({
		"--background-color": "#fff",
		"--background-light": "#fff",
		"--primary-color": "#17C64F",
		"--shadow-color": "rgba(0,0,0,0.2)",
		"--text-color": "rgba(0,0,0,0.9)",
		"--text-light": "#575757",
		"--font-size": "16px",
		"animation-speed": "1",
	});
    useEffect(() => {
        const root = document.documentElement
        for(let key in settings){
            root.style.setProperty(key, settings[key])
        }
    }, [settings])

	const [theme, setTheme] = useState("light");

	const themes = [
		{
			"--background-color": "#fff",
			"--background-light": "#fff",
			"--shadow-color": "rgba(0,0,0,0.2)",
			"--text-color": "rgba(0,0,0,0.9)",
			"--text-light": "#575757",
		},
		{
			"--background-color": "rgba(29, 29, 29)",
			"--background-light": "rgb(77, 77, 77)",
			"--shadow-color": "rgba(0,0,0,0.2)",
			"--text-color": "#fff",
			"--text-light": "#eceaea",
		}
	]

    function changeTheme(i){
        const _theme = {...themes[i]}
        setTheme(i === 0 ? "light" : "dark")
        let _settings = {...settings}
        for(let key in _theme){
            _settings[key] = _theme[key]
        }
        setSettings(_settings)
    }

	function changeColor(i){
        const _color = primaryColors[i]
        let _settings = {...settings}
        _settings["--primary-color"] = _color
        setPrimaryColor(i)
        setSettings(_settings) 
    }

    function changeFontSize(i){
        const _size = fontSizes[i]
        let _settings = {...settings}
        _settings["--font-size"] = _size.value
        setFontSize(i)
        setSettings(_settings)
    }

    function changeAnimationSpeed(i){
        let _speed = animationSpeeds[i]
        let _settings = {...settings}
        _settings["--animation-speed"] = _speed.value
        setAnimationSpeed(i)
        setSettings(_settings)
    }

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
	const [animationSpeed, setAnimationSpeed] = useState(1)
	return (
		<div>
			<div className='section d-block'>
				<h2 style={{color: "var(--text-color)"}}>Primary theme</h2>
				<div className='options-container'>
					<div className='option light' onClick={() => changeTheme(0)}>
						{theme === "light" && (
							<div className='check'>
								<FaCheck />
							</div>
						)}
					</div>
					<div className='option dark' onClick={() => changeTheme(1)}>
						{theme === "dark" && (
							<div className='check'>
								<FaCheck />
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='section d-block'>
				<h2 style={{color: "var(--text-color)"}}>Preferred Color</h2>
				<div className='options-container'>
					{primaryColors.map((color, index) => (
						<div className='option light' style={{backgroundColor: color}} onClick={() => changeColor(index)}>
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
				<h2 style={{color: "var(--text-color)"}}>Font Size</h2>
				<div className='options-container'>
					{fontSizes.map((size, index) => (
						<button key={index} className='btn' onClick={() => changeFontSize(index)}>
							{size.title}
							{fontSize === index && (
                                <span><FaCheck /></span>
                            )}
						</button>
					))}
				</div>
			</div>
			<div className='section d-block'>
				<h2 style={{color: "var(--text-color)"}}>Animation Speed</h2>
				<div className='options-container'>
					{animationSpeeds.map((speed, index) => (
						<button key={index} className="btn" onClick={() => changeAnimationSpeed(index)}>
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