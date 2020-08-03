const axios = require('axios')
require('dotenv/config')

const MAIN_URL = process.env.REQUEST_LINK + '/books/v3'
const API_KEY = process.env.API_KEY

module.exports = {
  searchBooks : (list, date, q) => {
    return new Promise(function(resolve, reject) {
      axios.get(`${MAIN_URL}/lists/${date}/${list}.json?api-key=${API_KEY}`)
      .then(res => {
        console.log(res.data.results.books);
        if (q) {
          resolve(res.data.results.books.filter(o => o.title.includes(q.split('+').join(' '))))
        } else {
          resolve(res.data.results.books)
        }
      })
      .catch(err => {
        console.log(err);
        reject(err)
      })
    })
  },
}
