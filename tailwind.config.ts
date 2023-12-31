import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      width: {
        'app-sm': '576px',
        'app-md': '768px',
        'app-lg': '1008px',
        'app-xl': '1200px',
        'max-screen': '100vh',
        'img-card-desk': '13rem',
        'app-checkbox': '16px',
      },
      height: {
        'app-checkbox': '16px',
      },
      minWidth: {
        'app-sm': '576px',
        'app-md': '768px',
        'app-lg': '1008px',
        'app-xl': '1200px',
      },
    },
  },
  plugins: [],
}
export default config
