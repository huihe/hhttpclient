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

