// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts}"],
  theme: {
    extend: {
      colors: {
        "is-red": "#781247",
        "is-red-600": "rgb(83,23,57)",
        "is-red-darker": "#630e3b",
      },
      backgroundImage: {
        banner:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url('@/assets/images/banner.png')",
      },
    },
  },
  plugins: [],
};
