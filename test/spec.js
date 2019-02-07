const helpers = require('yeoman-test'),
	path = require('path'),
	fs = require('fs'),
	{ok} = require('assert').strict,
	appDir = path.join(__dirname, '../app'),
	prompts = {
		name:'@sope/packageName',
		description: 'lorem ipsum',
		license: 'MIT'
	}

describe('generator of pubcore component for RESTful api', () => {
	it('copies config files for git, eslint', () =>
		helpers.run(appDir).withPrompts(prompts).then(dir => {
			ok(fs.existsSync(`${dir}/.gitignore`))
			ok(fs.existsSync(`${dir}/.eslintrc.js`))
		})
	)
	it('prepares package.json based on answers', () =>
		helpers.run(appDir).withPrompts(prompts).then(dir => {
			var json = fs.readFileSync(`${dir}/package.json`)
			ok(json.indexOf('"name": "@sope/packageName"') > 0, json)
		})
	)
})
