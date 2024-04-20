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
    },
  },
  daisyui: {
    themes: [
      {
        dark: {
          ...require("daisyui/src/theming/themes")["dark"],
          ".backgroundImg": {
            "@apply bg-[url(../../imgs/site-bg.png)]": "",
          }
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".backgroundImg": {
            "@apply bg-[url(../../imgs/site-bg-lite.png)]": "",
          }
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
