import React from 'react'
import { TokenData } from '.'

const Token = () => {
  return (
    <div className='text-white py-[10vh] '>
        <div className='text-center '>
           <h1 className='text-[45px] font-semibold'>Token <span className='text-red-500'> Features </span></h1> 
           <div className='grid grid-col-1 text-center items-center lg:grid-cols-3   md:grid-cols-2  '>
          {TokenData.map((data)=>(
            <div className=' items-center flex flex-col w-full container gap-2 py-[50px] lg:w-[20vw] md:w-[28vw] ' key={data.id} >
              <img className=' rounded-[50%] shadow-xl' src={data.img} alt="" />
              <h1 className='text-[23px]'>{data.title}</h1>
              <p className='text-gray-400'>{data.text}</p>
            </div>

          ))}
            
        </div>
        </div>
       
    </div>
  )
}

export default Token