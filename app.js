var bcrypt = require('bcrypt')
var config = require('./config.js')


module.exports = function(knex) {
var app = config(knex)



////////////// get routes ////////////

app.get('/signIn', function(req, res){
  res.render('signin', {layout:'_layout'})
})





return app
}
