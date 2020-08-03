const axios = require('axios')
require('dotenv/config')

const MAIN_URL = process.env.REQUEST_LINK
const API_KEY = process.env.API_KEY

module.exports = {
  searchArticle : (q, sort) => {
    return new Promise(function(resolve, reject) {
      axios.get(`${MAIN_URL}/articlesearch.json?q=${q}&sort=${sort}&api-key=${API_KEY}`)
      .then(res => {
        console.log(res);
        resolve(res.data.response.docs)
      })
      .catch(err => {
        console.log(err);
        reject(err)
      })
    });
  }
}
