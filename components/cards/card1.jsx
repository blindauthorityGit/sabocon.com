import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
// AOS
import AOS from "aos";
import "aos/dist/aos.css";
const Card1 = (props) => {
    useEffect(() => {
        AOS.init({
            duration: 1200,
        });
    }, []);
    return (
        <div
            data-aos={props.animation}
            className={`col-span-12 md:col-span-4 grid grid-cols-12 items-center p-6 ${props.klasse}`}
        >
            <div data-aos-delay="1000" className={`relative h-36 col-span-6 ${props.order}`}>
                <Image
                    // {...ImagePropsGallery(i)}
                    src={props.image}
                    layout="fill"
                    width={268}
                    height={429}
                    loading="lazy"
                    objectFit="contain"
                    alt="hero"
                    className={`z-10 ${props.imgKlasse}`}
                    data-aos="zoom-in"
                    data-aos-delay="400"
                />
            </div>
            <h3 className="font-block text-2xl col-span-6">{props.children}</h3>
        </div>
    );
};

export default Card1;
