import React, { useEffect, forwardRef } from "react";
import { FaPhone } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const ContactFloater = (refer, props) => {
    useEffect(() => {}, []);
    return (
        <div
            refer={refer}
            className={`floater hidden font-block sm:block fixed z-20 bottom-12 lg:text-lg lg:font-semibold text-textBlack right-6 lg:right-12 `}
        >
            <div className="tel flex items-center">
                {" "}
                <FaPhone className="text-primaryColor-700"></FaPhone>{" "}
                <a className="pl-4" href="tel:+43 650 944 4150">
                    +43 650 944 4150
                </a>
            </div>
            <div className="email flex items-center">
                {" "}
                <HiOutlineMail className="text-primaryColor-700"></HiOutlineMail>{" "}
                <a className="pl-4" href="">
                    {" "}
                    office@atelierbuchner.at
                </a>
            </div>
        </div>
    );
};

export default forwardRef(ContactFloater);
