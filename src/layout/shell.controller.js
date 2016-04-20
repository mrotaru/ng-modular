'use strict';

angular
  .module('app.layout')
  .controller('Shell', Shell);

Shell.$inject = ['$timeout', '$log', '$rootScope', '$route', 'config'];
function Shell($timeout, $log, $rootScope, $route, config) {
  var vm = this;

  vm.title = config.appTitle;
  vm.busyMessage = 'Please wait ...';
  vm.isBusy = false;
  vm.showSplash = true;
  var logger = $log.getInstance('c:shell');

  activate();

  function activate() {
    logger.debug(config.appTitle + ' loaded!');
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
    logger.debug('Shell $routeChangeStart');
    vm.isBusy = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(event, next, nextParams) {
    logger.debug('Shell $routeChangeSuccess');
    vm.isBusy = false;
  });

  $rootScope.$on('$routeChangeError', function(event, next, nextParams) {
    logger.debug('Shell $routeChangeError');
    vm.isBusy = false;
  });
}
