/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        title: "'brutaltype-black'",
        text: "'CoreSansE'",
        link: "'MyriadPro'",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
