[![Build Status](https://travis-ci.org/pubcore/generator-rest.svg?branch=master)](https://travis-ci.org/pubcore/generator-rest)

## Commandline tool create a pubcore component for a RESTful api scaffolding

### Prerequisites
* latest version of nodejs
* latest version of npm

### It will create/setup minimum package structure for
* pubcore component for a @pubcore/node-composition
* eslint
* testing via express and mocha
* coverage via nyc

### How to use
1) create a directory
(convention: lower case, dash-separated)
```
mkdir my-api
```

2) and change into it
```
cd my-api
```

3) execute
```
npx -p yo -p @pubcore/generator-rest yo @pubcore/rest
```

4) (optional) execute prepared test example to check installation
```
npm run test
```