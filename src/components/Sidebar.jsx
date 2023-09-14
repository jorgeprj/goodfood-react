import { Link, useLocation } from 'react-router-dom'

import '../styles/Sidebar.css'

const Sidebar = ( {links, close} ) => {
  const location = useLocation()
  return (
    <div className='sidebar' onClick={close}>
        { links.map(link => (
            <Link to={link.path} className={location.pathname === link.path ? "sidebar-link active" : "sidebar-link"} key={link.name}>
                <link.icon />
                {link.name}
            </Link>
        ))}
    </div>
  )
}

export default Sidebar