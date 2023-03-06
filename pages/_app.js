import "../styles/globals.css";
import { MobileBar1 } from "../components/mobileBar";
import { Menu1 } from "../components/menues";
//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { menuItems, socialMedia } from "../components/menues/config";
import Logo from "../assets/logoFin.svg";

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Menu1
                logo={Logo.src}
                menuItems={menuItems}
                socialMedia={socialMedia}
                burgerIcon={<RxHamburgerMenu />}
            ></Menu1>
            <MobileBar1
                onClick={() => {
                    console.log("IS CLICKED");
                    setIsOpen(true);
                }}
            ></MobileBar1>

            <Component {...pageProps} />
        </>
    );
}

export default MyApp;
