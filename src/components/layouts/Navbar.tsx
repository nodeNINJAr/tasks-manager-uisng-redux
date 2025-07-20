import React from 'react'
import { ModeToggle } from '../mode-toggle'
import { NavLink } from 'react-router'

const Navbar = () => {

const links = <>
     <li>
        <NavLink to={'/'}>Home</NavLink>
     </li>
     <li>
        <NavLink to={'/tasks'}>Tasks</NavLink>
     </li>
     <li>
        <NavLink to={'/users'}>Users</NavLink>
     </li>
     <li>
        <NavLink to={'/contact'}>Contact</NavLink>
     </li>
</>



  return (
    <div className='flex justify-between gap-8 items-center px-8 py-4 container'>
        <div>logo</div>
        <nav>
             <ul className='flex justify-center gap-2.5 items-center'>{links}</ul>  
        </nav>
          {/*  */}
        <div>
            <ModeToggle/>
        </div>
    </div>
  )
}

export default Navbar