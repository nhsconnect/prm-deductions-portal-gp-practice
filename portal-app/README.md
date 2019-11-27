# Portal Webapp

This directory contains the ReactJS web application for the GP Practice deductions portal.

## Running the app

Make sure your are in `portal-app` 

### Prerequisites

* Node 12.x
* Docker

### Set up

Run `npm install` to install all dependencies.

### Running the tests

Run the tests in interactive mode with:

`npm test`

By default, it runs tests related to files changed since the last commit. Every time you save a file, it will re-run 
the tests.

### Running accessibility tests

We are using pa11y for accessibility testing. 
As the tests are currently being run on localhost pages, make sure you are running the app locally before running the tests. 
To run the tests, use the following command:

`npm run pa11y-ci`

If a new page needs testing, add it to the array of URLs in the .pa11yci.json file

### Build Docker container locally

`make build`

### Run Docker container locally

Make sure you have built docker container locally before you run it.

`make run`

### Start portal app with yarn

`make run-local`
