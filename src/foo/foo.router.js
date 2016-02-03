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
      resolve: { 
        'foos': ["Foo", function(Foo){
          return Foo.getData();
        }]
      },
      title: 'Foos',
      settings: {
        nav: 2
      }
    }
  }])
}
