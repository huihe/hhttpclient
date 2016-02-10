'use_strict'

var Promise = require('promise')
var http    = require('http')
var https   = require('https')
var url     = require('url')
  // , httpStatus = require('http-status-codes')


function hhttpclient() {

  function get(uri) {
    //console.log('start get ...')

    var fullUrl = url.parse(uri)
    var options = {
      host: 'www.random.org',
      path: '/integers/?num=1&min=1&max=10&col=1&base=10&format=plain&rnd=new'
    }

    return new Promise(function (resolve, reject){
      https.get(options, function (response){
        var result = {
          statusCode: response.statusCode,
          body: {}
        }

        var body = ''
        response.setEncoding('utf8');
        response.on('data', function (chunk){
          // don't use result.body here, will get [object Object] when stringify result.body
          //result.body += chunk
          body += chunk
        })

        response.on('end', function(){
          result.body = JSON.parse(body)
          resolve(result);
        })

      }).on('error', function (error){
        reject(error)
      })

    })
    
  }

  // function post(uri, data) {

  // }

  return {
    get: get
    // post: post
  }
  
}

module.exports = hhttpclient();

