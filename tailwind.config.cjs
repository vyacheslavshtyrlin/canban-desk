/** @type {import('tailwindcss').Config} */
export default {
  content: {
    relative: true,
    files: ["./**/*.{html,tsx}", , "./index.html"],
  },
  daisyui: {
    themes: ["cyberpunk"],
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("daisyui"),
  ],
};
