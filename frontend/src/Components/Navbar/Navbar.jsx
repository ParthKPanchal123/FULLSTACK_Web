import React, { useState } from 'react'
import './Navbar.css'
import search from '../../Assets/search_icon.png'
import basket from '../../Assets/basket_icon.png'

function Navbar() {
    const [menu, setMenu] = useState('home')
    return (
        <>
            <div className='navbar'>
                <h1 className='logo'>Foodie We</h1>
                <ul className='navbar-menu'>
                    <li onClick={() => setMenu('home')} className={menu==="home"? "active" : ""}>home</li>
                    <li onClick={() => setMenu('menu')} className={menu==="menu"? "active" : ""}>menu</li>
                    <li onClick={() => setMenu('about')} className={menu==="about"? "active" : ""}>about</li>
                    <li onClick={() => setMenu('contract')} className={menu==="contract"? "active" : ""}>contract</li>
                </ul>
                <div className='navbar-right'>
                    <img src={search} alt="" />
                    <div className='navbar-search-icon'>
                        <img src={basket} alt="" />
                        <div className='dot'></div>
                    </div>
                    <button>sign in</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
