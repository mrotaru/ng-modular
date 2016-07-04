'use strict'

module.exports = function () {
  this.$get = function (Data) {
    return {
      getById: (id) => Data.request({url: `book/${id}`}),
      getAll: () => Data.request({url: 'books'})
    }
  }
}
