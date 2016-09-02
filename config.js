var express = require('express')
var hbs = require('express-hbs')
var session = require('express-session')
var KnexSessionsStore = require('connect-sessions-knex')(sessions)

var app = express()
var path = require('path')
var knex = require('knex')
var bodyParser = require('body-parser')

app.use(express.static('views'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')
app.use(bodyParser.uelencoded({extended:true}))

var knex = require('knex')({
  client: 'pg',
  connection: {
    filename: ...........
  },

  useNullAsDefault:true
})

var store = new KnexSessionsStore({knex:knex})
app.use(session({
  secret: 'protractor',
  saveUninitialized: true,
  resave: true,
  store: store
}))
app.knex = knex

module.exports = {
  app:app,
  knex:knex
}
