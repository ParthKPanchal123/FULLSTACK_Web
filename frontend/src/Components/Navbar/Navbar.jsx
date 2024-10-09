import React, { useState } from 'react'
import './Navbar.css'
import search from '../../Assets/search_icon.png'
import basket from '../../Assets/basket_icon.png'
import { Link } from 'react-router-dom'

function Navbar({setShowLogin}) {
    const [menu, setMenu] = useState('home')
    return (
        <>
            <div className='navbar'>
                <Link to='/'><h1 className='logo'>Foodie We</h1></Link>
                <ul className='navbar-menu'>
                    <Link to='/'><li onClick={() => setMenu('home')} className={menu==="home"? "active" : ""}>home</li></Link>
                    <li href='#explore-menu' onClick={() => setMenu('menu')} className={menu==="menu"? "active" : ""}>menu</li>
                    <li href='#app-download' onClick={() => setMenu('about')} className={menu==="about"? "active" : ""}>about</li>
                    <li href='#footer' onClick={() => setMenu('contract')} className={menu==="contract"? "active" : ""}>contract</li>
                </ul>
                <div className='navbar-right'>
                    <img src={search} alt="" />
                    <div className='navbar-search-icon'>
                        <Link to='/cart'><img src={basket} alt="" /></Link>
                        <div className='dot'>
                            {/* <h1>Hello</h1> */}
                        </div>
                    </div>
                    <button onClick={() => setShowLogin(true)}>sign in</button>
                </div>
            </div>
        </>
    )
}

export default Navbar
