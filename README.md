# PRM Deductions Portal for GP Practices

The GP Practice Portal is a web application that will be used by GP Practice Staff to transfer a patient from
their GP practice to the NHSE Repository.

## Directories

| Directory     | Description                                                                               |
|:--------------|:------------------------------------------------------------------------------------------|
| /__mocks__    | Contains mocks for jest (i.e. `.scss` files) for test purposes
| /gocd         | Contains the GoCD pipeline file                                                           |
| /public       | (React App) Public files                                                                  |
| /scripts      | Shell scripts for automated tasks:                                                        |
|               |   *  aws-cli-assumerole.sh                                                                |
| /server       | The ExpressJS server side code that hosts the React App pages                             |
| /src          | (React App) The ReactJS web application source code for the GP Practice deductions portal |
| /terraform    | Terraform to deploy app as a Fargate task in AWS                                          |


## Prerequisites

* Node 12.x
* Docker
* [kudulab/dojo](https://github.com/kudulab/dojo)
* homebrew

### Installing dojo (OSx)

More information on dojo can be found at [kudulab/dojo GIT](https://github.com/kudulab/dojo).

```bash
brew install kudulab/homebrew-dojo-osx/dojo
```

## Environments

### Node Goals

| Goal          | Description                                                                           |
|---------------|---------------------------------------------------------------------------------------|
| clean         | Removes the current build folder                                                      |
| build         | Builds the react app (`src/` and `/public`) into a `build/` folder                    |
| start:react   | Opens a live version of the React app in a browser (port: `3000`)                     |
| serve:react   | Serves the React static pages on port 5000                                            |
| start:server  | Builds the react app before launching the Express server on port `3000` using nodemon |
| start         | Builds the react app before launching the Express server on port `3000`               |
| test:react    | Runs the React app tests                                                              |
| test:server   | Runs the Express server tests (`/server`)                                             |
| test          | Runs both the React app tests and the Express server tests                            |
| coverage      | Runs all the tests and collects coverage metrics                                      |
| eject         | Runs `react-scripts eject`                                                            |
| access        | Runs the accessibility tests, server must be running on port `5000`                   |

### Development


#### Developing ReactJS

To run during development of the ReactJS App, which will allow user to interactively see changes made
in the browser and test locally.

```bash
# Launches ReactJS App on local browser at localhost:3000
./tasks run_react_local

# Runs ReactJS Tests
npm run test:react
```

#### Developing ExpressJS (Server)

To run during development of the ExpressJS App, which will update the service while you develop the server side code.

```bash
# Launches ExpressJS server hosting the React App
./tasks run_server_local

# Runs Server (Express) Tests
npm run test:server
```

#### Access over https

Because redirects of the NHS Identity are configured to https, you should start a local proxy that serves webpage at that URL.
1. Generate certificates for your local proxy server.
 - First authenticate with AWS and export your credentials on the terminal. You can do so with:
```
dojo -c Dojofile-infra
# Then type-in your details:
aws-cli-assumerole -rmfa <role-arn> <your-username> <mfa-otp-code>
```
 - Then generate the certificates:
```
./tasks generate_certs
```
2. Add the portal address in `/etc/hosts`, as such:
```
127.0.0.1 patient-deductions.nhs.uk
```
3. Get dependencies (Note that running npm install on Mac, will produce different results, so please run the command below):
```
./tasks install
```
4. Put secrets and config in `.env` file.
```
NODE_ENV=local
REACT_APP_GP_PORTAL_IDENTITY_URL=<secret>
REACT_APP_GP_PORTAL_REDIRECT_URI=https://patient-deductions.nhs.uk/auth
REACT_APP_GP_PORTAL_USER_INFO=<secret>
REACT_APP_GP_PORTAL_CLIENT_ID=<secret>
```
5. (On a second terminal) start the local https proxy and the node server (actually runs `npm start` in docker container):
```
./tasks start_proxy
```
6. The portal should be available at the address that you configured earlier, such as `https://patient-deductions.nhs.uk`

To stop and remove the proxy, run `./tasks stop_proxy`.

#### Run Locally

The current NHS Identity will only accept three redirect uri as below.

```
https://deductions.nhs.uk/auth
https://test.patient-deductions.nhs.uk/auth
https://dev.patient-deductions.nhs.uk/auth
```


So if you want to 'test it out' you'll need to hack your DNS or /etc/hosts, 
and make sure you have right certificate for TLS, and correct environment variables. 

To generate certificate, you can use [prm-deductions-support-infra](https://github.com/nhsconnect/prm-deductions-support-infra), 
which allowed you to generate the TLS certificate based on any domain name you want.

Eg. if you want to use `https://dev.patient-deductions.nhs.uk/auth` as your NHS Identity redirect uri, 
you will need to make your localhost listen to `dev.patient-deductions.nhs.uk` and put your TLS certificate for 
`dev.patient-deductions.nhs.uk` in your root folder. Also make sure you start your proxy server.

If you don't know how to let your localhost listen to other domain, you can try to use the command as below.

Run this to clean your cache
```
dscacheutil -flushcache
```

Then run this to change your route (if you are mac, you need sudo)

```
sudo nano /private/etc/hosts
```

You have to set up your `.env`. You can see example `.evn` in the git repo.

```
NODE_ENV=local
REACT_APP_GP_PORTAL_IDENTITY_URL=https://example/oauth2/oidc
REACT_APP_GP_PORTAL_REDIRECT_URI=https://example.deductions/auth
REACT_APP_GP_PORTAL_USER_INFO=https://exampleoauth2/oidc/userinfo
REACT_APP_GP_PORTAL_CLIENT_ID=your_client_id
```

If you check everything has been set up correctly, you can start the portal locally by running 

```
npm start
```
This will start the server both frontend and backend with NHS Identity fully integrated.



### Test using node-dojo

To run before committing, runs the tests and accessibility tests within the node-dojo environment.

By default, it runs tests related to files changed since the last commit. Every time you save a file, it will re-run
the tests.

If a new page needs testing, add it to the array of URLs in the `.pa11yci.json` file.

```bash
# Installs relevant dependencies
npm install

# Runs tests in node-dojo
./tasks test

# Runs tests with coverage in node-dojo
./tasks coverage

# Runs accessibility tests in node-dojo
./tasks access_test
```

### Pre-commit Checks

Build and runs a local docker container with the ReactJS App exposed on port `3000` for final checks.

Builds docker containers `deductions/gp-portal:<commit-no>` and `deductions/gp-portal:latest`.

```bash
# Creates a package with application to be included in docker image
./tasks build

# Builds local docker container with ReactJS App contained
./tasks build_docker_local

# If you don't have the TLS certificates locally yet:
# Login to AWS:
dojo -c Dojofile-infra "aws-cli-assumerole -rmfa <role-arn> <your-aws-username> <mfa-code>"
# export variables from above

# Runs the a detached local docker container exposing port 443
./tasks run_docker_local
# (Type exit to stop)
```

Server is available on https://localhost with following problems:
 * Issuing CA is not trusted
 * It uses TLS 1.2 and it does not work on newer chrome



