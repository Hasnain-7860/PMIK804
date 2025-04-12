import React from 'react'
import logo from '../assets/Frame 1.png'


const Navbar = () => {
  return (
    <div className='bg-green-900  rounded-3xl container'>
    <div className='flex justify-between  text-center items-center py-2 px-4 '>
        <div>
            <img className='' src={logo} alt="" />
        </div>
        <div>
            <ul className=' hidden lg:flex  text-white '>
                <li className='bg-green-900 rounded-3xl  hover: px-10 py-3 hover:bg-gray-500'>Home</li>
                <li className='bg-green-900 rounded-3xl  hover: px-10 py-3 hover:bg-gray-500'>Careers</li>
                <li className='bg-green-900 rounded-3xl  hover: px-10 py-3 hover:bg-gray-500'>About</li>
                <li className='bg-green-900 rounded-3xl  hover: px-10 py-3 hover:bg-gray-500'>Security</li>
            </ul>
        </div>
        <div>
           <button className='hidden lg:block bg-red-600 px-6 py-2 font-semibold rounded-3xl text-white '>Connect Wallet</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar