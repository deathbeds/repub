# Contributing

## Bootstrap with Mambaforge

- get the latest compatible `Mambaforge` from [miniforge](https://conda-forge.org/miniforge)
- activate the `base` environment

## Create the environment

```bash
mamba create --file .binder/conda-linux-64.lock --prefix .venv
```
- activate the new environment

## Use doit

See all the doit tasks

```bash
doit list
```

Run the default tasks:

```bash
doit
```
