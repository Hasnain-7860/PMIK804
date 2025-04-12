import React from 'react'
import Frame43 from '../assets/Frame43.png'
const Roadmap = () => {
  return (
    <div className='container text-white flex flex-col justify-center gap-10 py-[13vh] '>
        <div className='flex flex-col gap-20'>
            <h1 className='text-[45px] font-semibold  text-center items-center justify-center  '>Token <span className='text-red-500'> Roadmap </span></h1>
            <img className='w-full' src={Frame43} alt="" />
        </div>
        <div className='grid grid-cols-1 lg:flex gap-[8vw]'>
          <div className='flex flex-col w-[17vw] gap-2'>
            <h1 className='text-red-500 text-[20px]' >2023 Q1</h1>
            <p>Founding the company and forming the
            team.</p>
            <p>Successful launch of Coingarage platform.</p>
            <p>FIAT/Crypto payment gateways.</p>
            <p>Creation of GARA.</p>
            <h1  className='text-red-500 text-[20px]'>2023 Q2</h1>
            <p>Launch of mobile applications.</p>
            <h1  className='text-red-500 text-[20px]'>2023 Q4</h1>
            <p>Listing of more than 100 coins on
            Coingarage exchange.</p>
          </div>
          <div className='flex flex-col w-[17vw] gap-2'>
            <h1 className='text-red-500 text-[20px]' >2024 Q1</h1>
            <p>Launch of automatic trading bot on
            EZZY trader.</p>
            <h1  className='text-red-500 text-[20px]'>2024 Q2</h1>
            <p>Refferal program</p>
            <h1  className='text-red-500 text-[20px]'>2024 Q3</h1>
            <p>Stake GARA Program with annual
            returns up to 35%.</p>
            <p>Launch of trading platform v2.0.</p>
            <p>Launch of Coingarage blog.</p>
            <h1 className='text-red-500 text-[20px]'>2024 Q4</h1>
            <p>Start of the first round of GARA Presale.</p>
            <p>Launch of Bitcoin saving plan.</p>
            <p>Listing on Coinpaprika.</p>
            <p>Launch of knowledge base.</p>
          </div>
          <div className='flex flex-col w-[17vw] gap-2'>
            <h1 className='text-red-500 text-[20px]' >2025 Q1</h1>
            <p>Listing of GARA for trading on the
            Coingarage exchange..</p>
            <p>Listing on coinmarketcap.</p>
           
            <h1  className='text-red-500 text-[20px]'>2025 Q2</h1>
            <p>Listing GARA on top 50 exchanges</p>
            <p>Applying GARA fees and burning GARA.</p>
            <h1  className='text-red-500 text-[20px]'>2025 Q3</h1>
            <p>Application of GARA as Fuel for trading
            bots.</p>
            <p>GARA Airdrop and GARA listing on other
            exchanges.</p>
            <p>Applying GARA fees.</p>
            <p>Burning 11% supply of GARA.</p>
            <h1 className='text-red-500 text-[20px]'>2025 Q4</h1>
            <p>Launch of crypto academy on Coingarage
            platform.</p>
          </div>

        </div>


    </div>
  )
}

export default Roadmap