/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f8f9fa',
          100: '#f1f3f5',
          200: '#e9ecef',
          300: '#dee2e6',
          400: '#ced4da',
          500: '#3B4E59',
          600: '#2d3b44',
          700: '#1f292f',
          800: '#11171a',
          900: '#040505',
        },
        secondary: {
          50: '#faf7f6',
          100: '#f5efed',
          200: '#ebdfdb',
          300: '#e1cfc9',
          400: '#d7bfb7',
          500: '#73513D',
          600: '#583d2e',
          700: '#3d2a1f',
          800: '#221810',
          900: '#070503',
        },
        accent: {
          50: '#fbf9f6',
          100: '#f7f3ed',
          200: '#efe7db',
          300: '#e7dbc9',
          400: '#dfcfb7',
          500: '#A28162',
          600: '#7a614a',
          700: '#524133',
          800: '#29211c',
          900: '#0c0a08',
        },
        neutral: {
          100: '#979588',  /* Warm Gray */
          200: '#D2D7D9',  /* Light Gray */
        }
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out',
        'fade-down': 'fade-down 0.5s ease-out',
        'fade-left': 'fade-left 0.5s ease-out',
        'fade-right': 'fade-right 0.5s ease-out',
      },
      keyframes: {
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
