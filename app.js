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

///////////////POST ROUTES//////////////


app.post('/signUp', function(req, res){
  // if(req.body.email===''){
  //   res.redirect('/signUp')
  // }

var hash = bcrypt.hashSync(req.body.hashed_password, 10)
console.log(req.body.hashed_password, req.body.email)
knex('users').insert({email: req.body.email, password:hash})
  .then(function(data){
    req.session.userId= req.body.email
    res.redirect('/secret')
  })
  .catch(function(error){
    req.session.userId = 0
      res.redirect('signIn')
  })
})


app.post('/signIn', function(req, res){
    knex('users').where('email', req.body.email)
    .then(function(data){
      if(req.body.email ===''){
        res.redirect('/signIn')
      }
      else if (bcrypt.compareSync(req.body, data[0].hashed_password)){
        req.session.userId = data[0].id
        res.redirect('/secret')
        console.log('success! sign in happened by critter #' + req.session.userId +'!')
      }
      else {
        console.log('incorrect password')
        res.redirect('/signIn')
      }
    })
    .catch(function(error){
      console.log('There has been a problem', error)
      req.session.userId = 0
      res.redirect('/signUp')
    })
})

return app
}
