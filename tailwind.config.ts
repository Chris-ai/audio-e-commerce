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
        "primary-orange": "#D87D4A",
        "secondary-orange": "#FBAF85",
        graphite: "#101010",
        whitish: "#FAFAFA",
        "light-gray": "F1F1F1",
      },
      fontSize: {
        heading: "3.5rem", // 56px
        "sub-heading": "2.5rem", // 40px
        xxlarge: "2rem", // 32px,
        xlarge: "1.75rem", // 28px
        large: "1.5rem", // 24px
        regular: "1.125rem", // 18px
        base: "0.875rem", // 14px
        small: "0.8125rem", // 13px
      },
    },
  },
};
export default config;
