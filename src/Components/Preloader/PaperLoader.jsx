import React, { useEffect, useState } from "react";
import ThreeDPaper from "./3DPaper/ThreeDPaper.jsx";

const PaperLoader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isSlidingUp, setIsSlidingUp] = useState(false);
    const [isHidden, setIsHidden] = useState(false);

    useEffect(() => {
        let value = 0;

        // Fills from 0 to 100% in ~4 seconds
        const interval = setInterval(() => {
            value += Math.random() * 1.8 + 0.3;

            if (value >= 100) {
                value = 100;
                setProgress(100);
                clearInterval(interval);

                // Trigger slide-up transition
                setTimeout(() => {
                    setIsSlidingUp(true);
                }, 200);

                // Unmount completely after slide transition finishes
                setTimeout(() => {
                    setIsHidden(true);
                    if (onComplete) onComplete();
                }, 1000);
            } else {
                setProgress(Math.floor(value));
            }
        }, 70);

        return () => clearInterval(interval);
    }, [onComplete]);

    // Unmounts from DOM automatically when done
    if (isHidden) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 2147483647,
                background: "#08080a",
                transform: isSlidingUp ? "translateY(-100%)" : "translateY(0)",
                pointerEvents: isSlidingUp ? "none" : "all",
                transition: "transform 0.8s cubic-bezier(0.76, 0, 0.24, 1)",
            }}
        >
            <ThreeDPaper />

            {/* Loading bar */}
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "3px",
                    background: "rgba(255,255,255,0.15)",
                    zIndex: 10,
                }}
            >
                <div
                    style={{
                        width: `${progress}%`,
                        height: "100%",
                        background: "#ffffff",
                        transition: "width 0.15s ease",
                    }}
                />
            </div>

            {/* Percentage */}
            <div
                style={{
                    position: "absolute",
                    top: "18px",
                    right: "25px",
                    zIndex: 10,
                    color: "#ffffff",
                    fontFamily: "Arial, sans-serif",
                    fontSize: "12px",
                    letterSpacing: "0.12em",
                }}
            >
                {progress}%
            </div>
        </div>
    );
};

export default PaperLoader;