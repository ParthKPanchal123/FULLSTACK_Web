import React, { useState } from 'react'
import './Home.css'
import Header from '../../Components/Header/Header'
import ExploreMenu from '../../ExploreMenu/ExploreMenu'
import FoodDIsplay from '../../Components/FoodDisplay/FoodDIsplay'

function Home() {

  const [category,setCategory] = useState('All')

  return (
    <>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDIsplay category={category}/>
    </>
  )
}

export default Home

