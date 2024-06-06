import React from 'react'
import '../styles/NavBar.css'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div className='navBar'>
        <ul className='nav-flex'>
            <li><Link to='/'><div className='list'>Home</div></Link></li>
            <li><Link to='/login'><div className='list'>Login</div></Link></li>
            <li><Link to='/signup'><div className='list'>SignUp</div></Link></li>
            <li><Link to='/about'><div className='list'>About</div></Link></li>
        </ul>
    </div>
  )
}

export default NavBar