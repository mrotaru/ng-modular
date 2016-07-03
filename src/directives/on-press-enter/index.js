module.exports = function directive (scope, element, attrs) {
  element.bind('keydown keypress', function (event) {
    if (event.which === 13) {
      scope.$apply(function () {
        scope.$eval(attrs.bmEnter)
      })
      event.preventDefault()
    }
  })
}
