import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import Token from './Components/Token'
import Coin from './Components/Coin'
import Token2 from './Components/Token2'
import Roadmap from './Components/Roadmap'
import Today from './Components/Today'
import New from './Components/New'
import Footer from './Components/Footer'
import Question from './Components/Question'

const App = () => {
  return (
    <div className='bg-black pt-8'>
   
      <Navbar/>
      <Hero/>
      <New/>
      <Token/>
      <Coin/>
      <Token2/>
      <Roadmap/>
      <Question/>
      <Today/>
      <Footer/>
    </div>
  
  )
}

export default App