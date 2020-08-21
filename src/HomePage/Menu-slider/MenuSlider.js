import React from "react";
import AnimatedText from "./AnimatedText";
import Menu from "./Menu";

export default function MenuSlider() {
    return (
        <div className="menu">
            <div className="upper-part">
                <AnimatedText />
            </div>
            <div className="lower-part">
                <Menu />
            </div>
        </div>
    );
}