'use strict'

module.exports = function (Data) {
  return {
    getById: (id) => Data.request({url: `book/${id}`}),
    getAll: () => Data.request({url: 'books'})
  }
}
