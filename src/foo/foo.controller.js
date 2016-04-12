'use strict';

angular
  .module("app.foo")
  .controller("FooController", FooController);

FooController.$inject = ["$scope", "$route", "$routeParams", "Foos", "Logger"];

function FooController($scope, $route, $routeParams, Foos, Logger) {
  var vm = this;

  activate();

  function activate() {
    Foos.getFoo($routeParams.fooId).then(function(foo){
      vm.foo = foo;
      console.log('got foo', foo);
    }).catch(function(err) { console.error(err) });
  }
}
