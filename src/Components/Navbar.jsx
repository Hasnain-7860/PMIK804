import React from 'react'
import logo from '../assets/Frame 1.png'
import { RxHamburgerMenu } from "react-icons/rx";



const Navbar = () => {
  return (
    <div className='bg-green-900  rounded-3xl container'>
    <div className='flex justify-between  text-center items-center lg:py-2 lg:px-4 '>
        <div>
            <img className='' src={logo} alt="" />
        </div>
        <div>
            <ul className=' hidden lg:flex  text-white '>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>Home</li></button>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>Careers</li></button>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>About</li></button>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>Security</li></button>
            </ul>
        </div>
        <div>
           <button className='hidden lg:block bg-red-600 px-6 py-2 font-semibold rounded-3xl text-white '>Connect Wallet</button>
           <RxHamburgerMenu className='lg:hidden text-[8vw]' />
        </div>
        
    </div>
    </div>
  )
}

export default Navbar