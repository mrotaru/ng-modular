'use strict';

angular
  .module('app.layout')
  .controller('Shell', Shell);

Shell.$inject = ['$timeout', '$rootScope', '$route', 'config', 'Logger'];
function Shell($timeout, $rootScope, $route, config, Logger) {
  var vm = this;

  vm.title = config.appTitle;
  vm.busyMessage = 'Please wait ...';
  vm.isBusy = true;
  vm.showSplash = true;
  var log = Logger();

  activate();

  function activate() {
    log(config.appTitle + ' loaded!', null);
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
    console.log('Shell $routeChangeStart');
    vm.isBusy = true;
  });

  $rootScope.$on('$routeChangeSuccess', function(event, next, nextParams) {
    console.log('Shell $routeChangeSuccess');
    vm.isBusy = false;
  });

  $rootScope.$on('$routeChangeError', function(event, next, nextParams) {
    console.log('Shell $routeChangeError');
    vm.isBusy = false;
  });
}
