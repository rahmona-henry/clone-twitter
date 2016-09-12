var express = require('express')
var hbs = require('express-hbs')
var session = require('express-session')
var KnexSessionsStore = require('connect-sessions-knex')(sessions)

var app = express()
var path = require('path')
var bodyParser = require('body-parser')

app.use(express.static('public'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(bodyParser.uelencoded({extended:true}))

module.exports = function(knex) {
  var store = new KnexSessionStore({ knex: knex})
  app.use(session({
    secret: 'ssshhhhhh! Top secret!',
    saveUninitialized: true,
    resave: true,
    store: store
  }))
  app.knex = knex
  return app
}
