# Portal Webapp

## Prerequisites

* Node 12.x

## Set up

Run `npm install` to install all dependencies.

## Running the tests

Run the tests in interactive mode with:

`npm test`

By default, it runs tests related to files changed since the last commit. Every time you save a file, it will re-run 
the tests.

## Running accessibility tests

`npm run pa11y-ci`

If a new page needs testing, add it to the array of URLs in the .pa11yci.json file

## Start the app locally

Run a development server with:

`npm start`

Open http://localhost:3000 to view the app in a browser. The page will automatically reload if you make changes to the 
code. You will see the build errors and lint warnings in the console.