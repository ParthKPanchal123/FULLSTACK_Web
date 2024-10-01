import React from 'react'
import './ExploreMenu.css'
import { menu_list } from '../Assets/assets'

function ExploreMenu({ category, setCategory }) {
  return (
    <>
      <div className='explore-menu' id='explore-menu'>
        <h1>Explore Our Menu</h1>
        <p className='explore-menu-text'>Start with a catchy headline.
          Use sensory words to describe the dish.
          Appeal to different taste receptors.
          Use adjectives to create a vivid picture.
          Tell a story about the dish.
          Write as you would speak to someone face-to-face.</p>
      </div>
      <div className='explore-menu-list'>
        {menu_list.map((item, index) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} key={index} className='explore-menu-list-item'>
              <img className={category === item.menu_name ? "active" : ""} src={item.menu_image} alt='' />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </>
  )
}

export default ExploreMenu
