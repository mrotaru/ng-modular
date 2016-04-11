'use strict';

angular
  .module("app.foo")
  .factory("Foos", Foos);

Foos.$inject = ["$q", "$timeout", "Data", "Logger"];
function Foos($q, $timeout, Data, logger) {
  var service = {
    getFoo: getFoo,
    getFoos: getFoos
  }
  return service;

  function getFoo(id) {
    logger('getting Foo...');
    return Data.get('/foos/' + id.toString());
  }

  function getFoos() {
    return Data.get('/foos');
  }
}
