const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    `./src/**/*.{js,ts,jsx,tsx}`,
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
    '../../**/node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brandblue: colors.blue[500],
        brandred: colors.red[500],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
