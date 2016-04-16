var benv = require('benv')

//benv.setup(() => benv.expose({angular: benv.require('../../node_modules/angular/angular.js')}))
//benv.setup(() => benv.expose({angular: require('angular')}))
benv.setup(function() {
  benv.expose({
    Node: window.Node
    angular: require('angular')
  });

  var controller = require('./controller.js');
  var service = require('./service.js');

  var m = angular.module;
  console.log(angular);

  benv.teardown()

});

