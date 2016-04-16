'use strict';

angular
  .module("app.foo")
  .factory("Foos", Foos);

Foos.$inject = ["$q", "$log", "$timeout", "Data"];
function Foos($q, $log, $timeout, Data) {
  var logger = $log.getInstance('foos-service');
  var service = {
    getFoo: getFoo,
    getFoos: getFoos
  }
  return service;

  function getFoo(id) {
    logger.debug('getting Foo...');
    return Data.get('/foos/' + id.toString());
  }

  function getFoos() {
    return Data.get('/foos');
  }
}
