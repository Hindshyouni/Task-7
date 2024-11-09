import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
     
      colors: {
        "myprimary" :"#FA8B02",
        "myblackk" : "#333333",
      },
      backgroundColor: {
        'fim': 'rgba(255, 255, 255, 0.2)',
      },
      backdropFilter: {
        'blur-sm': 'blur(5px)',
        'blur-md': 'blur(10px)',
      },
      padding: {
        '250px': '250px',
      }
      
    },
  },
  plugins: [],
};
export default config;
