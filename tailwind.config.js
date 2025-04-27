/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
        "node_modules/flowbite/**/*.js",
      ],
    darkMode: 'class', // 🌙 Karanlık mod için bu satırı ekliyoruz
    theme: {
      extend: {
        colors: {
          primary: {
            50: "#eff6ff",
            100: "#dbeafe",
            200: "#bfdbfe",
            300: "#93c5fd",
            400: "#60a5fa",
            500: "#3b82f6",
            600: "#2563eb",
            700: "#1d4ed8",
            800: "#1e40af",
            900: "#1e3a8a",
            950: "#172554",
          },
        },
        animation: {
          bounce: 'bounce 2s infinite',
          scroll: 'scroll 1.5s infinite',
          drop: 'drop 2s infinite',
        },
        keyframes: {
          bounce: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(-10px)' },
          },
          scroll: {
            '0%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(6px)' },
            '100%': { transform: 'translateY(0)' },
          },
          drop: {
            '0%': { top: '5px', opacity: '0' },
            '30%': { top: '10px', opacity: '1' },
            '100%': { top: '20px', opacity: '0' },
          },
        },
      },
    },
    plugins: [
        require('flowbite/plugin')
    ],
  }