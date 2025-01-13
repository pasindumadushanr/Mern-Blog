/** @type {import('tailwindcss').Config} */
import flowbite from "flowbite-react/tailwind";


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ...flowbite.content(), // Use the spread operator for Flowbite content paths
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite.plugin(), // Add Flowbite plugin
  ],
};
