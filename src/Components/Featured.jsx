import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { Power1 } from 'gsap/gsap-core'

function Featured() {

  const [hovering, setHovering] = useState(false)
  const [hovering2, setHovering2] = useState(false)
  const [hovering3, setHovering3] = useState(false)



  return (
    <div className='w-full py-10 sm:py-16 md:py-20 font-[Montreal] rounded-t-3xl'>
      <div className='w-full px-6 sm:px-12 md:px-20 border-b-[1px] border-zinc-700 pb-6 sm:pb-12 md:pb-20'>
        <h1 className='text-4xl sm:text-6xl md:text-8xl tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-6 sm:px-12 md:px-20'>
        <div className='cards w-full flex flex-col md:flex-row gap-6 md:gap-10 mt-6 md:mt-10'>
          <div onMouseEnter={() => setHovering(true)} onMouseLeave={() => setHovering(false)} className='cardcontainer w-full md:w-1/2 h-[45vh] sm:h-[60vh] md:h-[75vh] relative'>
            <div className='card w-full rounded-xl h-full overflow-hidden relative'>
              <h1 className='absolute flex overflow-hidden z-[999] text-xl sm:text-3xl md:text-5xl -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight whitespace-nowrap max-w-[90%] pointer-events-none drop-shadow-lg md:drop-shadow-none'>
                {"Atom X Octaspace".split('').map((item, index) => <motion.span initial={{ y: "0%" }} animate={hovering ? ({ y: "0%" }) : ({ y: "100%" })} transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.01 }} className='inline-block text-[#CDEA68]'> {item === ' ' ? '\u00A0' : item}</motion.span>)}
              </h1>
              <motion.video whileHover={{ scale: 0.95 }} transition={{ ease: Power1.easeOut }} src="/Portfolio_3D/videos/drift.mp4" loop muted autoPlay className='w-full h-full object-cover rounded-xl'></motion.video>
            </div>
          </div>
          <div className='cardcontainer relative w-full md:w-1/2 h-[45vh] sm:h-[60vh] md:h-[75vh]'>
            <div onMouseEnter={() => setHovering2(true)} onMouseLeave={() => setHovering2(false)} className='card w-full rounded-xl h-full overflow-hidden relative'>
              <h1 className='absolute flex overflow-hidden z-[999] text-xl sm:text-3xl md:text-5xl -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight whitespace-nowrap max-w-[90%] pointer-events-none drop-shadow-lg md:drop-shadow-none'>
                {"Atom X K-Performance".split('').map((item, index) => <motion.span initial={{ y: "0%" }} animate={hovering2 ? ({ y: "0%" }) : ({ y: "100%" })} transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.01 }} className='inline-block text-[#CDEA68]'> {item === ' ' ? '\u00A0' : item}</motion.span>)}
              </h1>
              <motion.video whileHover={{ scale: 0.95 }} transition={{ ease: Power1.easeOut }} src="/Portfolio_3D/videos/at0mK.mp4" loop muted autoPlay className='w-full h-full object-cover rounded-xl'></motion.video>
            </div>
          </div>
        </div>

        <div className='cards w-full flex gap-10 mt-6 md:mt-10'>
          <div className='cardcontainer relative w-full h-[45vh] sm:h-[60vh] md:h-[75vh] flex justify-center items-center py-4 md:py-10'>
            <div onMouseEnter={() => setHovering3(true)} onMouseLeave={() => setHovering3(false)} className='card w-full rounded-xl h-full overflow-hidden relative'>
              <h1 className='absolute flex overflow-hidden z-[999] text-2xl sm:text-4xl md:text-5xl -translate-x-1/2 left-1/2 top-1/2 -translate-y-1/2 leading-none tracking-tight whitespace-nowrap pointer-events-none drop-shadow-lg md:drop-shadow-none'>
                {"Atom X Launch Control".split('').map((item, index) => <motion.span initial={{ y: "0%" }} animate={hovering3 ? ({ y: "0%" }) : ({ y: "100%" })} transition={{ ease: [0.83, 0, 0.17, 1], delay: index * 0.01 }} className='inline-block text-[#CDEA68]'> {item === ' ' ? '\u00A0' : item}</motion.span>)}
              </h1>
              <motion.video whileHover={{ scale: 0.95 }} transition={{ ease: Power1.easeOut }} src="/Portfolio_3D/videos/FordGT.mp4" loop muted autoPlay className='w-full h-full object-cover rounded-xl'></motion.video>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Featured
