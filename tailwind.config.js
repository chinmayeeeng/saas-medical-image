/** @type {import('tailwindcss').Config} */
module.exports = {
    // Specify the paths to all template files in your project
    content: [
      "./src/**/*.{js,jsx,ts,tsx}", // Include all files in src/ for Tailwind classes
      "./public/index.html",        // Include the main HTML file for scanning
    ],
    theme: {
      extend: {
        // Extend Tailwind's default theme with custom colors, fonts, and spacing
        colors: {
          // Custom color palette
          primary: "#4ADE80", // Teal
          secondary: "#A78BFA", // Purple
          background: "#1A1A1A", // Dark background
          card: "#2A2A2A", // Card background
          textPrimary: "#FFFFFF", // Light text
          textSecondary: "#C7C7C7", // Softer grey text
          border: "#3A3A3A", // Border color
          hoverBackground: "#373737", // Hover background color
        },
        fontFamily: {
          // Custom fonts
          sans: ["Arial", "sans-serif"],
          body: ["Roboto", "Arial", "sans-serif"],
          heading: ["Poppins", "Arial", "sans-serif"], // Font for headings
        },
        spacing: {
          // Custom spacing
          "72": "18rem",
          "84": "21rem",
          "96": "24rem",
          "108": "27rem", // Additional spacing for large elements
        },
        borderRadius: {
          // Custom border-radius values
          xl: "1.5rem",
          "2xl": "2rem",
          "3xl": "2.5rem", // Additional for extra rounded designs
        },
        boxShadow: {
          // Custom shadow styles
          card: "0 4px 8px rgba(0, 0, 0, 0.2)", // Card shadow
          button: "0 2px 4px rgba(0, 0, 0, 0.2)", // Button shadow
          header: "0 2px 6px rgba(0, 0, 0, 0.3)", // Header shadow
        },
        screens: {
          // Custom responsive breakpoints
          xs: "480px", // Extra small devices
          "3xl": "1600px", // Extra large screens
        },
      },
    },
    plugins: [
      // Add any plugins you need
      require("@tailwindcss/forms"), // Tailwind Forms plugin for styling form elements
      require("@tailwindcss/typography"), // Tailwind Typography plugin for better text styling
    ],
  };
  