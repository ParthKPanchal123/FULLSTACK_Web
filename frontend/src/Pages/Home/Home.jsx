import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDIsplay from '../../Components/FoodDisplay/FoodDIsplay'
import AppDownload from '../../Components/AppDownload/AppDownload'

function Home() {

  const [category,setCategory] = useState('All')

  return (
    <>
      {/* Operating the Home Page And Category */}
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDIsplay category={category}/>
      <AppDownload/>
    </>
  )
}

export default Home

