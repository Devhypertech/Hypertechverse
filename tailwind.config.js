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
            animation: {
                'marquee-x': 'marquee-x 20s linear infinite',
                'marquee-x-reverse': 'marquee-x-reverse 20s linear infinite',
                'marquee-x-fast': 'marquee-x 10s linear infinite',
                'marquee-x-reverse-fast': 'marquee-x-reverse 10s linear infinite',
                'text-bounce': 'text-bounce 3s ease-in-out infinite',
            },
            keyframes: {
                'marquee-x': {
                    '0%': { transform: 'translateX(100%)' },
                    '100%': { transform: 'translateX(-100%)' },
                },
                'marquee-x-reverse': {
                    '0%': { transform: 'translateX(-100%)' },
                    '100%': { transform: 'translateX(100%)' },
                },
                'text-bounce': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
            },
        },
    },
    plugins: [],
};
