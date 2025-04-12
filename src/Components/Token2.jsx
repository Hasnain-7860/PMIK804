import React from 'react'
import { Token2Data } from '.'

const Token2 = () => {
  return (
    <div className='flex flex-col items-center py-6 '>
        <div>
            <h1 className='text-white text-[45px] py-[10vh] font-semibold '>Token <span className='text-red-500'> Utility </span></h1>
        </div>
        <div className='text-white grid grid-cols-2 container gap-5'>
            {Token2Data.map((data)=>(
                <div className='  px-[7vw] py-8  bg-green-900 shadow-xl rounded-md    ' key={data.id}>
                    <div className='flex justify-between py-4'>
                        <h1 className='font-semibold'>{data.title}</h1>
                        <img src={data.img} alt="" />
                    </div>
                    <div>
                        <p className='text-gray-400'>{data.text}</p>
                    </div>

                </div>
            ))}
        </div>
    </div>
  )
}

export default Token2