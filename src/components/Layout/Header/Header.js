import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = (props) => {
    return <header>
        <nav className="blue darken-2">
            <div className="nav-wrapper">
                <a href="#" class="brand-logo">Logo</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><NavLink to="/posts">Posts </NavLink></li>
                    <li><NavLink to="/"> </NavLink></li>
                    <li><NavLink to="/about">About </NavLink></li>
                </ul>
            </div>
        </nav>
    </header >

}

export default Header