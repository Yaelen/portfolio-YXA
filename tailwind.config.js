/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        khm: ['KhM', 'monospace'],
        khmb: ['KhMB', 'monospace'],
        khmbi: ['KhMBI', 'monospace'],
        khmi: ['KhMI', 'monospace'],
        kht: ['KhT', 'monospace'],
      },
    },
  },
  plugins: [],
}