import React, { useCallback, useEffect, useRef, useState } from "react";
import {
    AnimatePresence,
    animate,
    motion,
    useMotionValue,
    useReducedMotion,
} from "framer-motion";

function HeroCarousel() {

    const items = [
        {
            id: "redbull",
            title: "Red Bull",
            image: "/Portfolio_3D/Redbull.png",
            accent: "#D90429",
            credit: "BY HARDIK.K",
        },
        {
            id: "desolation",
            title: "Desolation",
            image: "/Portfolio_3D/Desolation.png",
            accent: "#756552",
            credit: "BY HARDIK.K",
        },
        {
            id: "apple",
            title: "Apple",
            image: "/Portfolio_3D/Apple.png",
            accent: "#AFAFAF",
            credit: "PRODUCT CGI",
        },
        {
            id: "fifth",
            title: "5th",
            image: "/Portfolio_3D/5th.png",
            accent: "#B87822",
            credit: "AUTOMOTIVE CGI",
        },
        {
            id: "rear",
            title: "Rear",
            image: "/Portfolio_3D/Rear.png",
            accent: "#34475A",
            credit: "AUTOMOTIVE CGI",
        },
        {
            id: "redfront",
            title: "Red Front",
            image: "/Portfolio_3D/RedFront.png",
            accent: "#9E1725",
            credit: "AUTOMOTIVE CGI",
        },
    ];

    const [index, setIndex] = useState(0);
    const [imageRatios, setImageRatios] = useState({});
    const reducedMotion = useReducedMotion();

    const [backgroundImage, setBackgroundImage] = useState(items[0].image);
    const [previousBackground, setPreviousBackground] = useState(null);
    const [backgroundKey, setBackgroundKey] = useState(0);

    const stageRef = useRef(null);

    const [box, setBox] = useState({
        w: 0,
        h: 0,
    });

    const x = useMotionValue(0);

    const last = items.length - 1;

    /* ---------------------------------------------------------
       SELECT IMAGE
    --------------------------------------------------------- */

    const updateIndex = useCallback((next) => {
        const clamped = Math.min(Math.max(next, 0), last);
        setIndex(clamped);
    }, [last]);

    const go = useCallback(
        (direction) => {
            updateIndex(index + direction);
        },
        [index, updateIndex]
    );

    /* ---------------------------------------------------------
       MEASURE SECTION
    --------------------------------------------------------- */

    useEffect(() => {

        const element = stageRef.current;

        if (!element) return;

        const measure = () => {

            const rect = element.getBoundingClientRect();

            setBox({
                w: rect.width,
                h: rect.height,
            });

        };

        measure();

        const observer = new ResizeObserver(measure);

        observer.observe(element);

        return () => observer.disconnect();

    }, []);

    /* ---------------------------------------------------------
       CARD SIZE
    --------------------------------------------------------- */

    const isMobile = box.w > 0 && box.w < 640;
    const cardH = Math.min(box.h * (isMobile ? 0.22 : 0.32), 240);
    const cardW = cardH * 1.5;

    const gap = isMobile ? 12 : 18;

    /* ---------------------------------------------------------
       ACTIVE IMAGE SIZE
    --------------------------------------------------------- */

    const activeScale = isMobile ? 1.3 : 1.5;

    /* ---------------------------------------------------------
       CENTER SELECTED IMAGE
    --------------------------------------------------------- */

    const xFor = (selectedIndex) => {

        const center = box.w / 2;

        let offset = 0;

        for (let i = 0; i < selectedIndex; i++) {
            offset += cardW + gap;
        }

        const selectedWidth =
            cardH *
            activeScale *
            (imageRatios[items[selectedIndex].id] || 1.5);

        return (
            center -
            offset -
            selectedWidth / 2
        );
    };

    /* ---------------------------------------------------------
       MOVE STRIP
    --------------------------------------------------------- */

    useEffect(() => {

        const target = xFor(index);

        if (reducedMotion) {

            x.set(target);

            return;

        }

        const controls = animate(
            x,
            target,
            {
                duration: 0.85,
                ease: [0.22, 1, 0.36, 1],
            }
        );

        return () => controls.stop();

    }, [
        index,
        box.w,
        box.h,
        reducedMotion,
        imageRatios,
    ]);

    const active = items[index];

    /* ---------------------------------------------------------
       BACKGROUND CROSSFADE
    --------------------------------------------------------- */

    useEffect(() => {

        if (active.image === backgroundImage) return;

        setPreviousBackground(backgroundImage);
        setBackgroundImage(active.image);
        setBackgroundKey((prev) => prev + 1);

    }, [active.image]);

    /* ---------------------------------------------------------
       GET ORIGINAL IMAGE RATIOS
    --------------------------------------------------------- */

    useEffect(() => {

        items.forEach((item) => {

            const img = new Image();

            img.src = item.image;

            img.onload = () => {

                setImageRatios((prev) => ({
                    ...prev,
                    [item.id]:
                        img.naturalWidth /
                        img.naturalHeight,
                }));

            };

        });

    }, []);

    return (

        <section
            ref={stageRef}
            className="relative w-full h-[70vh] min-h-[420px] overflow-hidden bg-black"
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="absolute inset-0 overflow-hidden bg-black">

                {/* Previous background remains visible underneath */}

                {previousBackground && (
                    <img
                        src={previousBackground}
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover scale-[1.04]"
                        style={{
                            filter: "blur(2px)",
                        }}
                    />
                )}

                {/* New background smoothly fades over previous */}

                <motion.img
                    key={backgroundKey}
                    src={backgroundImage}
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover scale-[1.04]"
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: 1,
                    }}
                    transition={{
                        opacity: {
                            duration: 1.0,
                            ease: [0.22, 1, 0.36, 1],
                        },
                    }}
                    style={{
                        filter: "blur(2px)",
                    }}
                />

                {/* Colour grade */}

                <div
                    className="absolute inset-0"
                    style={{
                        background: active.accent,
                        mixBlendMode: "color",
                        opacity: 0.0,
                    }}
                />

                <div
                    className="absolute inset-0"
                    style={{
                        background: active.accent,
                        opacity: 0.25,
                        mixBlendMode: "multiply",
                    }}
                />

                {/* Slight dark cinematic gradient */}

                <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/65" />

            </div>


            {/* =====================================================
                TOP BAR
            ====================================================== */}

            {/* =====================================================
                TOP BAR
            ====================================================== */}

            <div className="absolute top-0 left-0 z-30 w-full px-4 sm:px-8 md:px-12 py-4 sm:py-6 flex items-center justify-between text-white">

                <div className="text-[10px] sm:text-[11px] opacity-90">
                    ← Portfolio
                </div>

                <div className="font-medium leading-[0.9] text-[16px] sm:text-[23px]">
                    Render Gallery
                </div>

                <div className="text-[10px] sm:text-[11px] opacity-90">
                    3D / CGI
                </div>

            </div>


            {/* =====================================================
                TITLE
            ====================================================== */}

            <div className="absolute left-4 sm:left-8 md:left-12 top-[16%] sm:top-[20%] z-30 text-white">

                <AnimatePresence mode="wait">

                    <motion.div
                        key={active.id}
                        initial={{
                            opacity: 0,
                            y: 8,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            y: -8,
                        }}
                        transition={{
                            duration: 0.3,
                            ease: "easeOut",
                        }}
                    >

                        <h2 className="text-2xl sm:text-3xl md:text-5xl font-medium leading-[0.9] tracking-tight">
                            {active.title}
                        </h2>

                        <p className="mt-1.5 sm:mt-3 text-[7px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.28em] uppercase text-white/75">
                            {active.credit}
                        </p>

                    </motion.div>

                </AnimatePresence>

            </div>


            {/* =====================================================
                RIGHT INFORMATION
            ====================================================== */}

            <div className="absolute right-4 sm:right-8 md:right-12 top-[17%] sm:top-[21%] z-30 text-white text-[7px] sm:text-[8px] tracking-[0.2em] sm:tracking-[0.25em] uppercase text-right">

                <div>
                    AUTOMOTIVE
                </div>

                <div className="mt-1 text-white/60">
                    CGI / VISUALS
                </div>

            </div>


            {/* =====================================================
                IMAGE STRIP
            ====================================================== */}

            <div className="absolute inset-0 z-20 pointer-events-none">

                <motion.div
                    className="absolute left-0 top-[35%] -translate-y-1/2 flex items-center pointer-events-auto"
                    style={{
                        x,
                        gap: `${gap}px`,
                    }}
                >

                    {items.map((item, i) => {

                        const isActive = i === index;

                        const selectedWidth =
                            cardH *
                            activeScale *
                            (imageRatios[item.id] || 1.5);

                        return (

                            <motion.div
                                key={item.id}
                                onClick={() => updateIndex(i)}
                                className="relative shrink-0 cursor-pointer"
                                layout
                                animate={{
                                    opacity: isActive ? 1 : 0.65,
                                }}
                                transition={{
                                    layout: {
                                        duration: 0.85,
                                        ease: [0.22, 1, 0.36, 1],
                                    },
                                    opacity: {
                                        duration: 0.7,
                                    },
                                }}
                                style={{
                                    width: isActive
                                        ? selectedWidth
                                        : cardW,

                                    height: isActive
                                        ? cardH * activeScale
                                        : cardH,
                                }}
                            >

                                <div className="relative w-full h-full overflow-hidden">

                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        draggable="false"
                                        className={`w-full h-full select-none ${isActive
                                            ? "object-contain"
                                            : "object-cover"
                                            }`}
                                    />

                                    {!isActive && (
                                        <div className="absolute inset-0 bg-black/20" />
                                    )}

                                </div>

                            </motion.div>

                        );

                    })}

                </motion.div>

            </div>


            {/* =====================================================
                COUNTER
            ====================================================== */}

            <div className="absolute bottom-4 sm:bottom-8 left-4 sm:left-8 md:left-12 z-30 text-white">

                <div className="flex items-center gap-3 sm:gap-5">

                    <span className="text-[8px] tracking-widest">
                        {String(index + 1).padStart(2, "0")}
                    </span>

                    <div className="w-16 sm:w-24 md:w-40 h-[1px] bg-white/30 relative">

                        <motion.div
                            className="absolute left-0 top-0 h-full bg-white"
                            animate={{
                                width: `${((index + 1) / items.length) * 100}%`,
                            }}
                            transition={{
                                duration: 0.4,
                                ease: "easeOut",
                            }}
                        />

                    </div>

                    <span className="text-[8px] tracking-widest text-white/50">
                        {String(items.length).padStart(2, "0")}
                    </span>

                </div>

            </div>


            {/* =====================================================
                ARROWS
            ====================================================== */}

            <div className="absolute bottom-4 sm:bottom-8 right-4 sm:right-8 md:right-12 z-30 flex gap-2">

                <button
                    onClick={() => go(-1)}
                    disabled={index === 0}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/30 text-white flex items-center justify-center text-xs hover:bg-white hover:text-black transition disabled:opacity-20"
                >
                    ←
                </button>

                <button
                    onClick={() => go(1)}
                    disabled={index === last}
                    className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/30 text-white flex items-center justify-center text-xs hover:bg-white hover:text-black transition disabled:opacity-20"
                >
                    →
                </button>

            </div>

        </section>

    );
}

export default HeroCarousel;