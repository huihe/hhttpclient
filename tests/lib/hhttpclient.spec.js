'use strict'
var assert = require('assert');

describe('hhttpclient.js', function(){
  
  var hhttp = require('../../lib/hhttpclient');

  describe('get', function(){
    it('should return ok', function(done){
      hhttp.get('http://hhttpserver.getsandbox.com/health').then(
        function(res){
          assert.equal(200, res.statusCode)
          assert.equal('ok', res.body.status)
          //console.log('     body: ' + JSON.stringify(res))
          done();
        })
    })

    it('should return 404 when url is invalid', function(done){
      hhttp.get('http://hhttpserver.getsandbox.com/dummy').then(
        function(res){
          assert.equal(404, res.statusCode)
          //console.log('     body: ' + JSON.stringify(res))
          done();
        })
    })

    it('should return 400 when url is invalid', function(done){
      hhttp.get('http://hhttpserverdummy.getsandbox.com/dummy').then(
        function(res){
          assert.equal(400, res.statusCode)
          //console.log('     body: ' + JSON.stringify(res))
          done();
        })
    })

  })

  describe('post', function(){
    it('should return 201', function(done){
      var data = { username: 'testuser' }
      hhttp.postJson('http://hhttpserver.getsandbox.com/users', JSON.stringify(data)).then(
        function(res){
          assert.equal(201, res.statusCode)
          done();
        })
    })

  })

  describe('postJson', function(){
    it('should return 201', function(done){
      var data = { 'username': "testuser"}
      hhttp.postJson('http://hhttpserver.getsandbox.com/users', data).then(
        function(res){
          assert.equal(201, res.statusCode)
          done();
        })
    })

  })


});