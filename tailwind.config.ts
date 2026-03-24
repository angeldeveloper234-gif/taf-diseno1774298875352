import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0A0A0A",
                surface: "#121212",
                foreground: "#F5F5F5",
                primary: {
                    DEFAULT: "#BCA37F", // Brushed Bronze
                    foreground: "#0A0A0A",
                },
                accent: {
                    bronze: "#BCA37F",
                    charcoal: "#1A1A1A",
                },
                border: "rgba(255,255,255,0.1)",
            },
            fontFamily: {
                sans: ["Manrope", "sans-serif"],
                display: ["Cormorant Garamond", "serif"],
            },
        },
    },
    plugins: [],
}

export default config