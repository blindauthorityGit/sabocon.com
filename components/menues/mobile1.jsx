import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import Logo from "../../assets/logoFinNeu.svg";
import { GrClose } from "react-icons/gr";
import { useRouter } from "next/router";

// Framer Motion

// ICONS
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Mobile1 = (props) => {
    const [showMenu, setShowMenu] = useState(props.showMenu);
    const { asPath } = useRouter();

    const burgerRef = useRef();

    function clicker(e) {
        console.log("Clicked");
    }

    // useEffect(() => {
    //     props.showMenu(false);
    // }, [asPath]);

    const boxMotion = {
        rest: {
            opacity: 0,
            display: "none",
            ease: "easeOut",
            duration: 0.2,
            type: "spring",
            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeIn",
            },
        },

        end: {
            opacity: 1,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
    };

    const textMotion = {
        rest: {
            x: -50,
            opacity: 0,

            transition: {
                duration: 2.85,
                type: "tween",
                ease: "easeIn",
            },
        },
        end: {
            opacity: 1,
            x: 0,
            display: "block",
            transition: {
                duration: 0.4,
                type: "spring",
                ease: "easeIn",
            },
        },
        hover: {
            // color: "blue",
            x: 0,
            opacity: 1,

            transition: {
                duration: 0.5,
                type: "tween",
                ease: "easeOut",
            },
        },
    };

    return (
        <>
            <motion.nav
                variants={boxMotion}
                className={`navbar slide-in-right ${props.klasse} 
                w-[90%] right-0 h-screen bg-white fixed z-50 top-0  `}
            >
                <div onClick={props.onClick} className="closer absolute  rounded-full p-1 right-6 top-3">
                    <GrClose className=""></GrClose>
                </div>
                <div className="container h-screen py-3 px-12 font-europa tracking-wider">
                    <div className="middle flex justify-start">
                        <Link href="/">
                            <a>
                                <img src={Logo.src} width="32" alt="Logo" />
                            </a>
                        </Link>
                    </div>
                    <div className="MenuItems text-sm sm:text-4xl pt-4 font-block ">
                        <motion.h2 className="font-heading mb-8 mt-6 text-3xl uppercase col-span-12 sm:text-6xl font-bold tracking-wide ">
                            Let's <span className="text-primaryColor">create</span> something together
                        </motion.h2>
                        <div className="flex items-center space-x-6 sm:space-x-8 mt-8 sm:mt-16">
                            <FaPhoneAlt className="text-primaryColor text-xl " />
                            <span className="text-sm sm:text-xl font-block">0049 / 6103-9849-37</span>
                        </div>

                        <div className="flex items-center space-x-6 sm:space-x-8 mt-4">
                            <FaEnvelope className="text-primaryColor text-xl " />
                            <span className="text-sm sm:text-xl font-block">contact[at]sabocon.com</span>
                        </div>

                        <div className="flex space-x-6 sm:space-x-8 mt-8">
                            <FaMapMarkerAlt className="text-primaryColor text-xl " />
                            <span className="text-sm sm:text-xl  font-block">
                                <strong>Sabocon GmbH </strong> <br /> Alte Bogengasse 25 <br /> 63303 Dreieich <br />{" "}
                                Germany
                            </span>
                        </div>
                        <hr className="mt-4" />
                        <ul className="tracking-widest text-primaryColor-900">
                            <li className="mb-3 mt-8 text-xs">
                                <div className="wrap dropdown   ">
                                    <Link href="/imprint">
                                        <a className="text-text block my-4 subNav relative hover:text-primaryColor cursor-pointer">
                                            Imprint
                                        </a>
                                    </Link>

                                    <Link href="/privacy">
                                        <a className="text-text block my-4 subNav relative mt-4 hover:text-primaryColor cursor-pointer">
                                            Privacy policy
                                        </a>
                                    </Link>
                                </div>
                            </li>
                            <li className="">
                                <div className="sm:hidden flex ">
                                    {props.socialMedia.map((e, i) => {
                                        return (
                                            <a className="mr-4 pt-2" key={`smKey${i}`} href={e.link} alt={e.title}>
                                                {e.icon}
                                            </a>
                                        );
                                    })}
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* <div className="Kontakt flex mt-10">
                        <div className="left w-1/2">
                            <H4>Kontakt</H4>
                            <div className="content text-xs leading-relaxed">
                                <div> {props.strasse}</div>
                                <div> {props.ort}</div>
                                <div className="mt-4">{props.phone}</div>
                                <div>
                                    {" "}
                                    <a href="mailto:contacts@german-aesthetics.de"> {props.email}</a>
                                </div>
                            </div>
                        </div>
                        <div className="right w-1/2">
                            <H4>Praxiszeiten</H4>

                            <div className="wrapper flex  text-xs leading-relaxed">
                                <div className="left mr-6 text-left ">
                                    Mo
                                    <br />
                                    Di
                                    <br />
                                    Mi
                                    <br />
                                    Do
                                    <br />
                                    Fr
                                    <br />
                                </div>
                                <div className="right text-left">
                                    <PortableText value={props.value} />
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </motion.nav>
        </>
    );
};

export default Mobile1;
