import React from 'react'

const Navbar = () => {
  return (
    <div className='flex w-full justify-between items-center '>
     <a href="/" className='font-semibold text-xl px-9 py-6 antialiased md:text-2xl'>Kiran</a>
     <ul className='gap-x-1'>
        <a href="#Home" className='  rounded-full mr-1 bg-black text-white px-4 py-2'>home</a>
        <a href="#About" className='  rounded-full mr-1  hover:bg-gray-200 px-4 py-2'>about</a>
        <a href="#Projects" className='  rounded-full mr-1 hover:bg-gray-200 px-4 py-2'>projects</a>
     </ul>
     <button className='rounded-full mr-4 px-4 py-1 bg-black text-white'>contact</button>
    </div>
  )
}

export default Navbar
