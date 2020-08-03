const express = require('express')
const Route = express.Router()

// routes
const articles = require('./routes/articles')
const books = require('./routes/books')

// initialize routes
Route.use('/articles', articles)
Route.use('/books', books)

module.exports = Route
