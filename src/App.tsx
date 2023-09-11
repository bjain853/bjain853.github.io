import Navbar from './components/Navbar'
import About from './pages/About/index.tsx'
import Work from './pages/Work/index.tsx'
import Projects from './pages/Projects/index.tsx'
import Hero from './pages/Hero/index.tsx'
import Skills from './pages/Skills/index.tsx'
import { MyGlobalContext } from './Context.ts'
import { useState } from 'react'
import Footer from './components/Footer/index.tsx'

function App() {
  const [darkMode, setDarkMode] = useState('light')
  return (
    <MyGlobalContext.Provider value={{ darkMode, setDarkMode}}>
      <main id='home' className={`${darkMode} h-full w-full`}>
        <div className='p-5  h-full w-full sm:flex sm:items-start sm:gap-5'>
          <div className='flex flex-col sm:sticky sm:h-screen sm:top-0 sm:left-0 sm:px-6 sm:my-0 sm:flex-1'>
            <Hero />
            <Navbar />
            <Footer />
          </div>
          <div className=' sm:px-10 sm:flex-1'>
            <About />
            <Skills />
            <Work />
            <Projects />
          </div>
        </div>
      </main>
    </MyGlobalContext.Provider>
  )
}

export default App
