import React, { useState } from 'react'
import { galleryData } from '../data'
import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

const Gallery = () => {
    const [openSingle,setOpenSingle]=useState(false)
    const [indexPhoto,setIndexPhoto]=useState(0)
  return (
    <section id='Gallery'>
        <motion.h1 
        className='w-[80%] mx-auto text-6xl font-bold font-primary'
        initial={{x:-100,opacity:0}}
        whileInView={{x:0,opacity:100}}
        transition={{duration:1}}
        >
            CHECK MY <br/>GALLERY:
        </motion.h1>
        <motion.div 
            className='w-full flex flex-wrap justify-center gap-3 my-[100px]'
            initial={{y:-100,opacity:0}}
            whileInView={{y:0,opacity:100}}
            transition={{duration:1}}
        >
            {galleryData.map(item=><img key={item.id} src={item.src} onClick={_=>{setOpenSingle(true);setIndexPhoto(item.id)}} className='max-w-[465px]'/>)}
        </motion.div>
        <div className={`fixed w-full h-full top-0 left-0 bg-black/60 ${openSingle?'opacity-100 rounded-lg z-30':'opacity-0 -z-30'} flex justify-center items-center`}>
            <img src={galleryData.find(x=>x.id===indexPhoto)?.src} className='rounded-lg max-w-[400px]'/>
            <FaTimes className='text-white absolute top-10 right-10 text-[80px]' onClick={_=>setOpenSingle(false)}/>
        </div>
    </section>
  )
}

export default Gallery