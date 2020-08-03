const express = require('express')
const app = express()
const router = require('./src/index')
require('dotenv/config')
const port = process.env.SERVER_PORT || 5000

// main url
app.use('/api', router)

// serve and listening
app.listen(port, () => {
  console.log('listening to port : ' + port);
})

// page not found handler
app.get('*', (req, res) => {
  console.log('404 not found')
})
