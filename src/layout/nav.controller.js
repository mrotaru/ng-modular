'use strict';

angular
  .module("app.layout")
  .controller("NavController", NavController);

NavController.$inject = ["$route", "RouteHelper"];
function NavController($route, RouteHelper) {
  var vm = this;
  vm.isCurrent = isCurrent;

  activate();

  function activate() {
    vm.routes = RouteHelper.getRoutes();
    vm.navRoutes = vm.routes.filter(function(route) {
      return route.settings && route.settings.nav;
    }).sort(function(route1, route2){
      return route1.settings.nav - route2.settings.nav;
    });
  }

  function isCurrent(route) {
    if (!route.title || !$route.current || !$route.current.title) {
      return false;
    }
    var currentTitle = $route.current.title;
    var title = route.title;
    return currentTitle.substr(0, title.length) === title ? true : false;
  }
}
