import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import What from './Components/what'
import Token from './Components/Token'
import Coin from './Components/Coin'
import Token2 from './Components/Token2'
import Roadmap from './Components/Roadmap'

const App = () => {
  return (
    <div className='bg-black pt-8'>
   
      <Navbar/>
      <Hero/>
      <What/>
      <Token/>
      <Coin/>
      <Token2/>
      <Roadmap/>
    </div>
  
  )
}

export default App