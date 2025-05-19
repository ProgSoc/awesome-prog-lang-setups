# Getting Started with Python

Welcome to the guide for getting started with Python development!

## Python & Pip: The Essentials

To use Python for development, you need two main things:

* **Python 3 Interpreter:** The program that runs your Python code.
* **pip:** The tool to install and manage external Python libraries (packages).

Good news: When you install Python 3 (version 3.4+), **pip is usually included automatically**.

However, this isn't always the case, especially if you used a system package manager. Always verify pip is installed by running `pip3 --version` in your terminal. If not, you might need to install it separately.

## Installation

To develop with python we need 2 things installed on our system: python3 interpreter and pip.

### macOS

Using Homebrew (recommended):

```bash
brew update
brew install python@3.12
```

### Linux (Debian/Ubuntu)

```bash
sudo apt update
sudo apt install python3 python3-pip python3-dev
```

### Windows

Download the installer from [Python Downloads for Windows](https://www.python.org/downloads/windows/) and ensure you check "Add Python X.Y to PATH" during installation.

### As a Nix Flake

Copy our [flake template](addleter) into your project repository

run `nix develop` or `nix develop -c zsh` to initialise a dev shell with python

TODO: talk about direnv stdlib as well

## Verifying the Installation

Open your terminal or command prompt and run:

```bash
python3 --version
pip3 --version
```

You should see the installed Python and pip versions.

## Basic Usage

You can run Python scripts by saving them with a `.py` extension and then executing them in your terminal:

```bash
python3 my_script.py
```

Let's create a simple `my_script.py` file:

```python
print("Hello, Python!")
```

Save this file and run it. You should see "Hello, Python\!" printed in your terminal.

## Next Steps

Now that you have Python installed, you might want to:

  - Learn about managing isolated project environments in our [Virtual Environments guide](./virtual-environments.md).
  - Understand how to manage project dependencies using `pip` in our [Managing Dependencies guide](./dependencies.md).
