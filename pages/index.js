import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { ContainerVH100 } from "../components/container";
import { FloaterContact } from "../components/floaters";
import { Card1 } from "../components/cards";
import HeroIMG from "../assets/heroFull.jpg";
import Dots from "../components/svg";
import Icon1 from "../assets/icon1.png";
import Hero3 from "../assets/hero3.png";

// Parallax
import { useParallax } from "react-scroll-parallax";
import { useParallaxController } from "react-scroll-parallax";

// TYPWRITER
import Typewriter from "typewriter-effect";

// Framer Motion
import { motion, useAnimation, AnimatePresence } from "framer-motion";

export default function Home() {
    const { ref } = useParallax({
        speed: 10,
        translateY: [-50, 50],
        translateX: [-60, 50],
    });

    const parallaxController = useParallaxController();
    const [typedOut, setTypedOut] = useState(false);
    const controls = useAnimation();

    const floatRef = useRef();

    useEffect(() => {
        console.log(ref.current);
        console.log(floatRef.current);
    }, [floatRef.current]);

    useEffect(() => {
        if (typedOut) {
            controls.start("visible");
        }
    }, [typedOut, controls]);

    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>
            <ContainerVH100 first hFull center klasse="bg-primaryColor">
                <div className="grid grid-cols-12 container m-auto">
                    <AnimatePresence>
                        {!typedOut && (
                            <motion.div
                                className="col-span-12 sm:col-span-4 flex z-20 flex-col justify-center px-6 sm:px-0"
                                initial={{ y: "-140%", opacity: 1 }}
                                animate={{ y: "-140%", opacity: 1, transition: { duration: 1.5, ease: "easeInOut" } }}
                                exit={{ y: "50%", opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
                            >
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .start()
                                            .changeDelay(80)
                                            .typeString(
                                                `<h4 class="font-block inline-block text-xl md:text-3xl mb-4 sm:mb-8 tracking-wide text-white">Hey, </h4>`
                                            )
                                            .pauseFor(300) // pause for 200ms
                                            .typeString(
                                                `<span class="font-block inline-block text-xl mb-4 sm:mb-8 tracking-wide text-white pl-3">we're</span>`
                                            )
                                            .pauseFor(20) // pause for 100ms
                                            .callFunction(() => {
                                                console.log("String typed out!");
                                                setTypedOut(true);
                                            })
                                            .pauseFor(10) // wait for 0 milliseconds
                                            .deleteAll(); // remove all characters immediately
                                    }}
                                />
                                <h1 className="font-heading invisible text-6xl sm:text-9xl font-bold tracking-wide text-white">
                                    SABOCON
                                </h1>
                            </motion.div>
                        )}

                        {typedOut && (
                            <motion.div
                                className="col-span-12 sm:col-span-4 flex z-20 flex-col justify-center px-6 sm:px-0"
                                initial={{ y: "50%", opacity: 0 }}
                                animate={{
                                    y: "0%",
                                    opacity: 1,
                                    transition: { delay: 0.5, duration: 1.5, ease: "easeInOut" },
                                }}
                            >
                                <h4 className="font-block transition transition-all text-xl md:text-3xl mb-4 sm:mb-8 tracking-wide text-white">
                                    Hey, we're
                                </h4>
                                <motion.h1
                                    className="font-heading text-6xl sm:text-9xl font-bold tracking-wide text-white"
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{
                                        opacity: typedOut ? 1 : 0,
                                        y: typedOut ? 0 : -20,
                                        transition: {
                                            duration: 0.5,

                                            ease: "easeInOut",
                                        },
                                    }}
                                >
                                    SABOCON
                                </motion.h1>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <motion.div
                        ref={ref}
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 1.5, ease: "easeOut" } },
                            hidden: { opacity: 0, x: "50vw" },
                        }}
                        className="col-span-12 sm:col-span-8 order-first sm:order-2 relative h-[400px] xl:h-[820px]"
                    >
                        <Image
                            // {...ImagePropsGallery(i)}
                            src={HeroIMG.src}
                            layout="fill"
                            width={600}
                            height={600}
                            loading="lazy"
                            objectFit="cover"
                            alt="hero"
                            className={`${typedOut ? "block" : "opacity-0"}`}
                            onLoad={() => parallaxController.update()}
                        />
                    </motion.div>
                </div>
                <FloaterContact></FloaterContact>
                <section className="absolute bottom-12 hidden sm:block">
                    <Dots></Dots>
                </section>
            </ContainerVH100>
            <ContainerVH100 first hFull center klasse="bg-white">
                <div className="container grid grid-cols-12 mx-auto">
                    {Array.from({ length: 3 }).map((_, index) => (
                        <Card1 klasse="bg-[#efefef]" image={Icon1.src}>
                            Bubu
                        </Card1>
                    ))}
                </div>
            </ContainerVH100>
        </>
    );
}
