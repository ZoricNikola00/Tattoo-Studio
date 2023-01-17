import React from 'react'
import { motion } from 'framer-motion';
import { contactData } from '../data';

const ContactForm = () => {
  return (
    <section id='Contact' className='w-[80%] mx-auto font-primary flex flex-col md:flex-row justify-center items-center gap-4 my-[100px]'>
            <motion.div 
                className='flex flex-col'
                initial={{x:-100,opacity:0}}
                whileInView={{x:0,opacity:100}}
                transition={{duration:1}}
            >
                <h1 className='text-6xl text-left mb-6'>Get in touch<br className='hidden md:block'/> with me:</h1>
                <div className='flex flex-col gap-y-6 md:flex-row'>
                    {contactData.map(item=><div key={item.id} className='flex flex-col w-[300px] gap-2'>
                        <h1 className='text-xl uppercase'>{item.title}</h1>
                        <p className='text-gray-800'>{item.subtitle}</p>
                        <div className='flex items-center gap-2'><item.address.icon/>{item.address.name}</div>
                        <div className='flex items-center gap-2'><item.phone.icon/>{item.phone.number}</div>
                        <div className='flex items-center gap-2'><item.email.icon/>{item.email.address}</div>
                    </div>)}
                </div>
            </motion.div>
            <motion.form 
                className='flex flex-col gap-6 w-full md:w-[400px]'
                initial={{x:100,opacity:0}}
                whileInView={{x:0,opacity:100}}
                transition={{duration:1}}
            >
                <input className='border-b-2 border-gray-600 py-3 text-lg w-full' placeholder='Write your name here'/>
                <input className='border-b-2 border-gray-600 py-3 text-lg w-full' placeholder='Write your email address'/>
                <input className='border-b-2 border-gray-600 py-3 text-lg w-full' placeholder='Write your message here'/>
                <button className='font-secondary w-[200px] border-2 mx-auto md:mx-0 border-black text-white bg-black py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-500 text-lg'>SEND IT</button>
            </motion.form>
    </section>
  )
}

export default ContactForm