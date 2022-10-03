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
      content: {
        arrow: 'url("assets/img/arrow.png")',
        arrowT: 'url("assets/img/arrow1.png")',
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
