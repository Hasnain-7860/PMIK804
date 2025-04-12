import React from "react";
import container from '../assets/Container.png'
import Subtract from '../assets/Subtract.png'
import cion from '../assets/cion2.png'
import Group from '../assets/Group 1.png'

const Hero = () => {
  return (
    <div>

    <div className="text-white grid grid-cols-1 lg:grid-cols-2 pt-[150px] container">
      <div className="w-[60%] flex flex-col gap-6 " >
        <div className="flex items-center text-center gap-3">
          <img src={Subtract} alt="" />
          <p>No LLC Required, No Credit Check.</p>
        </div>
        <div>
          <h1 className="text-[40px]">
            Welcome to <span className="text-red-500"> PMIK804</span>{" "}
          </h1>
          <p>
            PMIK804 is a meme-based decentralized cryptocurrency built on the
            Binance Smart Chain (BEP-20). It represents a symbol of support for
            Pakistan’s former Prime Minister, Imran Khan, and is powered by a
            community that stands for justice, freedom, and transparency.
          </p>
        </div>
        <div>
           <button className='bg-red-600 px-6 py-2 font-semibold rounded-3xl text-white'>Buy PMIK804</button>
        </div>
      </div>
      <div className="">
        <img className="relative" src={cion} alt="" />
        <img className="absolute top-40 left-[63%]" src={container} alt="" />
        </div> 

    </div>
    <img className="w-full py-4" src={Group} alt="" />
    </div>
  );
};

export default Hero;
