import React, { useEffect, useState } from 'react'

function Eyes() {

    const [rotate1, setRotate] = useState(0)

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX
            let mouseY = e.clientY

            let deltaX = mouseX - window.innerWidth / 2;
            let deltaY = mouseY - window.innerHeight / 2;

            var angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180)


        }), []
    })

    return (
        <div className='eyes w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.2" className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg")]'>
                <div className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-4 sm:gap-10'>
                    <div className='flex justify-center items-center w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate1}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 sm:h-8 md:h-10' >
                                <div className='w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center items-center w-[25vw] h-[25vw] sm:w-[20vw] sm:h-[20vw] md:w-[15vw] md:h-[15vw] bg-zinc-100 rounded-full'>
                        <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate1}deg)` }} className='line absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-5 sm:h-8 md:h-10'>
                                <div className='w-5 h-5 sm:w-8 sm:h-8 md:w-10 md:h-10 rounded-full bg-zinc-100'></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Eyes
