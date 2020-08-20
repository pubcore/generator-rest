'use strict'
const {expect, request} = require('chai').use(require('chai-http')),
	express = require('express'),
	app = express(),
	compose = require('@pubcore/node-composition').default

app.use('/', compose(
	{componentDefault:{public:true}, components:{'../js/index':{context_path:''}}},
	require
))

describe('stub', () => {
	it('response with Welcome', async () =>  {
		var res = await request(app).get('/foo').send()
		expect(res).to.have.status(200)
		expect(res.text).to.contain('Welcome')
	})
})
