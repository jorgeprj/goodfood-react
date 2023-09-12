import { useState } from 'react'

import './Sidebar.css'

const Sidebar = ( {links, close} ) => {
  return (
    <div className='sidebar' onClick={close}>
        { links.map(link => (
            <a className='sidebar-link' href="#!" key={link.name}>
                <link.icon />
                {link.name}
            </a>
        ))}
    </div>
  )
}

export default Sidebar