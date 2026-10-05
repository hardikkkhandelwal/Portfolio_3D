import React, { useEffect, useState } from 'react'
import '../../src/index.css'
import { FaSlack } from 'react-icons/fa';
import { Link } from 'react-scroll';

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 1000 ? setSticky(true) : setSticky(false)
    })
  }, []);


  return (
    <div className={`fixed z-[999] w-full px-6 sm:px-12 md:px-20 py-2 sm:py-1 font-['Montreal'] flex justify-between items-center ${sticky ? 'dark-nav' : ""}`}>
      <div className='logo'>
        <img className='w-16 sm:w-20' src="/Portfolio_Pro/At0mwebsiteWhite.png" alt="Logo" />
      </div>
      <div className='links flex gap-6 sm:gap-10 tracking-tight'>
        {["Portfolio"].map((item, index) => {
          return <Link to="navbar" smooth={true} duration={2000} offset={-50} key={index} className={`text-lg sm:text-xl cursor-pointer font-light ${index === 1 ? "ml-96" : ""}`}>{item}</Link>
        })}
      </div>
    </div>
  )
}

export default Navbar
