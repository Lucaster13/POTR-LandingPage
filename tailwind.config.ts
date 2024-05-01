import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "spinner-stroke": {
          "0%": {
            "stroke-dasharray": "0 150",
            "stroke-dashoffset": "0",
          },
          "47.5%": {
            "stroke-dasharray": "42 150",
            "stroke-dashoffset": "-16",
          },
          "95%,100%": {
            "stroke-dasharray": "42 150",
            "stroke-dashoffset": "-59",
          },
        },
        "icon-stroke": {
          "0%": {
            "stroke-dasharray": "125",
            "stroke-dashoffset": "125",
          },
          "70%, 100%": {
            "stroke-dasharray": "125",
            "stroke-dashoffset": "0",
          },
        },
        "coin-stroke": {
          "0%": {
            "stroke-dasharray": "600",
            "stroke-dashoffset": "600",
          },
          "70%, 100%": {
            "stroke-dasharray": "600",
            "stroke-dashoffset": "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "spinner-stroke": "spinner-stroke 1.5s ease-in-out infinite",
        "icon-stroke": "icon-stroke 5s linear infinite alternate",
        "coin-stroke": "coin-stroke 5s linear infinite alternate",
      },
      colors: {
        dark: "#050505",
        primary: colors.neutral[50],
        normal: { ...colors.neutral, "1000": "#050505" },
        discord: "#5865F2",
        info: colors.sky[500],
        warning: colors.amber[400],
        secondary: colors.neutral[500],
        error: colors.red[400],
      },
      height: {
        "dynamic-screen": "calc(100dvh)",
      },
      skew: {
        15: "15deg",
        24: "24deg",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
