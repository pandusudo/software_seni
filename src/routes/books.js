const express = require('express')
const Route = express.Router()

// import book controller
const booksController = require('../controllers/books')

// initialize routes for books
Route
  .get('/', booksController.searchBooks)

module.exports = Route
