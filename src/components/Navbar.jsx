import { useState } from 'react'

import { Link, useLocation } from 'react-router-dom'

import Sidebar from './Sidebar'

import Hamburger from 'hamburger-react'
import { FaHome, FaList, FaCog } from 'react-icons/fa';
import { FaRankingStar } from 'react-icons/fa6'
import { GiKnifeFork } from 'react-icons/gi'
import { LuLogIn } from 'react-icons/lu'

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

	const linksSidebar = [
		{
			name: 'Login',
            path: '/login',
			icon: LuLogIn
		},
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

	function login() {
        window.location.href = '/login';
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
					<button className='nav-link-login' onClick={login}><LuLogIn/></button>
				</div>
				<div className='sidebar-btn'>
					<Hamburger toggled={isOpen} toggle={setOpen} />
				</div>
			</div>
			{isOpen && <Sidebar close={closeSidebar} links={linksSidebar} />}
		</>
	)
}

export default Navbar