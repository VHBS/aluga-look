import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        pink: '#F205B3',
        main: '#bd52eb',
        mainAccent: '#a81be4', // not needed for shadcn components
        overlay: 'rgba(0,0,0,0.8)', // background color overlay for alert dialogs, modals, etc.
  
        // light mode
        bg: '#e3dff2',
        text: '#000',
        border: '#000',
  
        // dark mode
        darkBg: '#1D1F27',
        darkText: '#eeefe9',
        darkBorder: '#000',
        secondaryBlack: '#1b1b1b', // opposite of plain white, not used pitch black because borders and box-shadows are that color 
      },
      borderRadius: {
        base: '0px'
      },
      boxShadow: {
        light: '6px 6px 0px 0px #000',
        dark: '6px 6px 0px 0px #000',
        "dark-0": '0px 6px 0px 0px #000',

      },
      translate: {
        boxShadowX: '6px',
        boxShadowY: '6px',
        reverseBoxShadowX: '-6px',
        reverseBoxShadowY: '-6px',
      },
      fontWeight: {
        base: '500',
        heading: '900',
      },
      strokeWidth: {
        '3': '3',  // Novo valor de stroke
        '4': '4',  // Outro valor de stroke
        '5': '5',  // Etc.
        '8': '8',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
