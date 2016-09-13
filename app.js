var bcrypt = require('bcrypt')
var config = require('./config.js')


module.exports = function(knex) {
var app = config(knex)



//////////////GET ROUTES////////////

app.get('/', function(req,res){
  if(!req.session.userId){
    res.redirect('/signIn')
  } else {
    res.render('secret', {id: req.session.UserId, layout:'_layout'})
  }
})

app.get('/signIn', function(req, res){
  res.render('signin', {layout:'_layout'})
})





return app
}
