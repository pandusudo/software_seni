// import article model
const articlesModel = require('../models/articles')

module.exports = {
  searchArticle: (req, res) => {
    // get query params
    let {q, sort} = req.query

    // check if there is a value, if not, set todo default
    q = typeof q !== 'undefined' ? q : ''
    sort = typeof sort !== 'undefined' ? sort : 'newest'

    // call searchArticle function in articlesModel
    articlesModel.searchArticle(q, sort).then(result => {
      // success response
      res.json({
        status: 200,
        data: result,
        message: 'search articles success'
      })
    }).catch(err => {
      // error response
      res.status(500).json({
        status: 500,
        message: err
      })
    })
  },
  getArticle: (req, res) => {
    // get params
    const {id} = req.params

    articlesModel.getArticle(id).then(result => {
      // check if article with following id is exist or not
      if (typeof result !== 'object') {
        // article with following id not found
        res.json({
          status: 404,
          message: 'article not found'
        })
      } else {
        // article found
        res.json({
          status:200,
          data: result,
          message: 'get article detail success'
        })
      }
    }).catch(err => {
      // error response
      res.status(500).json({
        status: 500,
        message: 'get article detail error'
      })
    })
  }
}
