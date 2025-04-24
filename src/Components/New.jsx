import React from 'react'
import img1 from '../assets/img1.png'
import Button from './Button'

const New = () => {
  return (
   
    <div className='text-white  grid grid-cols-1 lg:grid-cols-2  items-center  '>
    <div>
        <img src={img1} alt="" />
    </div>
    <div className='px-10 w-full  lg:w-[75%] lg:pl-[10%]'>
    <div className=' flex flex-col gap-6  '>
        <h1 className='text-[35px] font-bold'>What is PMIK804?</h1>
        <p>PMIK804 is a meme-based decentralized cryptocurrency built on the Binance Smart Chain (BEP-20). It represents a symbol of support for Pakistan’s former Prime Minister, Imran Khan, and is powered by a community that stands for justice, freedom, and transparency.</p>
        <p>This token is not just for fun — it is designed with a real-world purpose. In future phases, it will also be used for charitable donations and community development, making it a meaningful digital asset.</p>
       
    </div>
   
    <Button children="Buy PMIK804"/>
   
    </div>
    </div>
  )
}

export default New