'use strict';

angular
  .module("app.core")
  .factory("data", appData);

appData.$inject = ["$http", "$q"];

function appData($http, $q) {
  var inited = false;
  var service = {
    ready: ready
  }
  init();
  return service;

  function init() {
    inited = true;
  }

  function ready() {
    $q.when({
      id: 42,
      name: "John"
    });
  }
}
