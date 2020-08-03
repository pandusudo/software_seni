const express = require('express')
const Route = express.Router()

const articlesController = require('../controllers/articles')

Route
  .get('/', articlesController.searchArticle)

module.exports = Route
