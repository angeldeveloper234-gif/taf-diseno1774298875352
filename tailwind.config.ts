import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: "#0F1115",
                foreground: "#fafafa",
                primary: {
                    DEFAULT: "#E5D3B3", // TAF Diseño Beige/Gold
                    foreground: "#000000",
                },
                accent: {
                    amber: "#E5D3B3",
                    steel: "#94A3B8",
                },
                border: "rgba(255,255,255,0.08)",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                display: ["Montserrat", "sans-serif"],
                tech: ["Orbitron", "sans-serif"],
            },
        },
    },
    plugins: [],
}

export default config