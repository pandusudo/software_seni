const booksModel = require('../models/books')

module.exports = {
  searchBooks: (req, res) => {
    let {list, date, q} = req.query

    list = typeof list !== 'undefined' ? list : 'hardcover-fiction'
    date = typeof date !== 'undefined' ? date : 'current'
    q = typeof q !== 'undefined' ? q : ''

    booksModel.searchBooks(list, date, q).then(result => {
      res.json({
        status: 200,
        data: result,
        message: 'search books success'
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        status: 500,
        message: err
      })
    })
  },
}
