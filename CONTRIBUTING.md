# Contributing Guide

<!--toc:start-->
- [Contributing Guide](#contributing-guide)
  - [Ways to Contribute](#ways-to-contribute)
  - [Folder Structure](#folder-structure)
  - [Testing on VitePress](#testing-on-vitepress)
  - [Writing Tips](#writing-tips)
  - [How to Submit](#how-to-submit)
<!--toc:end-->

We welcome your contributions! Here's how you can help:

---

## Ways to Contribute

* **Add New Setups:** Share guides for languages not yet covered.
* **Improve Existing Guides:** Make them clearer, more accurate, or more complete.
* **Suggest Tools:** Recommend helpful tools and configurations.
* **Report Issues:** Point out errors, outdated info, or areas for improvement.
* **Fix Issues:** Submit pull requests with corrections.

---

## Folder Structure

Organize your contribution like this:

```text
python/
  └── getting-started.md
  └── vscode.md # Setting up with Visual Studio Code
  └── getting-started.md
  └── install/
      ├── macos.md
      ├── windows.md
      ├── linux.md
      └── nix.md
```

Inside each Language/Tool folder, create a separate folder for installs and markdown files for each operating system. The primary guide should be called `getting-started.md` inside that folder. If you need to provide multiple installation options (e.g., different versions, package managers, text editors, etc.), add extra markdown files in the lang/tool directory.

### Updating Side Bar
---
Whenever you add new pages/guides to the repo, update the sidebar here:
```typescript
//.vitepress/config.mts
 sidebar: [
  {
    text: 'Languages',
    items: [
      {
        text: 'Python',
        collapsed: true,
        items: [
          { text: 'Getting Started', link: '/python/getting-started' },
          { text: 'Installation', collapsed: true, items: [
                {text: 'MacOs', link: '/python/install/macos'},
                {text: 'Linux', link: '/python/install/linux'},
                {text: 'Windows', link: '/python/install/windows'},
                {text: 'Nix', link: '/python/install/nix'},
              ]},
          { text: 'Virtual Environments', link: '/python/virtual-environments' },
          { text: 'Dependencies', link: '/python/dependencies' },
        ]
      },

``````

## VitePress
1. Install VitePress
```bash
npm add -D vitepress
```
2. Run Dev Server
```bash
npm run docs:dev
```
3. Build
```bash
npm run docs:build # builds in .vitepress/dist
```
For more information checkout the [docs](https://vitepress.dev/guide)

## Writing Tips

- Write all guides in **Markdown** (`.md`). [Basic Syntax](https://www.markdownguide.org/basic-syntax/)
- Use fenced code blocks with syntax highlighting.
- Keep instructions simple and clear; use beginner friendly language
- Use relative links for internal references.
- Add assets to an appropriate folder in `/public/` or `/asssets/`
::: warning
Vitepress treats files in `public` a bit differently, for more info check the docs [here](https://vitepress.dev/guide/asset-handling)
:::
---

## How to Submit

1. Fork the repo
2. Create a branch (e.g., `add-python-linux`)
3. Add your guide following the folder structure
4. Commit and push your changes
5. Open a Pull Request

---

Thanks for contributing! Your help makes workshops easier for everyone.
