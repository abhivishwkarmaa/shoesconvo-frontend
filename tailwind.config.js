export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#e53e3e',
          blush: '#f4dfdb',
          text: '#1a1a1a',
          muted: '#74787c',
          line: '#e4e5ee',
        },
      },
      fontFamily: {
        inter: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        poppins: ['Poppins', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        card: '0 18px 50px rgba(0, 0, 0, 0.06)',
      },
    },
  },
  plugins: [],
};
