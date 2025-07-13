/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
        fontFamily: {
        cal: ['"Cal Sans"', 'sans-serif'],
      },
      perspective: {
        1000: '1000px',
      },
      backgroundSize: {
        '300': '300% 300%',
      },
      transformOrigin: {
        center: 'center',
      },
      animation: {
        text: 'text 5s ease infinite',
        shine: 'shine 3s linear infinite',
        gradientMove: 'gradientMove 6s ease-in-out infinite',
        'ping-slow': 'ping 1.5s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      animation: {
        darkBlueMove: 'darkBlueMove 8s ease-in-out infinite',
        lightGradientShift: 'gradientMove 6s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
        shine: {
          '0%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
          '100%': {
            backgroundPosition: '0% 50%',
          },
        },
         gradientMove: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}