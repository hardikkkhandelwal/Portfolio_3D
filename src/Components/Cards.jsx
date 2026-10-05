import React from 'react'

function Cards() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.02"
      className='relative z-20 w-full min-h-screen py-10 pb-28 sm:pb-32 md:py-0 bg-[#ebffa5] flex flex-col md:flex-row items-center justify-center gap-5 px-6 sm:px-12 md:px-20 lg:px-32 rounded-t-xl -mt-6 sm:-mt-10'
    >
      <div className='cardcontainer h-[35vh] sm:h-[45vh] md:h-[50vh] w-full md:w-1/2'>
        <div className='relative card rounded-xl w-full h-full bg-[#004d43] flex items-center justify-center'>
          <img className='w-24 sm:w-32' src="/Portfolio_Pro/At0mwebsiteGreen.png" alt="" />
          <button className='absolute left-5 sm:left-10 bottom-5 sm:bottom-10 px-3 sm:px-5 py-1 text-xs sm:text-base border border-[#CDEA68] text-[#CDEA68] rounded-full'>&copy;2023-2025</button>
        </div>
      </div>
      <div className='cardcontainer flex flex-col sm:flex-row gap-5 w-full md:w-1/2 h-auto md:h-[50vh]'>
        <div className='relative card rounded-xl w-full sm:w-1/2 h-[25vh] sm:h-full bg-[#192826] flex items-center justify-center'>
          <img className='w-24 sm:w-32' src="/Portfolio_Pro/At0mwebsiteWhite.png" alt="" />
          <button className='absolute left-5 sm:left-10 bottom-5 sm:bottom-10 px-3 sm:px-5 py-1 text-xs sm:text-base border rounded-full text-white border-white'>&copy;At0M</button>
        </div>
        <div className='relative card rounded-xl w-full sm:w-1/2 h-[25vh] sm:h-full bg-[#192826] flex items-center justify-center'>
          <img className='w-24 sm:w-32' src="/Portfolio_Pro/At0mwebsiteWhite.png" alt="" />
          <button className='absolute left-5 sm:left-10 bottom-5 sm:bottom-10 px-3 sm:px-5 py-1 text-xs sm:text-base border rounded-full text-white border-white'>&copy;Hardik</button>
        </div>
      </div>
    </div>
  )
}

export default Cards