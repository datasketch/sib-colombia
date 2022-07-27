/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: ['text-white'],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        lato: ['Lato', 'sans-serif']
      },
      backgroundImage: {
        'banner-home': "url('/images/home-banner.png')",
        'banner-footer': "url('/images/footer-banner.svg')"
      },
      screens: {
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }

        '3xl': '1920px'
        // => @media (min-width: 1920px) { ... }
      }
    }
  },
  plugins: []
}
