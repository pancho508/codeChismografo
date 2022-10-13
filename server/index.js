const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello Pancho Del Rancho')
})

app.listen(3333)