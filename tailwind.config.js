/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      /** Ant Design의 Screen 별 사이즈와 통일을 위해 직접 값 주입 */
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1600px',
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
}
