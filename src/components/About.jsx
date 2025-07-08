import React from 'react'

const About = () => {
  return (
    <div className='w-full min-h-screen flex flex-col justify-center items-center ' id='About' >
        <div className='max-w-[600px]'>
            <h1 className='text-center text-3xl font-semibold  pb-5'>about me</h1>
            <p className='text-gray-600'>I’m a full stack developer who enjoys building clean, functional web apps.
I love solving problems and bringing ideas to life through code.
Currently exploring AI .
When I’m not coding, I’m probably sketching ideas or reading tech blogs.</p>
        </div>
        
        <div className='flex mt-10 justify-center w-full'>
            <img src="/about_img2.PNG" className='w-[400px] h-[400px] ml-[200px] ml-[20]' alt="" />
            <div className=' ml-[300px] flex flex-col w-full ml-80'>
                <h1 className='text-2xl text-left font-semibold '>skills</h1>
                <h1 className='font-doto text-xl font-semibold mt-3'>Languages</h1>
                <div className='flex flex-row space-x-2 mt-5'>  

                
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 ' />
                
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 rounded-xl' />
                 <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"  className='w-10 h-10 transition-transform duration-300 hover:scale-105 ' />
                 
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/c/c-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 ' />
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 ' />
          
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 ' />
          
          
          
                </div>
             <h1 className='font-doto text-xl font-semibold mt-4'>FrameWorks</h1>
              <div className='flex flex-row space-x-2 mt-5'>  
                             
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" className='w-9 h-9 transition-transform duration-300 hover:scale-105 rounded-xl'/>
            
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 rounded-xl'/>
                 
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 rounded-xl' />
                  
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 rounded-xl bg-gray-200'/>
            
          
          
          
                </div>

               <h1 className='font-doto text-xl font-semibold mt-3'>Tools</h1>
                <div className='flex flex-row space-x-2 mt-5'>  
                             

            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 ' />
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oauth/oauth-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 '/>
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 '/>
          
          
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 '/>
            
            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" className='w-10 h-10 transition-transform duration-300 hover:scale-105 '/>
          
          
          
                </div>



            </div>
        </div>
        
       
    </div>
  )
}

export default About
