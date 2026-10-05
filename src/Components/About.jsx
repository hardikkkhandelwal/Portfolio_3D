import React from 'react'
import HeroCarousel from './HeroCarousel'

function About() {
  return (
    <div data-scroll data-scroll-section className='w-full relative z-20 -mt-6 sm:-mt-10 px-6 sm:px-12 md:px-20 py-10 sm:py-16 md:py-20 leading-tight md:leading-[4.1vw] bg-[#cdea68] rounded-t-2xl text-[#212121] font-[Montreal]'>

      <div className='max-w-full md:max-w-[80%]'>
        <h1 className='font-regular text-2xl sm:text-4xl md:text-6xl lg:text-7xl tracking-tight text-left leading-tight md:leading-none'>
          Hardik is a 3D animation artist crafting bold visuals for brands, creators, and storytellers who want to stand out, evoke emotion, and turn ideas into unforgettable motion.
        </h1>
      </div>

      <div className='border-t-[1px] mt-10 sm:mt-16 md:mt-20 border-[#212121]'>

        <div className='flex flex-col md:flex-row justify-between text-base md:text-xl mt-6 sm:mt-10 gap-8 md:gap-0'>

          <p className='font-medium md:font-normal'>What you can expect:</p>

          <div className='max-w-full md:max-w-[35%] lg:max-w-[16%] flex flex-col gap-6 md:gap-10 leading-relaxed md:leading-none ml-0 md:ml-16 lg:ml-52'>
            <p>
              I collaborate with agencies, brands, and creators who want more than just visuals — they want movement that tells a story, design that sticks, and animation that makes people pause.
            </p>

            <p>
              Expect a mix of cinematic flair, strategic thinking, and technical polish — brought together through frames, motion, and a deep love for the craft (plus a bit of coffee).
            </p>
          </div>

          <div className='flex flex-col items-start mt-2 md:mt-32 leading-relaxed md:leading-none mr-0 md:mr-16 lg:mr-52'>

            <span className='mb-3 md:mb-5 font-medium md:font-normal'>S:</span>

            {[
              { name: "Instagram", url: "https://www.instagram.com/at0m.3d/" },
              { name: "Behance", url: "https://www.behance.net/at0m3d" },
              { name: "Youtube", url: "https://www.youtube.com/@Atom3DRender" },
            ].map((item, index) => (
              <a
                href={item.url}
                key={index}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-block overflow-hidden mb-1 md:mb-0"
              >
                <span className="relative z-10">
                  {item.name}
                </span>

                <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black transition-transform duration-300 transform group-hover:translate-x-full"></span>
              </a>
            ))}

          </div>

        </div>

        {/* Render Gallery */}
        {/* <div className='w-full border-t-[1px] mt-20 border-[#212121] pt-20'>

          <h1 className='text-7xl mb-10'>
            Render Gallery.
          </h1>

          <HeroCarousel
            items={[
              {
                id: "redbull",
                title: "Red Bull",
                image: "/Portfolio_Pro/Redbull.png",
                accent: "#D90429",
              },
              {
                id: "desolation",
                title: "Desolation",
                image: "/Portfolio_Pro/Desolation.png",
                accent: "#7A6855",
              },
              {
                id: "apple",
                title: "Apple",
                image: "/Portfolio_Pro/Apple.png",
                accent: "#B8B8B8",
              },
              {
                id: "fifth",
                title: "5th",
                image: "/Portfolio_Pro/5th.png",
                accent: "#D99A25",
              },
              {
                id: "rear",
                title: "Rear",
                image: "/Portfolio_Pro/Rear.png",
                accent: "#263B52",
              },
              {
                id: "redfront",
                title: "Red Front",
                image: "/Portfolio_Pro/RedFront.png",
                accent: "#B11226",
              },
            ]}
            defaultIndex={0}
            autoplay={false}
            className="h-[70vh] min-h-[500px] rounded-2xl"
          />

        </div> */}

      </div>

    </div>
  )
}

export default About