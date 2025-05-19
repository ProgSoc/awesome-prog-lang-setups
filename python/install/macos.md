# Python Installation on macOS

The recommended way to install Python on macOS is using the official installer from the Python website or using Homebrew.

## Using the Official Installer

1.  Go to the [Python Downloads for macOS](https://www.python.org/downloads/macos/) page.
2.  Download the latest stable "macOS 64-bit installer".
3.  Open the downloaded `.pkg` file and follow the on-screen instructions to complete the installation.

## Using Homebrew (Recommended)

If you have Homebrew installed (you can find instructions on [brew.sh](https://brew.sh/)), you can install Python with the following command in your terminal:

```bash
brew update
brew install python@3.12 # Replace 3.12 with the desired version
```

After installation, you might need to ensure that the Homebrew-installed Python is in your system's PATH. You can usually do this by adding the following to your shell configuration file (e.g., `.zshrc` or `.bashrc`):

```bash
export PATH="/opt/homebrew/opt/python@3.12/bin:$PATH" # Adjust version if needed
```

Then, restart your terminal or source your configuration file (`source ~/.zshrc` or `source ~/.bashrc`).
