import React from 'react'
import { Link, NavLink, withRouter } from 'react-router-dom'

const NavBar = (props) => {
    
    // setTimeout(() => {
    //     props.history.push('/');
    // }, 5000);

    return (
        <nav className="nav-wrapper blue darken-4">
            <div className="container">
                <Link className="brand-logo" to="/"> NavBar Logo </Link>
                <ul className="right">
                    <li><NavLink exact to="/">Home </NavLink></li>
                    <li><NavLink to="/aboutUs">About Us </NavLink></li>
                    <li><NavLink to="/contactUs">Contact Us </NavLink></li>
                    <li><NavLink to="/blogs">Blogs</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default  withRouter(NavBar)