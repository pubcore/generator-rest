'use strict'
const getWelcome = require('./getWelcome')

exports.default = {
  http : [{
    routePath: '/',
    map: getWelcome,
    method: 'GET',
    accepted: ['application/json']
  }]
}
