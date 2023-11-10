/** @type {import('tailwindcss').Config} */
module.exports = {
   content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
   theme: {
      extend: {
         colors: {
            vuejs: {
               100: "#e8af13",
               900: "#4d4635",
            },
         },
      },
   },
   plugins: [],
};
