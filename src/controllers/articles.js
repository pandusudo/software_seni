const articlesModel = require('../models/articles')

module.exports = {
  searchArticle: (req, res) => {
    let {q, sort} = req.query

    q = typeof q !== 'undefined' ? q : ''
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
  },
  getArticle: (req, res) => {
    const {id} = req.params

    articlesModel.getArticle(id).then(result => {
      console.log(result);
      if (typeof result !== 'object') {
        res.json({
          status: 404,
          message: 'article not found'
        })
      } else {
        res.json({
          status:200,
          data: result,
          message: 'get article detail success'
        })
      }
    }).catch(err => {
      res.status(500).json({
        status: 500,
        message: 'get article detail error'
      })
    })
  }
}
