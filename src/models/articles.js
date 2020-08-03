const axios = require('axios')
require('dotenv/config')

const MAIN_URL = process.env.REQUEST_LINK + '/search/v2'
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
    })
  },
  getArticle : (id) => {
    return new Promise(function(resolve, reject) {
      axios.get(`${MAIN_URL}/articlesearch.json?q=${''}&sort=${'newest'}&api-key=${API_KEY}`)
      .then(res => {
        console.log(res.data.response.docs.find(o => o._id.split('/')[o._id.split('/').length - 1] == id));
        resolve(res.data.response.docs.find(o => o._id.split('/')[o._id.split('/').length - 1] == id))
      })
      .catch(err => {
        console.log(err);
        reject(err)
      })
    })
  }
}
