# Getting Started with Python

Welcome to the guide for getting started with Python development!

## Python & Pip: The Essentials
To use Python for development, you need two main things:

Python 3 Interpreter: The program that runs your Python code.
pip: The tool to install and manage external Python libraries (packages).
Good news: When you install Python 3 (version 3.4+), pip is usually included automatically.

## Installation

To get started with Python, you need to install it on your system. Choose the installation guide that corresponds to your operating system:

- [macOS](./install/macos.md)
- [Linux](./install/linux.md)
- [Windows](./install/windows.md)

## Verifying the Installation

After following the installation instructions for your operating system, you can verify that Python is installed correctly by opening your terminal or command prompt and running:

```bash
python3 --version
pip3 --version
````

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
