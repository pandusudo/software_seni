const articlesModel = require('../models/articles')

module.exports = {
  searchArticle: (req, res) => {
    var {q, sort} = req.query

    q = typeof name !== 'undefined' ? name : ''
    sort = typeof sort !== 'undefined' ? sort : 'newest'

    articlesModel.searchArticle(q, sort).then(result => {
      res.json({
        status: 200,
        data: result,
        message: 'search articles success'
      })
    }).catch(err => {
      console.log(err);
      res.status(500).json({
        status: 500,
        message: err
      })
    })
  }
}
