# Skivvy package: `hello-world`
[![npm version](https://img.shields.io/npm/v/@skivvy/skivvy-package-hello-world.svg)](https://www.npmjs.com/package/@skivvy/skivvy-package-hello-world)
![Stability](https://img.shields.io/badge/stability-stable-brightgreen.svg)
[![Build Status](https://travis-ci.org/skivvyjs/skivvy-package-hello-world.svg?branch=master)](https://travis-ci.org/skivvyjs/skivvy-package-hello-world)

> Skivvy example package


## Installation

```bash
skivvy install hello-world
```


## Overview

This is an example package for the [Skivvy](https://www.npmjs.com/package/skivvy) task runner.


## Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `user` | `string` | No | `"world"` | Username for example task |


## Included tasks

### `greet`

Greet the user

#### Usage:

```bash
skivvy run greet
```


#### Configuration settings:

| Name | Type | Required | Default | Description |
| ---- | ---- | -------- | ------- | ----------- |
| `user` | `string` | No | `package.user` | User to greet |


### `welcome`

Welcome the user

#### Usage:

```bash
skivvy run welcome
```
