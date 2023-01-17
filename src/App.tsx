import { useState } from 'react'
import About from './components/About'
import ContactForm from './components/ContactForm'
import Footer from './components/Footer'
import Gallery from './components/Gallery'
import Interview from './components/Interview'
import Main from './components/Main'
import Navbar from './components/Navbar'
import ProggresBar from './components/ProggresBar'
import Testemonial from './components/Testemonial'


function App() {

  return (
    <div className="w-full overflow-hidden">
        <Navbar/>
        <Main/>
        <About/>
        <Gallery/>
        <ProggresBar/>
        <Testemonial/>
        <Interview/>
        <ContactForm/>
        <Footer/>
    </div>
  )
}

export default App
