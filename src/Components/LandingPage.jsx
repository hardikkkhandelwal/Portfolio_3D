import { motion } from 'framer-motion';
import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { Link } from 'react-scroll';

function LandingPage() {
  return (
    <div id="navbar" data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full min-h-fit md:h-screen bg-zinc-900 pt-1 pb-10 flex flex-col justify-between relative z-0 overflow-hidden'>
      <div className='textstructureb mt-24 sm:mt-44 md:mt-52 px-6 sm:px-12 md:px-20'>
        {["I Create", "Eye-Opening", "Animations"].map((item, index) => {
          return <div key={index} className='masker font-["Founder"]'>
            <div className='w-fit flex items-center'>
              {index === 1 && (
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "18vw" }}
                  transition={{ ease: [0.85, 0, 0.15, 1], duration: 1.2, delay: 7 }}
                  className="h-[10vw] sm:h-[8vw] md:h-[10vw] mr-[1.5vw] rounded-sm sm:rounded-md overflow-hidden relative top-[0.5vw] sm:top-[0.9vw]"
                >
                  <img
                    src="/Portfolio_3D/Lotus-Emira.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                  />
                </motion.div>
              )}

              <h1 className='uppercase text-[11vw] sm:text-[9vw] md:text-[7.5vw] leading-[10vw] sm:leading-[8.5vw] md:leading-[7vw] tracking-tight font-regular'>{item}</h1>
            </div>
          </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-700 mt-12 sm:mt-16 md:mt-20 flex flex-col md:flex-row justify-between items-start md:items-center py-5 px-6 sm:px-12 md:px-20 gap-4 md:gap-0'>
        {[
          "For Visionary Brands and Studios",
          "From Concept Renders to Final Animations",
        ].map((item, index) => {
          return (
            <p key={index} className='text-sm sm:text-md font-light tracking-tight leading-relaxed md:leading-none'>
              {item}
            </p>
          );
        })}
        <div className='start flex items-center gap-2 mt-2 md:mt-0'>
          <div className='px-4 sm:px-5 py-2 text-xs sm:text-base border-[1px] border-zinc-500 rounded-full uppercase cursor-pointer hover:bg-zinc-800 transition'>
            <Link to='contact' smooth={true} offset={100} duration={2000}>
              Contact Me!
            </Link>
          </div>
          <div className='w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center rounded-full border-[1px] border-zinc-500 hover:bg-zinc-800 transition text-sm sm:text-base'>
            <FiArrowUpRight />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
