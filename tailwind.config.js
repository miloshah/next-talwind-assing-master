module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      lightModeBg: '#007bff',
      lightModeText: '#ffffff',

      darkModeBg: 'rgb(17,24,39)',
      darkModeText: '#000000',
    },
    boxShadow: {
      'light-button':
        '6px 6px 8px 0 rgba(17,24,39, 0.3), -4px -4px 6px 0 rgba(0, 0, 0, .25)',
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
  darkMode: 'class',
};
