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
          },
          ".ag-theme-quartz": {
            "--ag-active-color": "rgb(29,35,42)",
            "--ag-foreground-color": "rgb(255,255,255)",
            "--ag-background-color": "rgb(29,35,42)",
            "--ag-odd-row-background-color": "rgb(0, 0, 0, 0)",
            "--ag-font-size": "20px",
          }
        },
        light: {
          ...require("daisyui/src/theming/themes")["light"],
          ".backgroundImg": {
            "@apply bg-[url(../../imgs/site-bg-lite.png)]": "",
          },
          ".ag-theme-quartz": {
            "--ag-foreground-color": "rgb(255, 255, 255)",
            "--ag-background-color": "rgb(255, 255, 255)",
            "--ag-header-foreground-color": "rgb(255, 255, 255)",
            "--ag-header-background-color": "rgb(209, 64, 129)",
            "--ag-odd-row-background-color": "rgb(0, 0, 0, 0.03)",
            "--ag-header-column-resize-handle-color": "rgb(126, 46, 132)",
            "--ag-font-size": "17px",
            "--ag-font-family": "monospace",
          }
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
