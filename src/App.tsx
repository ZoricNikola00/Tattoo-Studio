import { useState } from 'react'
import About from './components/About'
import Gallery from './components/Gallery'
import Main from './components/Main'
import Navbar from './components/Navbar'


function App() {

  return (
    <div className="w-full overflow-hidden">
        <Navbar/>
        <Main/>
        <About/>
        <Gallery/>
    </div>
  )
}

export default App
