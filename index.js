var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
	console.log('Accessing the secret section ...')
  res.send('hello world')
})