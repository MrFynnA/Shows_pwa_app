/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "dark-blue": "#030d29",
                "light-white": "rgba(255,255,255,0.17)",
            },
            keyframes: {
                pop: {
                    '0%': { transform: 'scale(0)' },
                    '100%': { transform: 'scale(1)' },
                }
            },
            animation: {
                'ping-slow': 'ping 1.5s cubic-bezier(0,0,0.2,1) infinite'
            }
        },
    },
    plugins: [],
}