import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
const App = () => {
  return (
    <>
    <Navbar />

    <main className='w-full overflow-hidden flex flex-col gap-y-16 '>
        
        <Home />
        <About/>
        <Projects/>
        <Contact/>
    </main>
  </>
  

  )
}

export default App
