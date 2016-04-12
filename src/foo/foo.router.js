'use strict';

angular
  .module('app.foo')
  .run(configRoutes);

configRoutes.$inject = ["RouteHelper"];

function configRoutes(RouteHelper) {
  RouteHelper.configureRoutes([{
    url: '/foos',
    config: {
      templateUrl: '/views/foo/foos.page.html',
      controller: 'FoosController',
      controllerAs: 'vm',
      title: 'Foos',
      settings: {
        nav: 2
      }
    }
  },{
    url: '/foo/:fooId',
    config: {
      templateUrl: '/views/foo/foo.html',
      controller: 'FooController',
      controllerAs: 'vm'
    }
  }])
}
