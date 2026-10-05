import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

function FooterUpgrade() {
    const footerRef = useRef(null)

    const isInView = useInView(footerRef, {
        once: true,
        amount: "some", // Triggers instantly as soon as footer starts entering
    })
    return (
        <div
            ref={footerRef}
            id="contact"
            data-scroll
            data-scroll-section
            data-scroll-speed="-.1"
            className="relative w-full min-h-screen md:h-screen font-[Founder] p-6 sm:p-12 md:p-20 flex flex-col md:flex-row gap-8 md:gap-5 text-black rounded-t-xl overflow-hidden justify-between"
        >

            {/* Animated Gradient Background */}
            <motion.div
                initial={{ opacity: 0, scale: 1.5 }}
                animate={
                    isInView
                        ? {
                            opacity: 1,
                            scale: 1,
                            transition: {
                                duration: 2,
                                ease: [0.25, 0.1, 0.25, 1],
                            },
                        }
                        : {
                            opacity: 0,
                            scale: 1.5,
                        }
                }
                className="absolute inset-0 overflow-hidden"
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "radial-gradient(125% 125% at 50% 20%, #0A0A0A 35%, #2979FF 50%, #FF80AB 60%, #FF6D00 70%, #FFD600 80%, #00E676 90%, #3D5AFE 100%)",
                    }}
                />
            </motion.div>

            {/* Your existing footer content */}
            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-between h-auto md:h-full text-slate-200 gap-8 md:gap-0">
                <div className="heading">
                    <h1 className="text-6xl sm:text-7xl md:text-[8vw] leading-none uppercase -mb-2 sm:-mb-5 md:-mb-10">Eye-</h1>
                    <h1 className="text-6xl sm:text-7xl md:text-[8vw] leading-none uppercase -mb-2 sm:-mb-5 md:-mb-10">Opening</h1>
                </div>

                {/* Visible on Mobile & Small Screens (< md) */}
                <img
                    className="w-24 sm:w-32 mt-4 md:mt-0 block md:hidden"
                    src="/Portfolio_Pro/At0mwebsiteWhite.png"
                    alt=""
                />

                {/* Visible on Medium & Desktop Screens (>= md) */}
                <img
                    className="w-24 sm:w-32 mt-4 md:mt-0 hidden md:block"
                    src="/Portfolio_Pro/At0mwebsite.png"
                    alt=""
                />
            </div>

            <div className="relative z-10 w-full md:w-1/2 text-slate-200">

                <h1 className="text-6xl sm:text-7xl md:text-[8vw] leading-none uppercase -mb-2 sm:-mb-5 md:-mb-10">
                    Animations
                </h1>

                <div className="flex flex-col items-start text-lg sm:text-xl mt-8 sm:mt-16 md:mt-24 lg:mt-32 leading-tight md:leading-none mr-0 md:mr-20 lg:mr-52 font-[Montreal]">
                    <span className="mb-3 sm:mb-5">S:</span>

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
                            <span className="relative z-10">{item.name}</span>

                            <span className="absolute left-0 bottom-0 w-full h-[1px] bg-black transition-transform duration-300 transform group-hover:translate-x-full"></span>
                        </a>
                    ))}
                </div>

                <div className="flex flex-col items-start text-lg sm:text-xl mt-6 sm:mt-12 md:mt-20 lg:mt-32 leading-tight md:leading-none mr-0 md:mr-20 lg:mr-52 font-[Montreal]">
                    <span className="mb-3 sm:mb-5">L:</span>

                    {["Ahmedabad", "Gujarat,India"].map((item, index) => (
                        <span className="underline mb-1 md:mb-0" key={index}>
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex flex-col items-start text-lg sm:text-xl mt-6 sm:mt-12 md:mt-20 lg:mt-32 leading-tight md:leading-none mr-0 md:mr-20 lg:mr-52 font-[Montreal]">
                    <span className="mb-3 sm:mb-5">E:</span>

                    {["hardikkhandelwal3d@gmail.com"].map((item, index) => (
                        <span className="underline break-all" key={index}>
                            {item}
                        </span>
                    ))}
                </div>

                <div className="text-black md:text-[#353535] flex flex-col sm:flex-row font-[Montreal] gap-2 sm:gap-10 lg:gap-[500px] mt-8 sm:mt-10 pb-4 md:pb-0">
                    {["©hardikDesign 2025.", "Website By Hardik.K"].map(
                        (item, index) => (
                            <span key={index}>{item}</span>
                        )
                    )}
                </div>

            </div>
        </div>
    )
}

export default FooterUpgrade