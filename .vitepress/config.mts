import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Awesome Lang Setups",
  description: "Awesome Lang Setups by ProgSoc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Setups', link: '/Setups' }
    ],

 sidebar: [
  {
    text: 'Languages',
    items: [
      {
        text: 'Python',
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/python/getting-started' },
          { text: 'Virtual Environments', link: '/python/virtual-environments' },
          { text: 'Dependencies', link: '/python/dependencies' },
        ]
      },
      // add more languages later...
      // { text: 'JavaScript', link: '/javascript/getting-started' },
      // { text: 'Java', link: '/java/getting-started' },
      // { text: 'Go', link: '/go/getting-started' },
      // { text: 'C++', link: '/cpp/getting-started' },
      // { text: 'C#', link: '/csharp/getting-started' },
    ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ProgSoc/awesome-prog-lang-setups' }
    ]
  }
})
