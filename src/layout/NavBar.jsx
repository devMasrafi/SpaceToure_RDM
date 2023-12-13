import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <nav className='navWrapper'>
        <div className="logo">
          <picture>
            <Link to="/">
              <img src="src/assets/logo.png" alt="logo" />
            </Link>
          </picture>
        </div>
        <div>
          <ul className='menu'>
            <li>
                <Link to="/">
                  <span>00</span> Home
                </Link>
            </li>
            <li>
                <Link to="/destination">
                <span>01</span> Destination
                </Link>
            </li>
            <li>
                <Link to="/crew">
                <span>02</span> Crew
                </Link>
            </li>
            <li>
                <Link to="/technology">
                <span>03</span> Technology
                </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default NavBar
