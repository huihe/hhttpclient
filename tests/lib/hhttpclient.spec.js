
describe('hhttpclient.js', function(){
  
  var hhttpclient = require('../../lib/hhttpclient');

  describe('get', function(){
    it('should return ok', function(done){
      hhttpclient().get('test.com').then(
        function(ok){
          done();
        })
    })
  })


});