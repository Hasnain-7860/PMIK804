import React from 'react'
import chart from '../assets/chart.png'

const Coin = () => {
  return (
    <div className='flex flex-col text-center items-center gap-[12vh] py-[14vh]'>
        <div>
            <h1 className='text-[45px] text-white font-semibold'>Coin <span className='text-red-500'>Tokenomics</span></h1>
        </div>
        <div>
            <img src={chart} alt="" />
        </div>
    </div>
  )
}

export default Coin