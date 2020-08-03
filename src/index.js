const express = require('express')
const Route = express.Router()

const articles = require('./routes/articles')
const books = require('./routes/books')

Route.use('/articles', articles)
Route.use('/books', books)

module.exports = Route
