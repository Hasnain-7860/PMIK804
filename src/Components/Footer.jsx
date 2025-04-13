import React from 'react'
import logo from '../assets/Frame 1.png'
import iconn1 from '../assets/iconn1.png'
import iconn2 from '../assets/Iconn2.png'
import iconn3 from '../assets/Iconn3.png'
import facebook from '../assets/facebook.png'
import tuiter from '../assets/tuiter.png'
import linkdin from '../assets/linkdin.png'


const Footer = () => {
  return (
    <div className='bg-green-900 '>
    <div className=' mt-[15vh] text-gray-300 flex flex-col container  pt-16 '>
        <div className=' flex flex-col text-center items-center justify-center gap-4 py-10'>
            <img src={logo} alt="" />
            <ul className='grid grid-cols-1 gap-4 lg:grid-cols-4 font-semibold '>
                <li>Home</li>
                <li>Careers</li>
                <li>About</li>
                <li>Security</li>
            </ul>
        </div>
       <div>
        <hr className=''   />
        <div className='grid grid-cols-1 text-center items-center justify-center gap-8 py-10 lg:flex font-semibold'>
            <div className='flex items-center text-center justify-center'>
            <img src={iconn1} alt="" />
            <p>hello@skillbirdge.com</p>
            </div>
            <div className='flex items-center text-center justify-center'>
                <img src={iconn2} alt="" />
                <p>+91 91813 23 2309</p>
            </div>
            <div className='flex items-center text-center justify-center'>
                <img src={iconn3} alt="" />
                <p>Somewhere in the World</p>
            </div>
        </div>
        <hr/>
        <div className='bg-black rounded-3xl py-1 px-4 items-center text-center mt-6 grid grid-cols-1 gap-4  lg:flex justify-between text-gray-500 mb-6 '>
            <div className='flex gap-3 text-center items-center justify-center'>
                <button><img src={facebook} alt="" /></button>
                <button><img src={tuiter} alt="" /></button>
                <button><img src={linkdin} alt="" /></button>
            </div>
            <div>
                <p>YourBank All Rights Reserved</p>
            </div>
            <div>
                <p>Privacy Policy | Terms of Service</p>
            </div>
        </div>
       </div>
    </div>
    </div>
  )
}

export default Footer