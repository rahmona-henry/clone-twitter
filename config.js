var express = require('express')
var hbs = require('express-hbs')
var session = require('express-session')

var app = express()
var path = require('path')
var bodyParser = require('body-parser')

app.use(express.static('views'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(bodyParser.uelencoded({extended:true}))
