'use strict';

angular
  .module("app.core")
  .factory("Data", Data);

Data.$inject = ["$http", "$q", "$timeout"];

function Data($http, $q, $timeout) {
  var inited = false;
  var service = {
    get: get
  }
  return service;

  function get(url) {
    var deferred = $q.defer();
    console.log('Data.get', url);

    // 75% chance of 500 error
    if(Math.random() >= 0.75)
      return $q.reject(500);

    // handling two types of urls:
    var regexMulti  = /\/([a-z]+s)$/; // ex: /foos - returns an array of 'foo'
    var regexSingle = /\/([a-z]+)\/(\d+)/; // ex: /foo/1 - reutrns the foo with id of 1

    if(url.match(regexMulti)) {
      $timeout(function() {
        deferred.resolve([1,2,3,4,5].map(function(i){
          return {
            type: url.match(regexMulti)[1],
            id: i
          }
        }));
      }, 2000);
    } else if (url.match(regexSingle)) {
      var match = url.match(regexSingle);
      $timeout(function() {
        deferred.resolve({
          type: match[1],
          id: match[2],
          blurb: 'this is the blurb for item of type ' + match[1] + ' with id of ' + match[2]
        });
      }, 2000);
    } else {
      return $q.reject(404);
    }

    return deferred.promise;
  }
}
