import { motion } from 'framer-motion'
import React from 'react'

function Marque() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full mt-0 sm:mt-20 py-6 sm:py-8 bg-[#004d43] rounded-t-2xl relative z-10 overflow-hidden'>
      <div className='text border-t-[1px] border-b-[1px] border-zinc-300 flex overflow-hidden whitespace-nowrap items-center'>
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          className='text-[24vw] sm:text-[22vw] leading-none font-[Founder] uppercase pr-6 sm:pr-10 pt-2 mb-[2vw]'
        >
          Hardik Khandelwal
        </motion.h1>
        <motion.h1
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 50 }}
          className='text-[24vw] sm:text-[22vw] leading-none font-[Founder] uppercase pr-6 sm:pr-10 pt-2 mb-[2vw]'
        >
          Hardik Khandelwal
        </motion.h1>
      </div>
    </div>
  )
}

export default Marque