/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'elder-xs': ['16px', '24px'],
        'elder-sm': ['18px', '26px'],
        'elder-base': ['20px', '30px'],
        'elder-lg': ['24px', '34px'],
        'elder-xl': ['28px', '38px'],
        'elder-2xl': ['34px', '44px'],
        'elder-3xl': ['42px', '52px'],
      },
      colors: {
        elder: {
          bg: '#f8fafc',
          card: '#ffffff',
          primary: '#1e40af', // Deep trustworthy accessible blue
          'primary-hover': '#1d4ed8',
          secondary: '#0f766e', // Calming teal
          accent: '#b45309', // High contrast amber
          danger: '#dc2626', // High visibility crimson for SOS
          'danger-hover': '#b91c1c',
          success: '#15803d', // High visibility emerald
          text: '#0f172a', // Ultra high contrast text
          muted: '#475569',
          border: '#cbd5e1',
        },
      },
      boxShadow: {
        'elder': '0 8px 30px rgba(0, 0, 0, 0.08)',
        'elder-lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'elder-sos': '0 0 35px rgba(220, 38, 38, 0.4)',
      },
    },
  },
  plugins: [],
}
