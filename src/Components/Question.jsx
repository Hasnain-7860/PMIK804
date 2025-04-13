import React from 'react'
import { QuestionData } from '.'

const Question = () => {
  return (
    <div className='container'>
        <div>
            <h1 className='text-white text-[38px] font-semibold '> <span className='text-red-500'> Frequently </span> Asked Questions</h1>
            <p className='text-gray-400'>Still you have any questions? Contact our Team via support@yourbank.com</p>
        </div>
        <div className='text-white grid grid-cols-1  gap-6  lg:grid-cols-2 py-[10vh]'>
          {QuestionData.map((data)=>(
            <div className='border  rounded-lg bg-black items-center ' key={data.id}>
              <div className='py-8 px-[1vw]  lg:px-[4vw] '>
                <h1 className='text-[23px] py-6'>{data.title}</h1>
                <hr/>
                <p className='text-[12px] py-6 text-gray-400 lg:text-[19px]'>{data.text}</p>
              </div>
            </div>
          ))}
        </div>
        <button></button>
    </div>
  )
}

export default Question