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
    'h-[23.62px]',
    'bg-footer-orange',
    'bg-footer-green',
    'hover:text-flame',
    'hover:text-dartmouth-green',
    'bg-banner-tolima',
    'bg-banner-narino',
    'bg-banner-santander',
    'bg-banner-boyaca',
    'bg-banner-colombia',
    'bg-banner-acerca-de',
    'bg-banner-glosario',
    'bg-banner-metodologia',
    'bg-banner-preguntas-frecuentes',
    'bg-banner-prensa',
    'bg-banner-publicadores'

  ],
  theme: {
    extend: {
      fontFamily: {
        'barlow-condensed': ['Barlow Condensed', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        inter: ['inter', 'sans-serif']
      },
      backgroundImage: {
        'banner-home': "url('/images/headers/banner-home.png')",
        'banner-home-2': "url('/images/home-banner-2.png')",
        'banner-footer': "url('/images/footer-banner.svg')",
        'footer-2022': "url('/images/footer-2022.svg')",
        'banner-mas': "url('/images/headers/banner-mas.png')",
        // 'banner-regiones': "url('/images/headers/banner-regiones.png')",
        destacada: "url('/images/bg-destacada.png')",
        prensa: "url('/images/banner-prensa.svg')",
        'footer-orange': "url('/images/footers/orange-footer.svg')",
        'footer-green': "url('/images/footers/green-footer.svg')",
        'banner-boyaca': "url('/images/banner-principales/boyaca.jpg')",
        'banner-narino': "url('/images/banner-principales/narino.jpg')",
        'banner-santander': "url('/images/banner-principales/santander.jpg')",
        'banner-tolima': "url('/images/banner-principales/tolima.jpg')",
        'banner-colombia': "url('/images/banner-principales/colombia.jpg')",
        'banner-regiones': "url('/images/banner-principales/regiones.jpg')",
        'banner-acerca-de': "url('/images/banner-principales/mas-acerca-de.jpg')",
        'banner-glosario': "url('/images/banner-principales/mas-glosario.jpg')",
        'banner-metodologia': "url('/images/banner-principales/mas-metodologia.jpg')",
        'banner-preguntas-frecuentes': "url('/images/banner-principales/mas-preguntas-frecuentes.jpg')",
        'banner-prensa': "url('/images/banner-principales/mas-prensa.jpg')",
        'banner-publicadores': "url('/images/banner-principales/mas-publicadores.jpg')"

      },
      backgroundPosition: {
        'center-bottom': 'center bottom'
      },
      colors: {
        'white-2': '#FBFBFB',
        'white-3': '#F1F1F1',
        'white-smoke': '#F5F5F5',
        'gray-2': '#F4F4F4',
        'blue-green': '#005054',
        'black-2': '#000000CC',
        'black-3': '#00000066',
        lemon: '#09A274',
        'yellow-green': '#C2F284',
        'dartmouth-green': '#00634B',
        cerulean: '#00AFFF',
        azure: '#0090FF',
        'catalina-blue': '#001975',
        'science-blue': '#0857C9',
        sandstorm: '#FFD150',
        'greenish-cyan': '#4AD3AC',
        'red-cr': '#ff0000',
        'orange-en': '#ffa500',
        burnham: '#002B2C',
        'yellow-orange': '#FFB349',
        'yellow-vu': '#ffff00',
        flame: '#E1501B',
        'light-peagreen': '#C7F789',
        'dark-periwinkle': '#6363DC',
        'pastel-periwinkle': '#8FABFF',
        blueberry: '#4B3CB4',
        'pastel-orange': '#FF9739',
        'light-orange': '#FFBC4E'

      },

      boxShadow: {
        default: '0px 3px 6px #00000029',
        select: '0px 11px 11px #0000001F;',
        hard: '0px 8px 8px #00000017;'
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
