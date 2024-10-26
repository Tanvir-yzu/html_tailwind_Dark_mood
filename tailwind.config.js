// Modify Tailwind config
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        colors: {
          primary: '#1a365d',
          secondary: '#718096',
        },
        spacing: {
          '128': '32rem',
        }
      },
    },
    plugins: [
      require('@tailwindcss/forms'),
      require('@tailwindcss/typography'),
    ],
  }