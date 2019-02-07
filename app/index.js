var Generator = require('yeoman-generator'),
	updateNotifier = require('update-notifier'),
	pkg = require('../package.json')

updateNotifier({pkg}).notify()

module.exports = class extends Generator {
	constructor(args, opts) {
		super(args, opts)
	}
	initializing(){
		this.parentDir = __dirname
	}
	async prompting() {
		this.answers = await this.prompt([{
			type: 'input', name: 'scope',
			message: 'Your scope (without @)',
		},{
			type    : 'input', name    : 'name',
			message : 'Your project name',
			default : ({scope}) => (scope ? `@${scope}/` : '')
				+ this.appname.replace(/\s+/g, '-')
		},{
			type: 'input', name: 'description',
			message: 'Package description',
		},{
			type: 'input', name: 'license', default: 'MIT',
			message: 'License',
		},{
			type: 'input', name: 'author',
			message: 'Author',
		},{
			type: 'input', name: 'repository',
			message: 'Repository uri',
		}])
	}
	writing(){
		//static files
		this.fs.copy(
			this.templatePath('static/**/*'),
			this.destinationPath('.'),
			{globOptions:{dot:true}}
		)
		//files with replacements prams based on answers
		this.fs.copyTpl(
			this.templatePath('package_json'),
			this.destinationPath('package.json'),
			{...this.answers}
		)
	}
	install(){
		this.log('Install packages ...')
		this.npmInstall([
			'babel-cli', 'babel-plugin-transform-object-rest-spread',
			'babel-preset-env', 'chai', 'chai-http', 'eslint',
			'eslint-plugin-mocha', 'express', 'mocha', 'nyc'
		], {'save-dev': true })
	}
}
