'use strict'
var assert = require('assert');

describe('hhttpclient.js', function(){
  
  var hhttp = require('../../lib/hhttpclient');

  describe('get', function(){
    it('should return ok', function(done){
      hhttp.get('test.com').then(
        function(ok){
          assert.equal(200, ok.statusCode)
          console.log('body: ' + JSON.stringify(ok))
          done();
        })
    })
  })


});