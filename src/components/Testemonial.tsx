import { useState } from 'react'
import { motion } from 'framer-motion';
import { testimonialData } from '../data';
import {FaArrowAltCircleLeft,FaArrowAltCircleRight} from 'react-icons/fa'
const Testemonial = () => {
  const [index,setIndex]=useState(0)
  return (
    <motion.section
        id='Testimonial'
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:100}}
        transition={{duration:1}}
        className='w-[80%] my-[100px] mx-auto flex justify-center items-center'
    >
        <div className='relative w-full h-[400px] md:w-[500px] overflow-hidden'>
          <div className='absolute flex items-center top-[10%] right-10 text-gray-600 gap-5 text-3xl'>
            <FaArrowAltCircleLeft onClick={_=>setIndex(p=>p===0?testimonialData.length-1:p-1)} className='cursor-pointer z-30'/>
            <FaArrowAltCircleRight onClick={_=>setIndex(p=>p===testimonialData.length-1?0:p+1)} className='cursor-pointer z-30'/>
          </div>
          {testimonialData.map((item,i,arr)=>{
            let position='translate-x-[100%] opacity-0'
            if(index===i) position='translate-x-0 opacity-100'
            if(index-1===i || (index===0 && i===arr.length-1)) position='translate-x-[-100%] opacity-0'
            return <div key={item.id} className={`w-full h-full absolute top-0 left-0 transition duration-500 font-primary ${position}`}>
              <img src={item.quoteImg} className='absolute top-[7%] left-[0]'/>
              <p className='text-lg text-gray-800 mt-[150px]'>{item.message}</p>
              <div className='flex items-end gap-4 mt-[10px]'>
                <p className='text-lg font-bold leading-none'>{item.name}</p>
                <div className='h-[16px] w-[2px] bg-gray-600'/>
                <p className='leading-none text-lg text-gray-600'>{item.occupation}</p>
              </div>
              </div>
          })}
        </div>
    </motion.section>
  )
}

export default Testemonial