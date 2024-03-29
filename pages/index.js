import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { ContainerVH100 } from "../components/container";
import { FloaterContact } from "../components/floaters";
import { Card1 } from "../components/cards";
import HeroIMG from "../assets/heroFull.jpg";
import Dots from "../components/svg";
import Icon1 from "../assets/icon1.png";
import Icon2 from "../assets/icon2.png";
import Icon3 from "../assets/icon3.png";
import About from "../assets/about.png";
import BottomBG from "../assets/bottomBG.jpg";
import Favicon from "../public/favicon.svg";

//functions
import { useBreakpoints } from "../functions/useBreakPoints";

// Parallax
import { useParallax } from "react-scroll-parallax";
import { useParallaxController } from "react-scroll-parallax";

// TYPWRITER
import Typewriter from "typewriter-effect";

// Framer Motion
import { motion, useAnimation, AnimatePresence } from "framer-motion";

// ICONS
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Home() {
    const { ref } = useParallax({
        translateY: [-50, 50],
        translateX: [-60, 50],
    });

    const parallaxController = useParallaxController();
    const [typedOut, setTypedOut] = useState(false);
    const [letsGo, setLetsGo] = useState(false);
    const controls = useAnimation();

    const { isMobile, isTablet, isDesktop } = useBreakpoints();

    const floatRef = useRef();

    const cats = ["creative technology,", "graphic design &", "international branding"];
    const icons = [Icon1.src, Icon2.src, Icon3.src];

    useEffect(() => {
        setTimeout(() => {
            console.log(isMobile, isTablet, isDesktop);
            setLetsGo(true);
        }, 100);
    }, []);

    useEffect(() => {
        if (typedOut) {
            controls.start("visible");
        }
    }, [typedOut, controls]);

    return (
        <>
            <Head>
                <title>Sabocon GmbH - your agency</title>
                <meta
                    name="description"
                    content={
                        "We are a creative technology, graphic design $ international branding agency based in Frankfurt Germany"
                    }
                />

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href={Favicon.src} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://www.sabocon.com" />
                {/* <meta
                    property="og:image"
                    content={dataSetting.seo.advancedSEO.ogImage ? urlFor(dataSetting.seo.advancedSEO.ogImage) : null}
                />
                <meta
                    property="og:description"
                    content={
                        dataSetting.seo.advancedSEO.ogDescription ? dataSetting.seo.advancedSEO.ogDescription : null
                    }
                /> */}
                <meta property="og:site_name" content="PIZSabocon GmbH - your agency" />
                <meta property="og:locale" content="en_EN" />
            </Head>
            <ContainerVH100 first hFull center klasse="bg-primaryColor lg:min-h-screen">
                <div className="grid grid-cols-12 container m-auto">
                    <AnimatePresence>
                        {!typedOut && letsGo && (
                            <motion.div
                                className="col-span-12 sm:col-span-4 flex z-20 flex-col justify-center px-6 sm:px-0"
                                initial={{ y: isDesktop ? "0" : "-140%", opacity: 1 }}
                                animate={{
                                    y: isDesktop ? "0" : "-140%",
                                    opacity: 1,
                                    transition: { duration: 1.5, ease: "easeInOut" },
                                }}
                                exit={{ y: "50%", opacity: 0, transition: { duration: 1.5, ease: "easeInOut" } }}
                            >
                                <Typewriter
                                    onInit={(typewriter) => {
                                        typewriter
                                            .start()
                                            .changeDelay(80)
                                            .typeString(
                                                `<h4 class="font-block inline-block text-xl md:text-3xl mb-2 sm:mb-8 tracking-wide text-white">Hey, </h4>`
                                            )
                                            .pauseFor(300) // pause for 200ms
                                            .typeString(
                                                `<span class="font-block inline-block text-xl md:text-3xl mb-2 sm:mb-8 tracking-wide text-white pl-3">we're</span>`
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
                                    y: isDesktop ? "0" : "-30%",
                                    opacity: 1,
                                    transition: { delay: 0.5, duration: 1.5, ease: "easeInOut" },
                                }}
                            >
                                <h4 className="font-block transition transition-all text-xl md:text-3xl mb-2 sm:mb-6 tracking-wide text-white">
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
                        initial="hidden"
                        animate={controls}
                        variants={{
                            visible: {
                                opacity: 1,
                                x: 0,
                                y: isDesktop ? "0" : "-10%",
                                transition: { delay: 0.8, duration: 1.5, ease: "easeOut" },
                            },
                            hidden: { opacity: 0, x: "50vw", y: "1rem" },
                        }}
                        className="col-span-12  sm:col-span-8 order-first sm:order-2 relative "
                    >
                        <div ref={ref} className="relative h-[400px] xl:h-[820px]">
                            <Image
                                // {...ImagePropsGallery(i)}

                                src={HeroIMG.src}
                                layout="fill"
                                width={600}
                                height={600}
                                loading="lazy"
                                objectFit="contain"
                                alt="hero"
                                className={`${typedOut ? "block" : "opacity-0 "}`}
                                onLoad={() => parallaxController.update()}
                            />
                        </div>
                    </motion.div>
                </div>
                <FloaterContact></FloaterContact>
                <section className="absolute bottom-12 hidden sm:block">
                    <Dots></Dots>
                </section>
            </ContainerVH100>
            <ContainerVH100 center klasse="bg-white pt-0 flex-col md:py-16">
                <div
                    data-aos="fade-down"
                    className="font-headings text-[#1b33363d] sm:text-6xl font-bold tracking-wide text-center sm:mb-4"
                >
                    a
                </div>
                <div className="container grid grid-cols-12 mx-auto">
                    {cats.map((e, index) => (
                        <Card1
                            animation={index % 2 === 0 ? "slide-left" : "slide-right"}
                            order={index % 2 === 0 ? "order-0 md:order-0" : "order-1 md:order-0"}
                            klasse={index % 2 === 0 ? "bg-lightGrey" : "bg-primaryColor text-white"}
                            imgKlasse={index % 2 === 0 ? "mix-blend-darken" : ""}
                            image={icons[index]}
                        >
                            {e}
                        </Card1>
                    ))}
                    <motion.h2
                        data-aos="fade-up"
                        className="font-heading mt-6 md:mt-16 text-3xl text-center col-span-12 sm:text-6xl font-bold tracking-wide "
                    >
                        agency based in Frankfurt,
                        <br /> Germany
                    </motion.h2>
                </div>
            </ContainerVH100>
            <ContainerVH100 center klasse="bg-white pt-0">
                <div className="grid grid-cols-12 container m-auto px-6">
                    <div className="col-span-12 md:col-span-6 lg:flex lg:flex-col lg:justify-center">
                        <motion.h2 className="font-heading lg:mb-12 hidden sm:block mt-6 text-3xl text-center sm:text-left col-span-12 sm:text-6xl font-bold tracking-wide ">
                            How we see ourselves
                        </motion.h2>
                        <p className="font-block leading-relaxed">
                            We’re a team of designers, technologists, musicians and futurists.
                            <br /> <br /> Rooted in narrative and built on collaboration. We partner with modern brands
                            and individuals by developing holistic solutions through strategy, design and direction.{" "}
                            <br /> <br /> We specialize in{" "}
                            <strong>
                                {" "}
                                digital products, applications, designing visual identities, websites, motion graphics,
                                events, promotions and interactive installations
                            </strong>{" "}
                            for a wide range of clients.
                        </p>
                    </div>
                    <div
                        data-aos="fade-up"
                        className="col-span-12 md:col-span-6 mb-8 p-12 relative h-[300px] md:h-[650px] order-first md:order-last"
                    >
                        <Image
                            // {...ImagePropsGallery(i)}

                            src={About.src}
                            layout="fill"
                            loading="lazy"
                            objectFit="cover"
                            alt="hero"
                            className={``}
                            onLoad={() => parallaxController.update()}
                        />
                    </div>
                </div>
            </ContainerVH100>
            <ContainerVH100 center klasse="bg-white pt-0 px-8 lg:px-0 lg:mb-24">
                <div className="grid grid-cols-12 container m-auto lg:px-48">
                    <div className="col-span-12 md:col-span-12">
                        <motion.h2 className="font-heading sm:text-6xl mb-8 mt-6 text-3xl text-center col-span-12 sm:text-9xl font-bold tracking-wide ">
                            Who we worked for
                        </motion.h2>
                        <p className="font-block leading-relaxed">
                            alldays, danone activia, bayer, communisis, deutsche bank ag, xerox, sunny delight, cws,
                            adidas, pampers europe, lacoste, tide, deutscher gewerkschaftsbund, reckitt benckiser,
                            deutsche post ag, oral b, airwick, ebay, fun factory, pampers deutschland, braun, caparol,
                            goldwell, roma, fliegl, lomex media, baumhaus, goliath toys, procter&gamble, herisson vert,
                            hugo boss, max factor, actonel, swiffer, valentine, laura biagiotti, 4c, connecta ag,
                            globus, mattel, blendamed, giorgio beverly hills, braun, douglas, ellen betrix, zdf, abb
                            robotics, baldessarini parfume, hilscher north america, sk comepact disc, sony music, cives
                            in hagen, milupa, wella, fisher price, nacht der löwen, dronco ag, celine dion perfumes,
                            gucci, sony, always, beiersdorf, schwarzkopf, punica, deutsches filmmuseum frankfurt, sony
                            playstation, epos media, pringles, hayner burgfest, willi bogner parfumes, dachser, artikon,
                            metro, wash&go, connex film, smavicon, woolworth, music supervising, margaret astor, real,
                            charmin, coty, tempo, freibank, leo burnett, hugo woman, behrendt design, messe berlin,
                            link, swiffer, ea games, nfc21, airfy, clearasil, fairy, werbe weischer, lenor, wal mart,
                            bounty, ariel, kingstreet media, dm, mpo, auto sportivo, topware games, luebbe, kandoo,
                            goliath games, cdagents, printtechnologics, calyx records, mme, mr proper, nnp, nürnberg
                            gummi, just4kids, truck center hauser, stadt dreieich, cda media city leipzig, das modular,
                            cinram, clairol, herbal essences, sk-cd, jumbo games, tempo kids, just entertainment,
                            wohnton, toom, ministerium music, communisis, verbal arts, emmo biz records, largo land,
                            ariel, kompuphonik records, oil of olaz, bagtap, thag’s agent, palan musicverlag,
                            bestangels, boss elements, sony broadcast, nestle xpress, baxxbeat music, herver leger
                            parfume, head&shoulders, lenor downy, dr. john, inception records, bridge entertainment,
                            hca, dogtap, secret, citi bank, macutex, dreieich museum, behrendtdesign, plastic frog
                            records, mccann erickson, wash&go, edeka, gewerbeverein dreieich, vivace music, vidioten,
                            bauer und guse, minimal, pan dacom, schlecker, fresenius, idea, bag tap, dash, fiebig,
                            kilian druck, hayner weihnacht, dr. lantzsch, gillette, freibank, pantene, profilwerkstatt,
                            moodpack, stadtnetz dreieich, sabocon free wifi, pleasure park, mareike totzek coach, pro
                            pilots, königskinder music, geschichts- und heimatverein dreieichenhain, ingineurbüro
                            rossbach, magformers, nfc21, ffpa, samsung, gilette, arti-group, duracell, gts trade and
                            services, baumhaus, bickmann werbeideen, …
                        </p>
                    </div>
                </div>
            </ContainerVH100>
            <ContainerVH100
                style={{
                    background: "#f67a2f",
                    padding: "0!important",
                }}
                hFull
                klasse="bg-white pt-0 py-0 relative mt-12 sm:mt-0 bg-left sm:bg-[center!important] bg-cover"
            >
                <div
                    style={{
                        background: "#f67a2f",
                        backgroundImage: `url(${BottomBG.src})`,
                        backgroundRepeat: "no-repeat",

                        padding: "0!important",
                    }}
                    className="grid grid-cols-12 container m-auto px-6 h-full relative"
                >
                    <div className="col-span-6 h-36"></div>
                    <div className="col-span-12 md:col-span-6 bg-white h-[100%] sm:h-[93%] rounded-t-3xl sm:rounded-b-3xl sm:rounded-t-none p-8 sm:p-24">
                        <motion.h2 className="font-heading mb-8 mt-6 text-3xl uppercase col-span-12 sm:text-6xl font-bold tracking-wide ">
                            Let's <span className="text-primaryColor">create</span> something together
                        </motion.h2>
                        <div className="flex items-center space-x-6 sm:space-x-8 mt-8 sm:mt-16">
                            <FaPhoneAlt className="text-primaryColor text-xl " />
                            <span className="text-sm sm:text-xl font-block">0049 / 6103-9849-37</span>
                        </div>

                        <div className="flex items-center space-x-6 sm:space-x-8">
                            <FaEnvelope className="text-primaryColor text-xl " />
                            <span className="ttext-sm sm:text-xl font-block">contact[at]sabocon.com</span>
                        </div>

                        <div className="flex space-x-6 sm:space-x-8 mt-8">
                            <FaMapMarkerAlt className="text-primaryColor text-xl " />
                            <span className="text-sm sm:text-xl  font-block">
                                <strong>Sabocon GmbH </strong> <br /> Alte Bogengasse 25 <br /> 63303 Dreieich <br />{" "}
                                Germany
                            </span>
                        </div>
                        <div className="links mt-10 font-block text-xs">
                            <Link href="/imprint">
                                <a className="pr-8 text-block">Imprint</a>
                            </Link>
                            <Link href="/privacy">
                                <a>Privacy policy</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </ContainerVH100>
            <div className="h-16 sm:h-0"></div>
        </>
    );
}
