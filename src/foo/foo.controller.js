'use strict';

angular
  .module("app.foo")
  .controller("FooController", FooController);

FooController.$inject = ["$scope", "$log", "$route", "$routeParams", "Foos"];

function FooController($scope, $log, $route, $routeParams, Foos) {
  var vm = this;
  var logger = $log.getInstance('foo');

  activate();

  function activate() {
    Foos.getFoo($routeParams.fooId).then(function(foo){
      vm.foo = foo;
      logger.debug('got foo', foo);
    }).catch(function(err) {
      logger.error(err)
    });
  }
}
