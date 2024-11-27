/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                rtbmn: ['"Roboto Mono"', "sans-serif"],
            },
            colors: {
                shark: {
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#888888",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#4f4f4f",
                    800: "#454545",
                    900: "#3d3d3d",
                    950: "#222222",
                },
                "mine-shaft": {
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#888888",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#4f4f4f",
                    800: "#454545",
                    900: "#333333",
                    950: "#262626",
                },
                chicago: {
                    50: "#f6f6f6",
                    100: "#e7e7e7",
                    200: "#d1d1d1",
                    300: "#b0b0b0",
                    400: "#888888",
                    500: "#6d6d6d",
                    600: "#5d5d5d",
                    700: "#555555",
                    800: "#454545",
                    900: "#3d3d3d",
                    950: "#262626",
                },
            },
            backgroundImage: {
                banner: "url('@images/Banner.jpeg')",
                "footer-texture": "url('/img/footer-texture.png')",
            },
        },
    },
    plugins: [],
};
