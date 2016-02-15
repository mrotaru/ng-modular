'use strict';

angular
  .module("app.foo")
  .controller("FoosController", FoosController);

FoosController.$inject = ["$scope", "$route", "Foos", "Logger"];

function FoosController($scope, $route, Foos, Logger) {
  var vm = this;

  activate();

  function activate() {
    $scope.foo = "foo from Foo ctrl";
    Foos.getFoo(1).then(function(foo){
      console.log('got foo', foo);
      vm.foos = [foo];
    }).catch(function(err) { console.error(err) });
  }
}
