// import book model
const booksModel = require('../models/books')

module.exports = {
  searchBooks: (req, res) => {
    // get query params
    let {list, date, q} = req.query

    // check if there is a value, if not, set to default
    list = typeof list !== 'undefined' ? list : 'hardcover-fiction'
    date = typeof date !== 'undefined' ? date : 'current'
    q = typeof q !== 'undefined' ? q : ''

    // call searchBooks function in booksModel
    booksModel.searchBooks(list, date, q).then(result => {
      // success response
      res.json({
        status: 200,
        data: result,
        message: 'search books success'
      })
    }).catch(err => {
      // error response
      res.status(500).json({
        status: 500,
        message: err
      })
    })
  },
}
