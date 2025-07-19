import React from 'react'

const ProjectCard = ({
    img_src,
    title,
    content
}) => {
  return (
    <div className=' flex flex-col max-w-[250px] h-[300px] bg-[#EEEEEF] rounded-2xl overflow-hidden shadow-md'>
        <div className='flex p-3 space-x-4 items-center'>
            <img src={img_src} className='w-[40px] h-[40px] rounded-full object-cover' alt=""/>
            <h1 className='text-dark font-semibold text-xl '>{title}</h1>
        </div>
        <div className='px-2 pb-14 flex-grow'>
            <p className='text-black max-h-[140px]'>{content}</p>
        </div>
      
      {/* <button className='absolute block bottom-2 right-2 border border-black-900 bg-white text-dark rounded shadow px-3 py-1 hover:bg-gray-400'>check demo</button> */}
    </div>
  )
}

export default ProjectCard
