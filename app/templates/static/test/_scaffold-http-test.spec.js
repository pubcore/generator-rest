'use strict'
const {expect, request} = require('chai').use(require('chai-http')),
  express = require('express'),
  app = express(),
  error = err => {throw err}

app.use((req, res, next) => {
  //add some test data to req object ..
  next()
})
app.use((req, res) => res.send('Hello World example'))

describe('stub', () => {
  it('response with Hello World', () => {
    return request(app).get('/foo').send().then(
      res => {
        expect(res).to.have.status(200)
        expect(res.text).to.contain('Hello World example')
      }, error
    )
  })
})
