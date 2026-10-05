
import React from "react";
import paperSource from "./3d-paper.html?raw";

const ThreeDPaper = () => {
    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                width: "100%",
                height: "100%",
                overflow: "hidden",
                background: "#08080a",
                zIndex: 2147483647,
            }}
        >
            <iframe
                title="ThreeUI 3D Paper"
                srcDoc={paperSource}
                sandbox="allow-scripts"
                style={{
                    width: "100%",
                    height: "100%",
                    border: "0",
                    display: "block",
                }}
            />
        </div>
    );
};

export default ThreeDPaper;

