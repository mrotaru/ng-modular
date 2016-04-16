'use strict';

angular
  .module('app.layout')
  .controller('Shell', Shell);

Shell.$inject = ['$timeout', '$log', '$rootScope', '$route', 'config'];
function Shell($timeout, $log, $rootScope, $route, config) {
  var vm = this;

  vm.title = config.appTitle;
  vm.busyMessage = 'Please wait ...';
  vm.isBusy = true;
  vm.showSplash = true;
  var logger = $log.getInstance(config.appTitle);

  activate();

  function activate() {
    logger.log('loaded!');
//    Using a resolver on all routes ordataservice.ready in every controller
//    dataservice.ready().then(function(){
//      ();
//    });
    hideSplash();
  }

  function hideSplash() {
    $timeout(function() {
      vm.showSplash = false;
    }, 1000);
  }

  $rootScope.$on('$routeChangeStart', function(event, next, nextParams) {
    logger.log('Shell $routeChangeStart');
    vm.isBusy = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(event, next, nextParams) {
    logger.log('Shell $routeChangeSuccess');
    vm.isBusy = false;
  });

  $rootScope.$on('$routeChangeError', function(event, next, nextParams) {
    logger.log('Shell $routeChangeError');
    vm.isBusy = false;
  });
}
