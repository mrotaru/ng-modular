'use strict';

angular
  .module("app.core")
  .factory("Data", Data);

Data.$inject = ["$http", "$q"];

function Data($http, $q) {
  var inited = false;
  var service = {
    get: get
  }
  init();
  return service;

  function init() {
    inited = true;
  }

  function get(url) {
    console.log('get request:', url);
    var match = url.match(/\/(foos|token)\/(\d+)/);
    if(!match)
      return $q.reject(404);
    console.log('got match', match);
    var deferred = $q.defer();
    if(match[1] === 'foos') {
      $timeout(function() {
        deferred.resolve({
          name: 'Foo ' + match[2].toString(),
          id: match[2]
        });
      }, 2000);
    }
    if(match[1] === 'token') {
      console.log('getting a token');
      $timeout(function() {
        deferred.resolve({
          token: 'abc123'
        });
      }, 2000);
    }
    return deferred.promise;
  }
}
