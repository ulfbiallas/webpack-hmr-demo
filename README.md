# Hot Module Replacement Demo

When saving changed code, Hot Module Replacement (HMR) updates the app in the browser automatically.

To try this demo run

    npm run server

and a webpack-dev-server will be started on port 3000.
When you change the `index.js`, the app in the browser will update automatically.

To see changes on the `index.html`, you need to reload the page manually!

## Linting

There is a linter setup using `ESLint`. You can run the check by executing:

    npm run eslint

## Tests

There is a setup for component tests using `Jest` and `Enzyme`.
You can run the tests by executing:

    npm test

## Update dependencies

Using `npm-check-updates` (ncu), you can easily update all dependencies to their latest version.

Install ncu:

    npm i -g npm-check-updates

Update the dependencies:

    ncu -u --packageFile package.json
