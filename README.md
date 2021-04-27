# Discord Bot Starter
Barebone for creating discord bot

# Setup

install dependencies with

```
$ npm i
```

Dependencies:
- discord.js -> discord bot client
- node-fetch -> enable fetch in nodejs
- dotenv -> get env mechanism by .env file

DevDependencies:
- babel -> js es6 transpiler
- nodemon -> nodejs file changes watcher
- npm-run-all -> run all npm scripts simultaneously
- rimraf -> nodejs folder remover (rm -rf)
- uglifyjs(uglify-js) -> minify js
- uglifyjs-folder -> minify js in a folder

Dependencies:

don't forget to set token, by

```
$ mv env .env
```

and edit the required environments.

you can get bot TOKEN from https://discord.com/developers/applications by making an application, which is bot.

# Dev

for development, run

```
$ npm run watch:dev
```

this will start nodemon as watcher, so we can conveniently change and then it's automatically updated without kill the process.

# Prod

just build

```
$ npm run buildProd
```

build and run

```
$ npm run prod
```

or you know what todo right?

# TODOs

- MVP(Minimum Viable Product). [DONE]
- enable es6 or above with help of babel.[DONE]
- as es6 or above is enabled, the code must be converted to nodejs compatible and minified for standard production use, so there will be dist or build folder.[DONE]
