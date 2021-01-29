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
    [
      'script',
      {
        src: `https://code.iconify.design/1/1.0.7/iconify.min.js`,
      },
    ],
  ],
  plugins: [],
  base: '/nines/',
  themeConfig: {
    lastUpdated: 'Last Updated',
    docsDir: 'docs',
    nav: [
      { text: 'HowTo', link: '/other/howTo' },
      {
        text: 'GitHub',
        link: 'https://github.com/vikbert/nines',
      },
      {
        text: 'About Me',
        link: 'https://vikbert.github.io/',
      },
    ],
    sidebar: [
      ['/', 'HOME'],
      ['/bulma', ' Bulma CSS'],
      ['/chrome', ' Chrome & extension'],
      ['/cli', ' Command Line Tool'],
      ['/composer', ' Composer'],
      ['/docker', ' Docker & Docker-Compose'],
      ['/editorconfig', ' Editorconfig'],
      ['/github', ' GitHub'],
      ['/markdown', ' Markdown'],
      ['/npm', ' npm'],
      ['/react', ' React'],
      ['/symfony', ' Symfony'],
      ['/yarn', ' Yarn'],
      ['/youtube', ' YouTube'],
      ['/vscode', ' VS Code'],
      ['/webicon', ' Web Icon'],
    ],
  },
};
