module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': '480px',    // 小屏幕适配
        'md': '768px',    // 中等屏幕适配
        'lg': '1024px',   // 大屏幕适配
        'xl': '1280px',   // 超大屏幕适配
      },
    },
  },
  plugins: [],
}
