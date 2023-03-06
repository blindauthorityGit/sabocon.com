import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import MainContainer from "../components/layout/mainContainer";
import Hero from "../components/Hero/hero";
import { ContainerVH100 } from "../components/container";
import HeroIMG from "../assets/hero.png";

export default function Home() {
    return (
        <>
            <Head>
                <title>Site title</title>
            </Head>
            <ContainerVH100 first hFull center klasse="bg-primaryColor">
                <div className="grid grid-cols-12 container m-auto">
                    <div className="col-span-12 sm:col-span-6 flex  flex-col justify-center px-6 sm:px-0">
                        <h4 className="font-block text-3xl mb-4 sm:mb-8 tracking-wide text-white">Hey, we're</h4>
                        <h1 className="font-heading text-6xl sm:text-9xl font-bold tracking-wide text-white">
                            SABOCON
                        </h1>
                    </div>
                    <div className="col-span-12 sm:col-span-6 order-first sm:order-2 relative h-[25rem]">
                        <Image
                            // {...ImagePropsGallery(i)}
                            src={HeroIMG.src}
                            layout="fill"
                            width={840}
                            height={813}
                            loading="lazy"
                            objectFit="cover"
                            alt="hero"
                            className="z-10 left-[6rem!important]"
                        />
                    </div>
                </div>
            </ContainerVH100>
        </>
    );
}
