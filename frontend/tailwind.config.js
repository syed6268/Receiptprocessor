// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
  
        pink: {
          100: '#FFE4E6',
          200: '#FFC0CB',
          300: '#FF9EAD',
        },
        white: {
          100: '#FFFFFF',
          200: '#F8F9FA',
          300: '#F0F1F2',
        },
      },
    },
  },
  plugins: [],
}
