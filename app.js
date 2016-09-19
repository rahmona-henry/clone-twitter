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

app.get('/signUp', function (req, res) {
  res.render('signUp', {layout:'_layout'})
})

app.get('/secret', function(req, res){
  if(!req.session.userId) {
    res.redirect('/signIn')
  } else {
    res.render('secret', {userId:req.session.userId, layout:'_layout'})
  }
})

app.get('newTweet', function(req,res){
  if(!req.session.userId){
    res.redirect('/signIn')
  } else {
    res.render('tweetPost', {id: req.session.userId, layout:'_layout'})
  }
})

app.get('/signOut', function(req, res){
  req.session.destroy()
  res.render('signOut', {layout:'_layout'})
})



return app
}
