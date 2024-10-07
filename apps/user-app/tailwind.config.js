/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "bg-main": "#000000",
        "bg-secondary": "#111111",
        "text-primary": "#FFFFFF",
        "text-secondary": "#CCCCCC",
        header: "#0A0A0A",
        nav: {
          DEFAULT: "#141414",
          hover: "#282828",
        },
        card: {
          bg: "#0A0A0A",
          border: "#282828",
        },
        button: {
          primary: "#FFFFFF",
          secondary: "#333333",
          text: "#000000",
          hover: "#EEEEEE",
        },
        accent: {
          1: "#3498db",
          2: "#e74c3c",
          3: "#2ecc71",
          4: "#f39c12",
        },
        status: {
          success: "#2ecc71",
          warning: "#f39c12",
          error: "#e74c3c",
        },
      },
    },
  },
  plugins: [],
};
