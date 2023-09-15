import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import Sidebar from './Sidebar'

import Hamburger from 'hamburger-react'
import { FaHome, FaList, FaCog } from 'react-icons/fa';
import { FaRankingStar } from 'react-icons/fa6'
import { GiKnifeFork } from 'react-icons/gi'

import '../styles/Navbar.css'

const Navbar = () => {
	const [isOpen, setOpen] = useState(false);
	const links = [
		{
			name: 'Home',
            path: '/',
			icon: FaHome
		},
		{
			name: 'Recipes',
            path: '/recipes',
			icon: FaList
		},
		{
			name: 'Ranking',
            path: '/ranking',
            icon: FaRankingStar
		},
		{
			name: 'Settings',
            path: '/settings',
			icon: FaCog
		}
	];
	const location = useLocation();

	function closeSidebar() {
		setOpen(false);
	}

	return (
		<>
			<div className='navbar container'>
				<Link to={"/"} className='logo'>
					<GiKnifeFork />
					<div>Good<span>Food</span></div>
				</Link>
				<div className='nav-links'>
					{links.map(link => (
						<Link to={link.path} className={location.pathname === link.path ? "active" : ""} key={link.name}>{link.name}</Link>
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