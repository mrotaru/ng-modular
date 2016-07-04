'use strict'

module.exports = {
  templateUrl: 'books/list.html',
  controllerAs: 'vm',
  controller: controller
}

function controller (Books, $location) {
  let vm = this

  vm.$onInit = function () {
    Books.getAll()
      .then((res) => { vm.books = res.data })
  }

  vm.increaseRating = (book) => book.rating++
  vm.decreaseRating = (book) => book.rating--
  vm.showDetails = (id) => $location.path(`/book/${id}`)
  vm.setRating = (book, rating) => { book.rating = rating }
}
