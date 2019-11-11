# PRM Deductions Portal for GP Practices

Make sure your are in `portal-app` 

## Prerequisites

* Node 12.x
* Docker

## Set up

Run `npm install` to install all dependencies.

## Running the tests

Run the tests in interactive mode with:

`npm test`

By default, it runs tests related to files changed since the last commit. Every time you save a file, it will re-run 
the tests.

## Build Docker container locally

`make build`

## Run Docker container locally

Make sure you have built docker container locally before you run it.

`make run`


## Start portal app with yarn

`make run-local`
