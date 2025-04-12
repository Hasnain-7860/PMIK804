import React from 'react'

const Today = () => {
  return (
    <div className='container bg-green-900 rounded-xl shadow-2xl border-green-700'>
        <div className='grid grid-cols-1 lg:flex justify-between  px-[5vw] py-[7vh] items-center'>
            <div className='text-white w-full lg:w-[47vw] '>
                <h1 className='text-[35px] font-semibold '>Start your financial journey with <span className='text-red-600'> PMIK804 today!</span></h1>
                <p className='text-gray-400'>Lorem ipsum dolor sit amet consectetur. Blandit odio semper risus pellentesque elit. Pellentesque eget ut imperdiet nulla penatibus. Nascetur viverra arcu sed amet cursus purus.</p>
            </div>
            <div>
                <button className='bg-red-600 px-6 py-2 font-semibold rounded-3xl text-white shadow-lg'>Connect Walle</button>
            </div>
        </div>
    </div>
  )
}

export default Today