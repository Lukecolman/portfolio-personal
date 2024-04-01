/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        noto: ["var(--font-Noto_Sans_JP)"],
        crimson: ["var(--font-Crimson_Text)"],
        poppins: ["var(--font-Poppins)"],
        haetten: ["var(--font-Haettenschweiler)"]

      },
      colors: {
        'lk': {
          'red': {
            '50': '#FEE1E1',
            '100': '#ffdede',
            '200': '#ffc3c3',
            '300': '#ff9999',
            '400': '#ff605f',
            '500': '#ff2e2d',
            '600': '#f51918',
            '700': '#ce0807',
            '800': '#aa0b0a',
            '900': '#8c1110',
            '950': '#4d0202',
        },
          grey: '#222222',
          white: '#F9F9F9',
        },
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
    },
  },
  plugins: [],
};
