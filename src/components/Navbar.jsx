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
    <div className='relative flex w-full justify-between items-center  '>
     <a href="/" className='font-semibold text-xl px-3 md:px-9 py-6 antialiased md:text-2xl'>Kiran</a>
     <ul className='hidden md:flex gap-x-1'>
        <a href="#Home" className='  rounded-full mr-1 bg-black text-white px-4 py-2'>home</a>
        <a href="#About" className='  rounded-full mr-1  hover:bg-gray-200 px-4 py-2'>about</a>
        <a href="#Projects" className='  rounded-full mr-1 hover:bg-gray-200 px-4 py-2'>projects</a>
     </ul>
    <a href="#Contact">
       <button className='hidden md:block mr-4 px-4 py-1 rounded-full bg-black text-white'>contact</button>
    </a>
     <img className='md:hidden absolute w-7 right-0 mr-2   cursor-pointer' src="/hamburger.png" onClick={()=>{
            setshowMobileMenu(true);
         }} alt="" />


         <div  className={`md:hidden ${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className='flex justify-end p-6 cursor-pointer'>
            <img className='w-6' src="/close.png" onClick={()=>{
                setshowMobileMenu(false);
            }} alt="" />
        </div>
        
        <ul  className="flex flex-col items-center gap-2 mt-5 px-5 font-medium text-lg [&>*]:m-0 [&>*]:p-0">
            <a  onClick={()=>{
                setshowMobileMenu(false);
            }}  href="#Home" className='px-2 py-4 rounded-full inline-block'>Home</a>
            <a  onClick={()=>{
                setshowMobileMenu(false);
            }}  href="#About" className='px-2 py-4 rounded-full inline-block'>About</a>
            <a  onClick={()=>{
                setshowMobileMenu(false);
            }}  href="#Projects" className='px-2 py-4 rounded-full inline-block'>Projects</a>
           </ul>
      </div>
    </div>

    
  )
}

export default Navbar
