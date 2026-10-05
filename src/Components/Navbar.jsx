import React, { useEffect, useState } from 'react'
import '../../src/index.css'
import { Link } from 'react-scroll';

function Navbar() {

  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`fixed z-[999] w-full px-6 sm:px-12 md:px-20 py-2 sm:py-1 font-['Montreal'] flex justify-between items-center ${sticky ? 'dark-nav' : ''}`}>

      <div className='logo relative w-16 sm:w-20 h-auto'>

        <img
          className={`w-16 sm:w-20 transition-opacity duration-1000 ${sticky ? 'opacity-0' : 'opacity-100'
            }`}
          src="/Portfolio_3D/At0mwebsiteWhite.png"
          alt="Logo"
        />

        <img
          className={`w-16 sm:w-20 absolute top-0 left-0 transition-opacity duration-1000 ${sticky ? 'opacity-100' : 'opacity-0'
            }`}
          src="/Portfolio_3D/At0mwebsite.png"
          alt="Logo"
        />

      </div>

      <div className='links flex gap-6 sm:gap-10 tracking-tight'>
        {["Portfolio"].map((item, index) => {
          return (
            <Link
              to="navbar"
              smooth={true}
              duration={2000}
              offset={-50}
              key={index}
              className={`text-lg sm:text-xl cursor-pointer font-light ${index === 1 ? "ml-96" : ""}`}
            >
              {item}
            </Link>
          )
        })}
      </div>

    </div>
  )
}

export default Navbar