import React from 'react'

import SplitText from "./SplitText";
const Home = () => {
    const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className=' min-h-screen flex md:flex-row  justify-between overflow-hidden' id="Home">
        <div className=' ml-[170px] mt-[130px] '>
            <SplitText
  text="Hi I'm Kiran Kommoju 👋"
  className="text-4xl font-semibold text-center"
  delay={50}
  duration={0.2}
  ease="power3.out"
  splitType="chars"
  from={{ opacity: 0, y: 40 }}
  to={{ opacity: 1, y: 0 }}
  threshold={0.1}
  rootMargin="-100px"
  textAlign="center"
  onLetterAnimationComplete={handleAnimationComplete}
/>
 <div className='max-w-[650px] mt-10  '>
    <p className='text-gray-800 text-lg '>I write code, solve problems, and love building cool things on the web.</p>
    <p className='text-gray-800 text-lg'>Full Stack Developer with a thing for simplicity</p>
 </div>
 <div className='mt-[170px]  flex'>
    <img src="/mouse.png" className='w-[30px] h=[30px] pr-2' alt="" />
    <p className=''>Scroll Down</p>
    
 </div>
        </div>
        <div className='mt-10 w-[400px] h-[400px]'>
           <img src="/minimal_profile.png
           " alt="" />
        </div>
    </div>
  )
}

export default Home
