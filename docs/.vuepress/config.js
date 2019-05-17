module.exports = {
  title: "Nines",
  description:
    "Getting the things done in shortest time 🚀. A absolute must-have guide for lazy developer. ",
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: `https://fonts.googleapis.com/css?family=Major+Mono+Display`
      }
    ]
  ],
  plugins: [],
  base: "/nines/",
  themeConfig: {
    lastUpdated: "Last Updated",
    docsDir: "docs",
    nav: [{ text: "HowTo", link: "/other/howTo" }],
    sidebar: [
      ["/", "🏠HOME"],
      ["/react", " React"],
      ["/npm", " npm"],
      ["/composer", " Composer"],
      ["/symfony", " Symfony"]
    ]
  }
};
