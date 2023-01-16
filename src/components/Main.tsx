import React from 'react'
import mainText from '../img/hero/outline-text.svg'
import {IoMdArrowForward } from 'react-icons/io'
import { motion } from 'framer-motion';
const Main = () => {
  return (
    <section id='Home' className='w-full h-[100vh] mt-[80px] bg-hero relative bg-cover bg-center'>
        <img src={mainText} className='absolute w-full bottom-0'/>
        <motion.div 
            className='w-[80%] h-full mx-auto flex md:justify-center md:pl-[100px] items-center'
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:100}}
            transition={{duration:1}}
        >
            <div className='text-white font-primary'>
                <h1 className='text-6xl'>I'm Void Sir.</h1>
                <p className='text-xl'>'Tattoos have their own unique power and magic.<br className='my-4'/> They not only beautify the body but also the psyche.'</p>
                <button className='flex items-center font-secondary border-2 border-white rounded-lg p-3 mt-4 hover:bg-white hover:text-black transition duration-500 text-lg'>Read More <IoMdArrowForward className='text-3xl ml-2'/></button>
            </div>
        </motion.div>

    </section>
  )
}

export default Main