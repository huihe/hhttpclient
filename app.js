var express = require('express')
var app = express()

app.use(function(req, res, next){
  console.log(req.method, req.originalUrl)
  next()
})

// absolute path
app.use(express.static(__dirname + '/public'))

app.get('/', function(req, res) {
  res.send('hello world!')
})

app.get('/super_products', function(req, res, next) {
  var httpclient = require('./lib/hhttpclient');
  var url = 'https://staging.super.myob.com/api/super_products.json'
  httpclient.get(url).then(function(data){
    res.json(data)
  })
  .catch(next)
})

app.use(function(req, res, next){
  res.status(404).send('resource not found!')
})

app.use(function(err, req, res, next){
  console.log(err.stack)
  res.sendStatus(500)
})

app.listen(3000, function(){
  console.log('up and running on port 3000.')
})

