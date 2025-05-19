# Python Virtual Environments

Virtual environments are essential for isolating project dependencies. They allow you to have different versions of libraries for different projects without conflicts. Python's built-in tool for this is `venv` (or `virtualenv` for older Python versions).

## Creating a Virtual Environment

Navigate to your project directory in the terminal and run:

```bash
python3 -m venv venv
```

This will create a new directory named `venv` containing a copy of the Python interpreter and related files.

## Activating the Virtual Environment

You need to activate the virtual environment to use it. The activation command varies by operating system:

### macOS and Linux

```bash
source venv/bin/activate
```

Your terminal prompt should now be prefixed with `(venv)`, indicating that the virtual environment is active.

### Windows

```bash
.\venv\Scripts\activate
```

Similarly, your command prompt will be prefixed with `(venv)`.

## Using the Virtual Environment

Once activated, any Python packages you install using `pip` will be installed within this isolated environment and won't affect your global Python installation or other projects.

## Deactivating the Virtual Environment

To exit the virtual environment, simply run:

```bash
deactivate
```

Your terminal prompt will return to normal.

## Why Use Virtual Environments?

  - **Isolation:** Prevents dependency conflicts between projects.
  - **Reproducibility:** Makes it easier to share your project with consistent dependencies.
  - **Cleanliness:** Keeps your global Python installation tidy.

For managing the packages within your virtual environment, see our [Managing Dependencies guide](./dependencies.md).
