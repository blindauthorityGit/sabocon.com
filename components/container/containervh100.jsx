import React from "react";
// import HugeLogo from "../../assets/hugeLogo.svg";

const ContainerVH100 = (props) => {
    return (
        <div
            className={`containervh100  relative overflow-hidden ${props.center ? "items-center flex" : ""}  ${
                props.hFull ? "h-full" : ""
            } ${props.first ? "py-12 md:py-20 lg:py-24 h-calc-70px" : "py-8 sm:py-12 lg:py-24"}  w-full ${
                props.klasse
            }`}
            style={props.style}
        >
            {props.showBG ? (
                <div className="absolute left-[-30%] top-0 h-full opacity-[0.02]">
                    {/* <img src={HugeLogo.src} alt="" /> */}
                </div>
            ) : null}
            {/* Background Image */}
            {props.children}
        </div>
    );
};

export default ContainerVH100;
