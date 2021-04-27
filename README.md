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

don't forget to set token, by

```
$ mv env .env
```

and edit the required environments.

you can get bot TOKEN from https://discord.com/developers/applications by making an application, which is bot.

# Dev

for development, run

```
$ npm run dev
```

this will start nodemon as watcher, so we can conveniently change and then it's automatically updated without kill the process.


# Prod

for production, just run

```
$ npm start
```

or you know what todo right?


# TODOs

- enable es6 or above with help of babel.
- as es6 or above is enabled, the code must be converted to nodejs compatible and minified for standard production use, so there will be dist or build folder.
