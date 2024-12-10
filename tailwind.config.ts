import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#FFFFFF',
      black: '#000000',
      blue: {
        light: '#00A5AD',
        DEFAULT: '#316FEE',
      },
      red: {
        DEFAULT: '#db3647',
        dark: '#952023',
      },
      grey: {
        light: '#9999A2',
        medium: '#E6E6E8',
        DEFAULT: '#26263A',
      },
    },
    fontFamily: {
      sans: [
        'Gogh',
        'sans-serif',
      ],
    },
    fontSize: {
      sm: ['0.75rem', '0.9rem'],
      base: ['1rem', '1.5rem'],
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1140px',
      '2xl': '1408px',
      '3xl': '1536px',
    },
    extend: {
      gridTemplateColumns: {
        header: '1fr auto 1fr',
      },
    },
    container: {
      screens: {
        'lg': '100%',
        '2xl': '1296px',
      },
    },
  },
}
