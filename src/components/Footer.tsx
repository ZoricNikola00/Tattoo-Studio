import React from 'react'
import { motion } from 'framer-motion';
import { footerData } from '../data';

const Footer = () => {
  return (
    <footer className='w-full h-[auto] md:h-[500px] bg-black py-[100px]'>
        <div className='w-[80%] mx-auto gap-y-6 grid grid-cols-1 border-b-2 border-gray-400 py-[50px] md:grid-cols-6 text-white'>
            <motion.div 
                className='col-span-1 md:col-span-2 flex flex-col gap-2'
                initial={{y:-100,opacity:0}}
                whileInView={{y:0,opacity:100}}
                transition={{duration:1}}
            >
                <h1 className='text-xl font-bold uppercase'>{footerData.about.title}</h1>
                <p className='text-gray-400 w-[80%]'>{footerData.about.subtitle}</p>
                <div className='flex items-center gap-2'><footerData.about.address.icon/>{footerData.about.address.name}</div>
                <div className='flex items-center gap-2'><footerData.about.phone.icon/>{footerData.about.phone.number}</div>
                <div className='flex items-center gap-2'><footerData.about.email.icon/>{footerData.about.email.address}</div>
            </motion.div>
            <motion.div 
                className='col-span-1 flex flex-col gap-2'
                initial={{y:-100,opacity:0}}
                whileInView={{y:0,opacity:100}}
                transition={{duration:1,delay:0.2}}
            >
                <h1 className='text-xl font-bold uppercase'>{footerData.links.title}</h1>
                {footerData.links.items.map(item=><a className='text-gray-400' key={item.id} href={item.href}>{item.name}</a>)}
            </motion.div>
            <motion.div 
                className='col-span-1 flex flex-col gap-2'
                initial={{y:-100,opacity:0}}
                whileInView={{y:0,opacity:100}}
                transition={{duration:1,delay:0.4}}
            >
                <h1 className='text-xl font-bold uppercase'>{footerData.program.title}</h1>
                {footerData.program.items.map(item=><a className='text-gray-400' key={item.id}>{item.name}</a>)}
            </motion.div>
            <motion.div 
                className='col-span-1 md:col-span-2 flex flex-col gap-2'
                initial={{y:-100,opacity:0}}
                whileInView={{y:0,opacity:100}}
                transition={{duration:1,delay:0.6}}
            >
                <h1 className='text-xl font-bold uppercase'>{footerData.newsletter.title}</h1>
                <p className='text-gray-400 w-[80%]'>{footerData.newsletter.subtitle}</p>
                <div className='relative border-b-2 border-gray-400 py-4 px-1 flex items-center justify-between w-[300px]'>
                    <input className='text-gray-400 placeholder:text-gray-400 bg-transparent outline-none' placeholder={footerData.newsletter.form.placeholder}/>
                    <footerData.newsletter.form.icon className='text-xl'/>
                </div>
            </motion.div>
        </div>
        <div className='w-[80%] mx-auto text-gray-400'>
            <p>&#169; <span className='text-white mr-1'>The Void Tattoo.</span>All rights reserverd</p>
        </div>
    </footer>
  )
}

export default Footer