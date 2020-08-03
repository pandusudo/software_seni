const express = require('express')
const Route = express.Router()

const booksController = require('../controllers/books')

Route
  .get('/', booksController.searchBooks)

module.exports = Route
