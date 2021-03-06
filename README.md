## Yelp Search app

This app was built with React/Redux and bootstrap 4 on the client. The server was built with Node.js and Express and connects the FE with the Yelp API.

It uses SSR to load the page really fast, than gently handles over to the client with preloaded restaurants by dispatching the search action on the server.

Future improvements:
- Google maps api connection
- Backend cache api calls
- Improve layout
- Deploy to Heroku

## Quick Start

Below is a list of commands you will probably find useful.

### `npm run dev` or `yarn run dev` for DEVELOPMENT

Runs the project in development mode.  
You can view your application at `http://localhost:3000`

The page will reload if you make edits.

### `npm run build` or `yarn build`

Builds the app for production to the build folder.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

### `npm run start` or `yarn start` for PRODUCTION

Runs the compiled app in production.

You can again view your application at `http://localhost:3000`

### `npm test` or `yarn test`

Runs the test watcher (Jest) in an interactive mode.
By default, runs tests related to files changed since the last commit.

### `npm start -- --inspect` or `yarn start -- --inspect`

To debug the node server, you can use `razzle start --inspect`. This will start the node server and enable the inspector agent. For more information, see [this](https://nodejs.org/en/docs/inspector/).

### `npm start -- --inspect-brk` or `yarn start -- --inspect-brk`

To debug the node server, you can use `razzle start --inspect-brk`. This will start the node server, enable the inspector agent and Break before user code starts. For more information, see [this](https://nodejs.org/en/docs/inspector/).
