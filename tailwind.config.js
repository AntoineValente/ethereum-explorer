const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      primary: {
        sutle: '#172554',
      },
      background: {
        base: '#09090B',
        muted: '#27272A',
        subtle: '#18181B',
      },
      border: {
        base: '#27272A',
      },
      typo: {
        primary: {
          strong: '#93C5FD',
        },
        base: '#FFFFFF',
        muted: '#A1A1AA',
        subtle: '#71717A',
      },
    },
    fontFamily: {
      sans: ['"Inter"', ...defaultTheme.fontFamily.sans],
    },
    fontSize: {
      h1: [
        '3rem',
        {
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '125%',
        },
      ],
      h2: [
        '1.5rem',
        {
          fontStyle: 'normal',
          fontWeight: '700',
          lineHeight: '2rem',
        },
      ],
      'body-large': [
        '1.125rem',
        {
          fontStyle: 'normal',
          lineHeight: '1.75rem',
        },
      ],
      'body-medium': [
        '1rem',
        {
          fontStyle: 'normal',
          lineHeight: '1.5rem',
        },
      ],
      'body-small': [
        '0.875rem',
        {
          fontStyle: 'normal',
          lineHeight: '1.25rem',
        },
      ],
      caption: [
        '0.75rem',
        {
          fontStyle: 'normal',
          lineHeight: '1rem',
        },
      ],
    },
  },
  plugins: [],
};
