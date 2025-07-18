import React from 'react'
import { useState , useEffect } from 'react';
const Navbar = () => {
      const [showMobileMenu, setshowMobileMenu] = useState(false);
    useEffect(()=>{
        if(showMobileMenu){
            document.body.style.overflow='hidden';
        }else{
            document.body.style.overflow='auto';
        }

        return ()=>{
             document.body.style.overflow='auto';
        }
    },[showMobileMenu])

  return (
    <div className='flex w-full justify-between items-center '>
     <a href="/" className='font-semibold text-xl px-9 py-6 antialiased md:text-2xl'>Kiran</a>
     <ul className='hidden md:flex gap-x-1'>
        <a href="#Home" className='  rounded-full mr-1 bg-black text-white px-4 py-2'>home</a>
        <a href="#About" className='  rounded-full mr-1  hover:bg-gray-200 px-4 py-2'>about</a>
        <a href="#Projects" className='  rounded-full mr-1 hover:bg-gray-200 px-4 py-2'>projects</a>
     </ul>
     <button className='hidden md:block mr-4 px-4 py-1 rounded-full bg-black text-white'>contact</button>
     <img className='md:hidden w-7 pr-2 cursor-pointer' src="/hamburger.png" onClick={()=>{
            setshowMobileMenu(true);
         }} alt="" />
    </div>
  )
}

export default Navbar
