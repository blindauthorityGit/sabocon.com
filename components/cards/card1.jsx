import React from "react";
import Image from "next/image";

const Card1 = (props) => {
    return (
        <div className={`col-span-4 ${props.klasse}`}>
            <div className="relative">
                <Image
                    // {...ImagePropsGallery(i)}
                    src={props.image}
                    layout="responsive"
                    width={268}
                    height={429}
                    loading="lazy"
                    objectFit="cover"
                    alt="hero"
                    className="z-10"
                />
            </div>
            <h3 className="font-block text-2xl">{props.children}</h3>
        </div>
    );
};

export default Card1;
