'use_strict'

var Promise = require('promise')
var http    = require('http')
var https   = require('https')
var url     = require('url')
  // , httpStatus = require('http-status-codes')


function hhttpclient() {

  function getHttpRequestOptions(uri) {
    var urlObj = url.parse(uri)
    var options = {
      host    : urlObj.hostname,
      path    : urlObj.pathname,
      headers : {}
    }

    return options;
  }

  function get(uri) {
    var options = getHttpRequestOptions(uri)

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

  function post(uri, data) {
    var options = getHttpRequestOptions(uri)
    options.method = 'POST'
    options.headers['Content-Type'] = 'application/json'
       
    return new Promise(function (resolve, reject){
      try {
          var req = https.request(options, function (res) {
              res.setEncoding('utf8');
              res.on('data', function (body) {
                  var result =
                  {
                      statusCode: res.statusCode,
                      body: {}
                  }
                  result.body = body;
                  resolve(result);
                  return;
              });
          }).on('error', function(error) {
              console.log("When posting to: " + endPoint, ", error: " + error)
              reject(error);
          });

          req.write(data)
          req.end()    
                     
      } catch (exc) {
          // got below error when data is json object
          // TypeError: first argument must be a string or Buffer
          console.log("When posting to: " + uri, ", exception: " + exc)
          reject(exc);                
      }
    })

  }

  function postJson(uri, jsonObj) {
    return post(uri, JSON.stringify(jsonObj))
  }

  return {
    get: get,
    post: post,
    postJson: postJson
  }
  
}

module.exports = hhttpclient();

