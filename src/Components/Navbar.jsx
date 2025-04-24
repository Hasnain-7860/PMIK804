import React, {  useState } from 'react'
import logo from '../assets/Frame 1.png'
import { RxHamburgerMenu } from "react-icons/rx";
import Button from './Button';
import ConnectWallet from './ConnectWallet';





const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // menu open or not

 
  return (
    <div>
    <div className='bg-green-900  rounded-3xl container'>
    <div className='flex justify-between  text-center items-center lg:py-2 lg:px-4 '>
        <div>
            <img className='' src={logo} alt="" />
        </div>
        <div >
            <ul className=' hidden lg:flex  text-white '>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>Home</li></button>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>Careers</li></button>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>About</li></button>
                <button><li className='bg-green-900 rounded-3xl  hover: px-6 py-3 hover:bg-gray-500'>Security</li></button>
            </ul>
        </div>
        <div className='flex gap-10'>
        <ConnectWallet/>
          {/* <Button  children="Connect Wallet"/> */}
           <RxHamburgerMenu onClick={()=>setIsOpen(!isOpen)} className='lg:hidden text-[8vw]' />
        </div>
        
        
    </div>
    
    </div>
    {isOpen && (
        <div className="lg:hidden bg-green-800 text-white flex flex-col items-center px-4 py-4  gap-10 ">
          <a href="#" className="hover:underline">Home</a>
          <a href="#" className="hover:underline">About</a>
          <a href="#" className="hover:underline">Contact</a>
        </div>
      )}
    </div>
    
    
  ) 
}
export default Navbar


