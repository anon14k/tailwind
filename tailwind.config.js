// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // Ensure Tailwind watches your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: '#3490dc',     // Custom primary color
        secondary: '#ffed4a',   // Custom secondary color
        dark: '#2d3748',        // Custom dark color
      },
      spacing: {
        50: '15rem',
        128: '32rem',  // Custom spacing, for example: p-128
        144: '36rem',  // Custom spacing for larger paddings/margins
      },
      fontFamily: {
        custom: ['Poppins', 'sans-serif'],  // Custom font family
      },
    },
  },
  plugins: [],
}
