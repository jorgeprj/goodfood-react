import { useState } from 'react'

import Sidebar from './Sidebar'

import Hamburger from 'hamburger-react'
import { FaHome, FaList, FaCog } from 'react-icons/fa';

import '../styles/Navbar.css'

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const links = [
		{
			name: 'Home',
            link: '/',
			icon: FaHome
		},
		{
			name: 'Recipes',
            link: '/recipes',
			icon: FaList
		},
		{
			name: 'Settings',
            link: '/settings',
			icon: FaCog
		}
	];

	function closeSidebar() {
		setOpen(false);
	}

	return (
		<>
			<div className='navbar container'>
				<a href="#!" className='logo'>
					<img src="./public/icon.png" alt="logo" />
					<div>Good<span>Food</span></div>
				</a>
				<div className='nav-links'>
					{links.map(link => (
						<a href="#!" key={link.name}>{link.name}</a>
					))}
				</div>
				<div className='sidebar-btn'>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
			{isOpen && <Sidebar close={closeSidebar} links={links} />}
		</>
	)
}

export default Navbar