/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // `src` papkasidagi barcha fayllarni qamrab oladi
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(62.37deg, #ffffff36 -7.76%, #0000000f 41.78%, #5050500d 102.46%)',
      },
    },
  },
  plugins: [],
};
