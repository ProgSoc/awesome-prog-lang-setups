# Contributing Guide

Thanks for helping improve the Language Setup Guides!

---

## How to Contribute

- Add or update guides for languages/tools.
- Use clear, beginner-friendly language.
- Write all guides in **Markdown** (`.md`). [Basic Syntax](https://www.markdownguide.org/basic-syntax/)

---

## Folder Structure

Organize your contribution like this:

```text
linux/
  └── python/
      └── README.md
macos/
  └── nodejs/
      └── README.md
windows/
  └── cpp/
      ├── README.md       # Primary C++ installation guide (e.g., using MSVC with Visual Studio)
      ├── vscode.md       # Setting up with Visual Studio Code
      ├── mingw.md        # Alternative installation using MinGW
      └── clang.md        # Alternative installation using Clang/LLVM
```

Inside each OS folder, create a separate folder for each language. The primary installation guide should be named `README.md` inside that folder. If you need to provide multiple installation options (e.g., different versions, package managers, text editors, etc.), add extra markdown files with clear names alongside the main README.

---

## Writing Tips

- Use fenced code blocks with syntax highlighting.
- Keep instructions simple and clear.
- Use relative links for internal references.
- Add screenshots in an `assets/` folder if needed.

---

## How to Submit

1. Fork the repo
2. Create a branch (e.g., `add-python-linux`)
3. Add your guide following the folder structure
4. Commit and push your changes
5. Open a Pull Request

---

Thanks for contributing! Your help makes workshops easier for everyone.
