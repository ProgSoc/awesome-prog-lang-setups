# Nix for Python

Nix enables reproducible and isolated Python environments. Flakes are the modern way to manage Nix configurations. `direnv` auto-activates these environments per project.

## 1. Prerequisites

* Install Nix.
* Enable Nix flakes in `nix.conf`:
    ```nix
    experimental-features = nix-command flakes
    ```
* [Optional] direnv

## 2. `flake.nix` (Project Root)

```nix
{
  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixpkgs-unstable";
  };

  outputs = { self, nixpkgs, ... }:
  let
    pkgs = import nixpkgs { system = builtins.currentSystem; };
  in
  {
    devShell.default = pkgs.mkShell {
      packages = [
        pkgs.python3
        pkgs.python3Packages.pip
        # Add other Python packages
      ];
    };
  };
}
````

## 3\. Enter Nix Shell

```bash
nix develop
```
::: tip
You might have to `git add` the flake file first depending on your settings
:::

## 4\. `direnv` Integration
### `.envrc` (Project Root)

```bash
dotenv # optional: load in environment variables from .env file
use flake # automatically enter dev shell
layout python # setup a python virtual env
```

### Allow `direnv`

```bash
direnv allow
```

Now, Python and specified packages are auto-activated when you `cd` into the project directory.
