import { FaFacebook, FaInstagram } from "react-icons/fa";

const menuItems = [
    {
        title: "Kurse",
        slug: "kurse",
        subMenu: true,
        subMenuItems: [
            {
                title: "Winterakademie 2023",
                slug: "about",
            },
            {
                title: "Frühlingsakademie 2023",
                slug: "sammlungen",
            },
            {
                title: "Sommerakademie 2023",
                slug: "https://cdn.sanity.io/files/7all625u/dev/5a6f73b99aceb4c681ca63eb1b1ac1f447064ae7.pdf",
                external: true,
            },
            {
                title: "Herbstakademie 2023",
                slug: "blog",
            },
        ],
    },
    {
        title: "Galerie",
        slug: "besuch",
        subMenu: false,
    },
    {
        title: "News",
        slug: "events",
        subMenu: false,
    },
    {
        title: "Kontakt",
        slug: "kontakt",
        subMenu: false,
    },
];
const socialMedia = [
    {
        title: "Facebook",
        link: "https://www.facebook.com/SABOCONagency",
        icon: <FaFacebook></FaFacebook>,
    },
    {
        title: "Inbstagram",
        link: "https://www.instagram.com/sabocon/",
        icon: <FaInstagram></FaInstagram>,
    },
];

export { menuItems, socialMedia };
