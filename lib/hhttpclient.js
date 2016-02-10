// 'use_strict'

var promise = require('promise')
  , http    = require('http')
  , https   = require('https')
  , url     = require('url')
  // , httpStatus = require('http-status-codes')


function hhttpclient() {

  function get(uri) {
    console.log('start get ...')

    // var fullUrl = url.parse(uri)
    // var options = {
    //   host: 'www.random.org',
    //   path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    // }

    return new promise(function (resolve, reject){
      promise.resolve('done');
      // http.get(options, function (res){

      //   var body = ''
      //   response.on('data', function(chunk){
      //     body += chunk;
      //   })

      //   response.on('end', function(){
      //     var parsed = JSON.parse(body)
      //     console.log(parsed)
      //     resolve();
      //   })
      // })

    })
    
  }

  // function post(uri, data) {

  // }

  return {
    get: get
    // post: post
  }
  
}

module.exports = hhttpclient;

