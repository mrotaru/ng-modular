'use strict';

angular
  .module("app.core")
  .factory("Data", Data);

Data.$inject = ["$http", "$q", "$log", "$timeout"];

function Data($http, $q, $log, $timeout) {
  var inited = false;
  var logger = $log.getInstance('s:data');
  var service = {
    get: get
  }
  return service;

  // build data
  var data =  {
    'foos': [],
    'bars': []
  };
  for (var i = 0; i < 40; ++i) {
    data.foos.push({id: i, type: 'foo', blurb: 'this is the blurb for the "foo" item with id of ' + i});
    data.bars.push({id: i, type: 'bar', blurb: 'blurb for "bar" # ' + i});
  }

  function get(url) {
    logger.debug('Data.get', url);
    var deferred = $q.defer();

    var urlSplit = url.split('/');
    var path1 = urlSplit[1];
    var id = urlSplit.length === 3 ? parseInt(urlSplit[2]) : null;

    if(path1 === 'foos' && urlSplit.length === 2) {
      $timeout(function() {
        deferred.resolve(data.foos.slice(0,19).map(function(item){
          return {id: item.id, type: item.type};
        }));
      }, 2000);
    } else if(path1 === 'bars' && urlSplit.length === 3) {
      $timeout(function() { deferred.resolve(data.bars[id]); }, 2000);
    } else if(path1 === 'token' && urlSplit.length === 3) {
      $timeout(function() { deferred.resolve(id); }, 2000);
    } else if(path1 === 'foos' && urlSplit.length === 3) {
      $timeout(function() { deferred.resolve(data.foos[id]); }, 2000);
    } else {
      return $q.reject({code: 404, url: url});
    }

    return deferred.promise;
  }
}
