import React, { useState } from 'react'
import { motion } from 'framer-motion';
import { FaRegPlayCircle, FaTimes } from 'react-icons/fa';
import YouTube from 'react-youtube';

const Interview = () => {
    const [modal,setModal]=useState(false)
    console.log(window.innerWidth);
    
  return (
    <section id='Interview' className='bg-interview w-full bg-cover bg-center h-[450px] md:h-[810px]'>
        <div className={`fixed flex justify-center items-center top-0 left-0 w-full h-full bg-black/50 ${modal?'opacity-100 z-30':'opacity-0 -z-30'}`}>
            <FaTimes className='text-white absolute top-10 right-10 text-[80px] cursor-pointer' onClick={_=>setModal(false)}/>
            <YouTube
                videoId='_l1mqYQuNf8'
                opts={{      
                height: window.innerWidth>768?'490':'400',
                width:window.innerWidth>768?'650':'300',
                playerVars: {
                autoplay: 1,
                },}}
            />
        </div>
        <motion.div
            className='font-primary text-white w-[80%] gap-4 mx-auto flex justify-center items-start flex-col h-full'
            initial={{y:100,opacity:0}}
            whileInView={{y:0,opacity:100}}
            transition={{duration:1}}
        >
            <p className='text-4xl md:text-6xl font-bold w-full md:w-[70%]'>
                “Consider what you desire. Your tattoo artist will never tell you what tattoo to have.”
            </p>
            <div onClick={_=>setModal(true)} className='flex items-center gap-4 text-2xl cursor-pointer'>
                <FaRegPlayCircle className='text-6xl'/>
                <p className='uppercase font-semibold'>Watch it now</p>
            </div>
        </motion.div>
    </section>

  )
}

export default Interview