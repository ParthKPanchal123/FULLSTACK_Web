import React from 'react'
import './AppDownload.css'
import { assets } from '../../Assets/assets'


function AppDownload() {
  return (
    <>
      <div className='app-download' id='app-download'>
        <p>For Android and ios better Experience <br/> Foodie We</p>
        <div className='app-download-platforms'>
            <img src={assets.app_store} alt="" />
            <img src={assets.play_store} alt="" />
        </div>
      </div>
    </>
  )
}

export default AppDownload
