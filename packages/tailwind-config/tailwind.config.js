/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        // Premium Studio - Base Colors
        bone: '#FDFCFB',
        greige: '#F7F5F2',

        // Premium Studio - Primary Accent
        'authority-blue': {
          DEFAULT: '#3E5C76',
          50: '#EEF2F5',
          100: '#DDE5EB',
          200: '#BBCBD7',
          300: '#99B1C3',
          400: '#6C8BA0',
          500: '#3E5C76',
          600: '#374F66',
          700: '#2F4356',
          800: '#273746',
          900: '#1F2B36',
          950: '#171F28',
        },

        // Premium Studio - Semantic Colors
        'deep-forest': {
          DEFAULT: '#4A6D5E',
          50: '#F0F5F2',
          100: '#E1EBE6',
          200: '#C3D7CD',
          300: '#A5C3B4',
          400: '#78A08A',
          500: '#4A6D5E',
          600: '#415F52',
          700: '#385146',
          800: '#2F433A',
          900: '#26352E',
          950: '#1D2722',
        },
        'terra-cotta': {
          DEFAULT: '#C67A5C',
          50: '#FDF6F3',
          100: '#FAEBE4',
          200: '#F5D7C9',
          300: '#EEBCA3',
          400: '#E19A76',
          500: '#C67A5C',
          600: '#B8654A',
          700: '#9A4F3C',
          800: '#7E4336',
          900: '#683A2F',
          950: '#381D18',
        },

        // Neutral - Grays (for text and borders)
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },

        // Compatibility aliases for existing atoms (maps to Premium Studio)
        // TODO: Migrate atoms to use Premium Studio tokens directly
        primary: {
          50: '#EEF2F5',
          100: '#DDE5EB',
          200: '#BBCBD7',
          300: '#99B1C3',
          400: '#6C8BA0',
          500: '#3E5C76', // authority-blue
          600: '#374F66',
          700: '#2F4356',
          800: '#273746',
          900: '#1F2B36',
          950: '#171F28',
        },
        accent: {
          50: '#FDF6F3',
          100: '#FAEBE4',
          200: '#F5D7C9',
          300: '#EEBCA3',
          400: '#E19A76',
          500: '#C67A5C', // terra-cotta
          600: '#B8654A',
          700: '#9A4F3C',
          800: '#7E4336',
          900: '#683A2F',
          950: '#381D18',
        },

        // Semantic aliases (full scale for atom compatibility)
        success: {
          DEFAULT: '#4A6D5E',
          50: '#F0F5F2',
          100: '#E1EBE6',
          500: '#4A6D5E',
          600: '#415F52',
          700: '#385146',
          800: '#2F433A',
        },
        warning: {
          DEFAULT: '#C67A5C',
          50: '#FDF6F3',
          100: '#FAEBE4',
          500: '#C67A5C',
          600: '#B8654A',
          700: '#9A4F3C',
          800: '#7E4336',
        },
        error: {
          DEFAULT: '#B91C1C',
          50: '#FEF2F2',
          100: '#FEE2E2',
          500: '#B91C1C',
          600: '#991B1B',
          700: '#7F1D1D',
          800: '#661B1B',
        },
        info: {
          DEFAULT: '#3E5C76',
          50: '#EEF2F5',
          100: '#DDE5EB',
          500: '#3E5C76',
          600: '#374F66',
          700: '#2F4356',
          800: '#273746',
        },
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['var(--font-mono)', 'JetBrains Mono', 'Menlo', 'Monaco', 'monospace'],
      },
      fontWeight: {
        extralight: '200',
        light: '300',
        normal: '400',
        medium: '500',
        semibold: '600',
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
        '7xl': ['4.5rem', { lineHeight: '1' }],
      },
      borderRadius: {
        sm: '0.375rem',
        DEFAULT: '0.5rem',
        md: '0.5rem',
        lg: '0.75rem',
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
        full: '9999px',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
        DEFAULT: '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)',
        md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
        lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
        xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
        '2xl': '0 25px 50px -12px rgb(0 0 0 / 0.25)',
        // Premium Studio soft shadows
        'studio-sm': '0 2px 4px 0 rgb(62 92 118 / 0.06)',
        'studio': '0 4px 8px 0 rgb(62 92 118 / 0.08)',
        'studio-lg': '0 8px 16px 0 rgb(62 92 118 / 0.10)',
      },
      // Linen Grid - 8px base spacing
      spacing: {
        '0.5': '0.125rem', // 2px
        '1': '0.25rem',    // 4px
        '2': '0.5rem',     // 8px (base unit)
        '3': '0.75rem',    // 12px
        '4': '1rem',       // 16px (2 units)
        '5': '1.25rem',    // 20px
        '6': '1.5rem',     // 24px (3 units)
        '8': '2rem',       // 32px (4 units)
        '10': '2.5rem',    // 40px (5 units)
        '12': '3rem',      // 48px (6 units)
        '16': '4rem',      // 64px (8 units)
        '20': '5rem',      // 80px (10 units)
        '24': '6rem',      // 96px (12 units)
        '32': '8rem',      // 128px (16 units)
      },
    },
  },
  plugins: [],
};
