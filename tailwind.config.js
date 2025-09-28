/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'recent-grotesk': ['Recursive', 'Recent Grotesk', 'Arial', 'Helvetica', 'sans-serif'],
            },
            // keyframes: {
            //     marquee: {
            //         "0%": { transform: "translateX(0)" },
            //         "100%": { transform: "translateX(-50%)" }, // move by one image width
            //     },
            // },
            animation: {
                marquee: "marquee 2s linear infinite",
            },
        },
    },
    plugins: [],
};
