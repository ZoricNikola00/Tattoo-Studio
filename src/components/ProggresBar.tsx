import {useState,useEffect} from 'react'
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const ProggresBar = () => { 
  const [fullBody, setFullBody] = useState(0);
  const [piercing, setPiercing] = useState(0);
  const [fullColor, setFullColor] = useState(0);
  const [temporary, setTemporary] = useState(0);

    const { ref, inView } = useInView({
        threshold: 0.2,
      });

useEffect(() => {
    if (inView) {
      setTimeout(() => {
        if (fullBody < 90) {
          setFullBody(fullBody + 1);
        }
        if (piercing < 80) {
          setPiercing(piercing + 1);
        }
        if (fullColor < 75) {
          setFullColor(fullColor + 1);
        }
        if (temporary < 95) {
          setTemporary(temporary + 1);
        }
      }, 50);
    } else {
      setFullBody(0);
      setPiercing(0);
      setFullColor(0);
      setTemporary(0);
    }
  }, [inView, fullBody, piercing, fullBody, temporary]);

  const styles = {
    path: {
      stroke: '#111111',
    },
    trail: {
      stroke: '#EEEEEE',
    },
    text: {
      fill: '#111111',
      fontSize: '24px',
    },
  };

  return (
    <motion.section
        className='w-[80%] mx-auto font-primary flex flex-col md:flex-row gap justify-between items-center my-[200px] gap-y-12'
        initial={{y:100,opacity:0}}
        whileInView={{y:0,opacity:100}}
        transition={{duration:1}}
        ref={ref}
     >
        <div className='w-[150px] md:w-[280px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
                strokeWidth={1}
                styles={styles}
                value={fullBody}
                text={`${fullBody}%`}
            />
            <h1 className='uppercase tracking-wider text-lg font-light text-center'>Full Body Tattoo</h1>
        </div>
        <div className='w-[150px] md:w-[280px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
                strokeWidth={1}
                styles={styles}
                value={piercing}
                text={`${piercing}%`}
            />
            <h1 className='uppercase tracking-wider text-lg font-light text-center'>Safely Piercing</h1>
        </div>
        <div className='w-[150px] md:w-[280px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
                strokeWidth={1}
                styles={styles}
                value={fullColor}
                text={`${fullColor}%`}
            />
            <h1 className='uppercase tracking-wider text-lg font-light text-center'>Full Color Tattoo</h1>
        </div>
        <div className='w-[150px] md:w-[280px] flex flex-col justify-center items-center gap-y-6'>
            <CircularProgressbar
                strokeWidth={1}
                styles={styles}
                value={temporary}
                text={`${temporary}%`}
            />
            <h1 className='uppercase tracking-wider text-lg font-light text-center'>Temporary Tattoo</h1>
        </div>
    </motion.section >
  )
}

export default ProggresBar