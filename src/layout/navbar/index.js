'use strict'

require('angular')
  .module('app.layout')
  .component('bmNavbar', {
    templateUrl: 'layout/navbar/view.html',
    controller: controller,
    controllerAs: 'vm'
  })

function controller (routeHelper) {
  let vm = this
  vm.routes = routeHelper.getRoutes()
  vm.getGlyphiconClass = (glyphicon) => [`glyphicon-${glyphicon}`]
  vm.isCurrent = (route) => {
    if (route.nav && route.nav.title) {
      return routeHelper.getCurrentTitle() === route.nav.title
    }
    return false
  }
  vm.getCurrentClass = (route) => vm.isCurrent(route)
    ? ['active']
    : []
}
