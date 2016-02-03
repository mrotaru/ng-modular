'use strict';

angular
  .module("app.directives")
  .directive("d1", d1);

function d1() {
  var directive = {
    link: link,
    templateUrl: '/directives/d1.html',
    restrict: 'A'
  }
  return directive;

  function link(scope, element, attributes) {
  }
}
