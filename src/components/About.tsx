import React from 'react'
import { motion } from 'framer-motion';
import {IoMdArrowForward } from 'react-icons/io'

const About = () => {
  return (
    <section id='About' className='w-full mt-[100px] mb-[500px] md:my-[100px]'>
        <div className='flex justify-start items-center flex-col md:flex-row w-[80%] mx-auto h-[100vh]'>
        <motion.div             
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:100}}
            transition={{duration:1}}
        >
            <div className='text-[360px] md:text-[720px] font-bold leading-[500px] font-tertiary md:-tracking-[60px] bg-about bg-cover bg-right bg-clip-text text-transparent'>
                01
            </div>
        </motion.div>
        <motion.div
            initial={{x:100,opacity:0}}
            whileInView={{x:0,opacity:100}}
            transition={{duration:1}}
        >
            <h1 className='text-[80px] font-primary'>
                My Story
            </h1>
            <div className='p-8 font-primary text-lg'>
                <p className='mb-2'>'In velit arcu posuere integer. Dolor sit amet, consectetur nun adipiscing elit. Duis porttitor massa tellus hac vel ante sit sed scelerisque praesent duis volutpat laoreet.'</p>
                <p className='mb-2'>'Nisl, sit molestie commodo congue. Etiam lectus risus in amet. Commodo molestie fames etiam aenean sed. Pellentesque et venenatis amet, tellus hac vel adipiscing sit. Placerat vitae nisl viverra faucibus tincidunt habitasse amet. Nunc, velit nunc, scelerisque imperdiet nunc.'</p>
                <button className='flex items-center font-secondary border-2 border-black rounded-lg p-3 mt-4 hover:bg-black hover:text-white transition duration-500 text-lg'>Read More <IoMdArrowForward className='text-3xl ml-2'/></button>
            </div>            
        </motion.div>
        </div>
    </section >
  )
}

export default About