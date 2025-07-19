import React from 'react'

import SplitText from "./SplitText";
const Home = () => {
    const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <div className=' flex flex-col md:flex-row  md:justify-between overflow-hidden w-full ' id="Home">
         <div className='md:hidden mt-2 w-[150px] h-[150px] mx-auto'>
           <img src="/minimal_profile.png
           " alt="" />
        </div>
        <div className='flex flex-col mt-4 md:ml-[170px]  md:mt-[130px] '>
            <SplitText
               text="Hi I'm Kiran Kommoju 👋"
               className="text-2xl md:text-4xl  font-semibold text-center mx-auto"
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
          <div className='max-w-[650px] mt-10 text-center '>
             <p className='text-gray-800 text-lg lg:text-xl '>I write code, solve problems, and love building cool things on the web.</p>
              <p className='hidden md:block text-gray-800 text-lg lg:text-xl'>Full Stack Developer with a thing for simplicity. I'm constantly learning and exploring new technologies to build cool, impactful things for the web. I'm currently seeking new opportunities where I can contribute my skills and grow as a developer.</p>
             <a href="#Contact"><button className='md:hidden mr-4 px-4 py-1 rounded-full bg-black text-white mt-12'>connect with me</button></a> 
          </div>
         <div className='hidden mt-[100px]   md:flex'>
           <img src="/mouse.png" className='w-[30px] h=[30px] pr-2' alt="" />
           <p className=''>Scroll Down</p>
    
         </div>
      </div>
        <div className='hidden md:block mt-10 w-[400px] h-[400px]'>
           <img src="/minimal_profile.png
           " alt="" />
        </div>
    </div>
  )
}

export default Home
