import "../styles/globals.css";
import { MobileBar1 } from "../components/mobileBar";
import { Menu1 } from "../components/menues";
//ASSETS
import { RxHamburgerMenu } from "react-icons/rx";
import { TbGridDots } from "react-icons/tb";
import { menuItems, socialMedia } from "../components/menues/config";
import Logo from "../assets/logoFinNeu.svg";
import { ParallaxProvider } from "react-scroll-parallax";
import CookieConsent, { Cookies } from "react-cookie-consent";

function MyApp({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            <CookieConsent
                location="bottom"
                buttonText="OK"
                cookieName="myAwesomeCookieName2"
                style={{ background: "#2B373B" }}
                buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
                expires={150}
            >
                This website uses cookies to enhance the user experience.{" "}
            </CookieConsent>
            <Menu1 logo={Logo.src} menuItems={[]} socialMedia={socialMedia} burgerIcon={<TbGridDots />}></Menu1>
            <MobileBar1
                onClick={() => {
                    console.log("IS CLICKED");
                    setIsOpen(true);
                }}
            ></MobileBar1>

            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

export default MyApp;
