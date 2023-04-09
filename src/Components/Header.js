import React from 'react'
import { Link } from 'react-router-dom'

function Header() {

    return (
        <>
            <div className='header-contianer container'>
                <div className='header-Logo'><h1>Logo</h1></div>
                <div className='header-menu'>
                    <ul className='navbar'>
                        <li className='navbar-item'><Link to="/">Home</Link></li>
                        <li className='navbar-item'><Link to="/about">About</Link></li>
                        <li className='navbar-item'><Link to="/shop">Shop</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header