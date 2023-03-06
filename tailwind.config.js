// /** @type {import('tailwindcss').Config} */

const { fontFamily } = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        screens: {
            sm: "640px",
            md: "768px",
            lg: "1024px",
            xl: "1200px",
            "2xl": "1436px",
            "3xl": "1921px",
        },
        container: {
            sm: "100%",
            md: "960px",
            lg: "1364px",
            xl: "2368px",
        },
        extend: {
            fontFamily: {
                ...fontFamily,
                heading: ["Josefin Sans", "sans-serif"],
                block: ["Fira Mono", "monospace"],
            },
            colors: {
                blackText: {
                    DEFAULT: "#1B1B1C",
                    50: "#757579",
                    100: "#6B6B6F",
                    200: "#57575A",
                    300: "#434346",
                    400: "#2F2F31",
                    500: "#1B1B1C",
                    600: "#000000",
                    700: "#000000",
                    800: "#000000",
                    900: "#000000",
                },
                darkGrey: "#494949",
                primaryColor: {
                    DEFAULT: "#FE8D3C",
                    50: "#FFF8F3",
                    100: "#FFECDE",
                    200: "#FFD4B6",
                    300: "#FEBC8D",
                    400: "#FEA565",
                    500: "#FE8D3C",
                    600: "#FE6C04",
                    700: "#C95401",
                    800: "#913D01",
                    900: "#592500",
                },
                lightPrimary: "#E6E4DD",
                greenColor: "#6DC593",
                redColor: "#FB5012",
            },
            height: {
                "calc-70px": "calc(100% - 70px)",
            },
        },
    },
    plugins: [],
};
