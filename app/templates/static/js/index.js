'use strict'
const getWelcome = require('./getWelcome')

exports.default = {
	http : [{
		routePath: '/foo',
		map: getWelcome,
		method: 'GET',
		accepted: ['application/json']
	}]
}
