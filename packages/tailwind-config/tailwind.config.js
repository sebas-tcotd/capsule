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
          // Base corrected to #C47C5D — the exact value in
          // _bmad-output/design-tokens.json (was #C67A5C, a small drift).
          DEFAULT: '#C47C5D',
          50: '#FCF3EF',
          100: '#F8E4DA',
          200: '#F0C9B3',
          300: '#E5A88A',
          400: '#D68E6E',
          500: '#C47C5D',
          600: '#AD684C',
          700: '#8F543D',
          800: '#714331',
          900: '#593428',
          950: '#331D16',
        },

        // Neutral - warm Greige scale (Premium Studio), not cool gray.
        // Anchored on canvas/surface at the light end (bone/greige) and
        // text.primary at the dark end — see design-tokens.json.
        neutral: {
          50: '#FDFCFB', // Bone / Base Canvas
          100: '#F7F5F2', // Greige / Surface
          200: '#EDE9E3',
          300: '#DDD6CB',
          400: '#B6AC9C',
          500: '#8C8273',
          600: '#6B6355',
          700: '#4F493F',
          800: '#332F29',
          900: '#211E1A',
          950: '#17140F',
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
          50: '#FCF3EF',
          100: '#F8E4DA',
          200: '#F0C9B3',
          300: '#E5A88A',
          400: '#D68E6E',
          500: '#C47C5D', // terra-cotta
          600: '#AD684C',
          700: '#8F543D',
          800: '#714331',
          900: '#593428',
          950: '#331D16',
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
          // Shares the terracotta family — spec avoids harsh amber/red for
          // logical warnings (weather, duplicates).
          DEFAULT: '#C47C5D',
          50: '#FCF3EF',
          100: '#F8E4DA',
          500: '#C47C5D',
          600: '#AD684C',
          700: '#8F543D',
          800: '#714331',
        },
        error: {
          // Not defined in design-tokens.json — derived as a muted rust so
          // destructive actions stay in the warm/greige world instead of a
          // stock, jarring red. See ux-design-specification.md "Material
          // Direction Refinement" and the Button variant audit in
          // docs/ui-component-inventory.md.
          DEFAULT: '#8F4433',
          50: '#FBF0ED',
          100: '#F5DED7',
          500: '#8F4433',
          600: '#78392A',
          700: '#602D22',
          800: '#4A2319',
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
        // Exact value from _bmad-output/design-tokens.json effects.shadows["ambient-occlusion"]
        'ambient': '0 10px 30px -5px rgba(0, 0, 0, 0.05), 0 4px 10px -2px rgba(0, 0, 0, 0.02)',
        // Recessed/inset treatment for inputs — material "receiving" vs buttons "giving"
        'inset-soft': 'inset 0 1px 3px 0 rgb(62 92 118 / 0.08)',
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
