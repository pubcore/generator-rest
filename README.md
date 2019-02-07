[![Build Status](https://travis-ci.org/pubcore/generator-rest.svg?branch=master)](https://travis-ci.org/pubcore/generator-rest)

## Commandline tool create a pubcore component for a RESTful api scaffolding

### Prerequisites
* latest version of nodejs
* latest version of npm
* optional (Install will succeed without this, too):  
@pubcore/node-composition installed and context_path is added in config.json

### It will create/setup minimum package structure to support
* eslint
* babel transpiler
* testing via express and mocha

### Install it global
	npm install -g yo @pubcore/generator-rest

### How to use
1) create a directory  
(convention: lower case, dash-separated)

		mkdir my-api

2) and change into it

		cd my-api

3) execute

		yo @pubcore/rest
