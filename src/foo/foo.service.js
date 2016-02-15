'use strict';

angular
  .module("app.foo")
  .factory("Foo", Foo);

Foo.$inject = ["$q", "$timeout", "Data", "Logger"];
function Foo($q, $timeout, Data, Logger) {
  var service = {
    getFoo: getFoo
  }
  return service;

  function getFoo(id) {
    logger.info('getting Foo...');
    return Data.get('foos/' + id.toString());
  }
}
