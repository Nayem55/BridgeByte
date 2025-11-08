/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // Enables dark mode via class (recommended)
  theme: {
    extend: {
      colors: {
        // Core Palette
        bg: "#0F0B2B",
        bg2: "#1C1750",
        card: "#18133D",
        surface: "#1A152E", // Slightly lighter than bg for cards

        // Text
        textColor: "#EAEAF2",
        muted: "#B8B6CE",
        "muted-light": "#9E9CB6",

        // Accents
        accent1: "#8A3FFC",
        accent2: "#1FB6FF",
        "accent1/50": "rgba(138, 63, 252, 0.5)",
        "accent2/50": "rgba(31, 182, 255, 0.5)",

        // Glassmorphism
        glass: "rgba(255, 255, 255, 0.06)",
        "glass-border": "rgba(255, 255, 255, 0.12)",
        "glass-glow": "rgba(138, 63, 252, 0.25)",
      },

      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },

      // Smooth Animations
      animation: {
        "pulse-slow": "pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        wave1: "wave1 8s ease-in-out infinite",
        wave2: "wave2 10s ease-in-out infinite reverse",
        wave3: "wave3 12s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },

      keyframes: {
        wave1: {
          "0%, 100%": {
            d: 'path("M0,180 Q300,80 600,180 T1200,180 L1200,700 L0,700 Z")',
          },
          "50%": {
            d: 'path("M0,160 Q300,60 600,160 T1200,160 L1200,700 L0,700 Z")',
          },
        },
        wave2: {
          "0%, 100%": {
            d: 'path("M0,300 Q300,200 600,300 T1200,300 L1200,700 L0,700 Z")',
          },
          "50%": {
            d: 'path("M0,280 Q300,180 600,280 T1200,280 L1200,700 L0,700 Z")',
          },
        },
        wave3: {
          "0%, 100%": {
            d: 'path("M0,450 Q300,350 600,450 T1200,450 L1200,700 L0,700 Z")',
          },
          "50%": {
            d: 'path("M0,430 Q300,330 600,430 T1200,430 L1200,700 L0,700 Z")',
          },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      backdropBlur: {
        xs: "2px",
      },

      boxShadow: {
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
        "glass-lg": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        glow: "0 0 30px rgba(138, 63, 252, 0.3)",
        "glow-lg": "0 0 60px rgba(138, 63, 252, 0.4)",
      },

      borderRadius: {
        "4xl": "2rem",
        "5xl": "3rem",
      },

      transitionDuration: {
        400: "400ms",
      },
    },
  },
  plugins: [
    // Optional: Add if you want advanced utilities
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/typography'),
  ],
};
