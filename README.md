# Quick Library
A CLI tool to generate React, Angular and Vue library and publish it on npm.

![](https://i.imgur.com/duHFFsI.gif)

> Right now, this tool only supports creation of React library. I am working on others.

## Install CLI tool

```
npm install --global quick-library
```

Use `quick-library --help` to see command line options.

```bash
$ quick-library --help

Usage: quick-library [options]

Options:
  -v, --version  output the version number
  --no-install   Do not install npm dependencies
  --no-git       Do not initialize git repository
  -h, --help     output usage information
```

## Create new library
Use command `quick-library` which will prompt some options for library configuration. You can also provide `--no-install` flag to prevent installation of npm packages as wll as `--no-git` flag to prevent initialization of `git` repository.

```
$ quick-library

? Enter library name new-react-lib
? Enter library description library description
? Select a library template React
? Include CSS in JavaScript bundle? No, extract to another file?
? Select git reposiory host GitHub
? Enter github username thatisuday
? Enter GitHub repository name new-react-lib
✔ Initialized git repository new-react-lib
➤ Installing npm packages
```

## Start developing your library
Once library is created, you will be shown following instructions.

```bash
Congratulations, new-react-lib library has been created. 
Use bellow commands to start working on your project.
$ cd new-react-lib/			‣ enter directory
$ npm run start				‣ start build and watch
$ npm run start:demo		        ‣ start demo server
$ npm publish				‣ publish library
```

Once you enter the library directory, you have following files to work with

```
../../new-react-lib
├── babel.config.js
├── demo
|  ├── index.html
|  ├── index.js
|  └── webpack.config.js
├── dist
|  ├── index.js
|  └── index.js.map
├── package-lock.json
├── package.json
├── postcss.config.js
├── src
|  ├── MyComponent.js
|  ├── index.js
|  └── styles.scss
└── webpack.config.js
```

Open terminal window and use command `npm run start` start webpack build which will watch file changes in `src` and output to `dist`. At the same time, use command `npm run start:demo` which will watch files from `demo/` directory and run preview in browser.

## Publish your library
Once you are done with your development, `dist` directory contains your release ready library files. You can use `npm publish` command to publish your library to `npm` official registry.

***

# Contribute to this tool
I have managed to create `React` template but I need help with `Angular` and `Vue` to integrate these templates in this tool. Fork this repository and give merge request in you have worked on it.