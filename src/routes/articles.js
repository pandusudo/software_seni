const express = require('express')
const Route = express.Router()

const articlesController = require('../controllers/articles')

Route
  .get('/', articlesController.searchArticle)
  .get('/:id', articlesController.getArticle)

module.exports = Route
