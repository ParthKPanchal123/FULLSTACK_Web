import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <>
      <div className='footer' id='footer'>
        <div className='footer-content'>
            <div className='footer-content-left'>
                <h1>Foodie We</h1>
                <p>Food is the fuel that keeps us running throughout the day, and it also supports the body’s metabolic process and ensures we remain healthy. Children need to understand the importance of food to build healthy eating habits in the long term.</p>
                <div className='footer-social-icons'>
                    {/* <img src={assets.facebook} alt="facebook" />
                    <img src={assets.twitter} alt="twitter" />
                    <img src={assets.instagram} alt="instagram" /> */}
                </div>
            </div>
            <div className='footer-content-center'>
                <h2>Comp</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
           </div>
            <div className='footer-content-right'>
                <h2>Get In Touch</h2>
                <ul>
                    <li>+91 123456789</li>
                    <li>parth@gmail.com</li>
                </ul>
            </div>
        </div>
        <hr/>
        <p className='footer-copyright'>© 2024 Copyright: Foodie We</p>
      </div>
    </>
  )
}

export default Footer
