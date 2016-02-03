'use strict';

angular
  .module("app.foo")
  .factory("Foo", Foo);

Foo.$inject = ["$q", "$timeout"];
function Foo($q, $timeout) {
  var service = {
    getData: getData
  }
  return service;

  function getData() {
    var deferred = $q.defer();
    $timeout(function() {
      deferred.resolve([
        {fooString: "data 1 from Foo svc", fooNumber: 1},
        {fooString: "data 2 from Foo svc", fooNumber: 2}
      ]);
    }, 2000);
    return deferred.promise;
  }
}
