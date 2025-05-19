# Managing Python Dependencies

Python projects often rely on external libraries and packages. `pip` (Python Package Installer) is the standard tool for managing these dependencies.

## Installing Packages

When a virtual environment is activated (as described in the [Virtual Environments guide](./virtual-environments.md)), you can install packages using `pip`:

```bash
pip install requests
````

This command will download and install the `requests` library within your active virtual environment.

You can install specific versions of a package:

```bash
pip install requests==2.25.1
```

Or a minimum version:

```bash
pip install "requests>=2.20.0"
```

## Listing Installed Packages

To see a list of all packages installed in your active virtual environment, use:

```bash
pip list
```

or

```bash
pip freeze
```

`pip freeze` is particularly useful for generating a `requirements.txt` file.

## The `requirements.txt` File

The `requirements.txt` file is a standard way to specify the dependencies of a Python project. You can generate this file from your active virtual environment:

```bash
pip freeze > requirements.txt
```

This will create a file named `requirements.txt` containing a list of your installed packages and their versions.

## Installing from `requirements.txt`

To install all the dependencies listed in a `requirements.txt` file (for example, when setting up a project on a new machine or sharing it with others), you can use:

```bash
pip install -r requirements.txt
```

## Keeping Dependencies Up-to-Date

It's good practice to keep your project dependencies up-to-date for security and feature enhancements. You can upgrade a specific package:

```bash
pip install --upgrade requests
```

Or upgrade all outdated packages (though this should be done with caution):

```bash
pip install --upgrade -r requirements.txt
```

By using `pip` and `requirements.txt` effectively, you can manage your Python project's dependencies in a consistent and reproducible way. Make sure to use virtual environments (as discussed in [Virtual Environments](./virtual-environments.md)) to isolate these dependencies per project.
