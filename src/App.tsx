import { useState } from 'react'
import About from './components/About'
import Gallery from './components/Gallery'
import Main from './components/Main'
import Navbar from './components/Navbar'
import ProggresBar from './components/ProggresBar'


function App() {

  return (
    <div className="w-full overflow-hidden">
        <Navbar/>
        <Main/>
        <About/>
        <Gallery/>
        <ProggresBar/>
    </div>
  )
}

export default App
