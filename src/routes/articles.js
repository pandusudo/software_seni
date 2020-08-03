const express = require('express')
const Route = express.Router()

// import article controller
const articlesController = require('../controllers/articles')

// initialize routes for articles
Route
  .get('/', articlesController.searchArticle)
  .get('/:id', articlesController.getArticle)

module.exports = Route
