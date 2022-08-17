/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  safelist: [
    'slick-list',
    'slick-arrow',
    'slick-prev',
    'slick-next',
    'slick-disabled',
    'slick-dots',
    'slick-active',
    'w-[13.5px]',
    'h-[23.62px]'
  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      },
      backgroundImage: {
        'banner-home': "url('/images/home-banner.png')",
        'banner-home-2': "url('/images/home-banner-2.png')",
        'banner-footer': "url('/images/footer-banner.svg')"
      },
      colors: {
        'white-2': '#FBFBFB',
        'white-3': '#F1F1F1',
        'blue-green': '#005054',
        'black-2': '#000000CC',
        'black-3': '#00000066',
        lemon: '#09A274',
        'gray-2': '#F4F4F4',
        'yellow-green': '#C2F284'
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
