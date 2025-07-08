import React from 'react'
import ProjectCard from './ProjectCard'
import project1_logo  from '../project_logo/project1_logo.png'
import project2_logo from '../project_logo/project2_logo.png'
const Projects = () => {
  return (
    <div className='flex flex-col min-h-screen '>
        <h1 className='text-center text-3xl font-semibold'>projects</h1>
        <h1 className='text-left font-doto font-semibold ml-20 mt-20 text-2xl'>some of my recent work</h1>

        <div className='flex space-x-2 mt-10 ml-20'>
            <ProjectCard img_src={project1_logo} title="fitness tracker" 
            content="A full-stack web app to log workouts, track progress, and monitor fitness goals.
              Built with Node.js, Express, SQL, and Tailwind CSS.
              Users can record exercise type, sets, reps, and view progress over time.
              Focused on simplicity, responsiveness, and data-driven insights." />
            <ProjectCard img_src={project2_logo} title="pcod detection" 
            content="A deep learning model designed to detect Polycystic Ovary Disease (PCOD) from medical data.
             Trained using Python, TensorFlow, and Pandas on a real-world dataset.
             Focuses on early prediction to support healthcare decisions using machine learning.
             Includes data preprocessing, feature engineering, model training, and evaluation." 
            />
            <ProjectCard title="project3" content="this is my project 3" />
        </div>
    </div>
  )
}

export default Projects
