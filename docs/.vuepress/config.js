module.exports = {
  title: 'Nines',
  description: 'Nine seconds tech notes',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        href: `https://fonts.googleapis.com/css?family=Major+Mono+Display`,
      },
    ],
  ],
  plugins: [],
  base: '/nines/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    nav: [{ text: 'HowTo', link: '/other/howTo' }],
    sidebar: [
      ['/', 'HOME'],
      ['/github', ' GitHub'],
      ['/vscode', ' VS Code'],
      ['/symfony', ' Symfony'],
      ['/react', ' React'],
      ['/composer', ' Composer'],
      ['/docker', ' Docker & Docker-Compose'],
      ['/npm', ' npm'],
      ['/yarn', ' Yarn'],
      ['/chrome', ' Chrome & extension'],
      ['/editorconfig', ' Editorconfig'],
      ['/bulma', ' Bulma CSS'],
    ],
  },
};
