import React from 'react'
import logo from '../assets/Frame 1.png'


const Navbar = () => {
  return (
    <div className='bg-green-700  rounded-3xl container'>
    <div className='flex justify-between  text-center items-center py-2 px-4 '>
        <div>
            <img src={logo} alt="" />
        </div>
        <div>
            <ul className='flex gap-10 text-white '>
                <li className=' hover:border rounded bg-yellow-500'>Home</li>
                <li>Careers</li>
                <li>About</li>
                <li>Security</li>
            </ul>
        </div>
        <div>
           <button className='bg-red-600 px-6 py-2 font-semibold rounded-3xl text-white'>Connect Wallet</button>
        </div>
    </div>
    </div>
  )
}

export default Navbar