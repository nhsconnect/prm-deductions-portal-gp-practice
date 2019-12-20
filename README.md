# PRM Deductions Portal for GP Practices

The GP Practice Portal is a web application that will be used by GP Practice Staff to transfer a patient from their GP practice to the NHSE Repository.

## Directories

| Directory     | Description                                                                               | 
|:--------------|:------------------------------------------------------------------------------------------|
| /gocd         | Contains the GoCD pipeline file                                                           |
| /public       | (React App) Public files                                                                  |
| /src          | (React App) The ReactJS web application source code for the GP Practice deductions portal |
| /terraform    | Terraform to deploy app as Fargate task in AWS                                            |
| /scripts      | Shell scripts for automated tasks:                                                        |
|               |   *  aws-cli-assumerole.sh                                                                |

## Prerequisites

* Node 12.x
* Docker
* [kudulab/dojo](https://github.com/kudulab/dojo)
* homebrew

### Installing dojo (OSx)

More information on dojo can be found ([kudulab/dojo GIT](https://github.com/kudulab/dojo)).

```bash
brew install kudulab/homebrew-dojo-osx/dojo
```

## Environments

### Node Goals

| Goal          | Description                                                                           |
|---------------|---------------------------------------------------------------------------------------|
| clean         | Removes the current build folder                                                      |
| build         | Builds the react app (src/) into a build/ folder                                      |
| start:react   | Opens a live version of the React app in a browser (port 3000)                        |
| serve:react   | Serves the React static pages on port 5000                                            |
| start:server  | Builds the react app before launching the Express server on port 5000 using nodemon   |
| start         | Builds the react app before launching the Express server on port 5000                 |
| test:react    | Runs the React app tests in CI mode                                                   |
| test:server   | Runs the Express server tests (/server)                                               |
| test          | Runs both the React app tests and the Express server tests                            |
| eject         | Runs `react-scripts eject`                                                            |
| pa11y-ci      | Runs the accessibility tests, server must be running on port 5000                     |

### Development

To run during development of the ReactJS App, which will allow user to interactively see changes made
in the browser and test locally.

#### Developing ReactJS

```bash
# Launches ReactJS App on local browser at localhost:3000 
./tasks run_react_local

# Runs ReactJS Tests
npm run test:react
```

#### Developing ExpressJS (Server)
```bash
# Launches ExpressJS server hosting the React App
./tasks run_server_local

# Runs Server Tests
npm run test:server
```

### Test using node-dojo

To run before committing, runs the tests and accessibility tests within the node-dojo environment.

By default, it runs tests related to files changed since the last commit. Every time you save a file, it will re-run 
the tests.


If a new page needs testing, add it to the array of URLs in the .pa11yci.json file.

```bash
# Installs relevant dependencies
npm install 

# Runs tests in node-dojo (ReactJS) 
./tasks test_react

# Runs tests in node-dojo 
./tasks test_server

# Runs accessibility tests in node-dojo
./tasks access_test
```

### Pre-commit Checks

Build and runs a local docker container with the ReactJS App exposed on Port 3000 for final checks.

Builds docker containers `deductions/gp-portal:<commit-no>` and `deductions/gp-portal:latest`.

```bash

# Builds local docker container with ReactJS App contained 
./tasks build_docker_local

# Runs the local docker container exposing port 3000
./tasks run_docker_local
```
