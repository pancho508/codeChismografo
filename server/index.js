const express = require('express')
const app = express()

app.use(express.static('./client'))

app.get('/user', function (req, res) {
  res.send('user get')
})

app.post('/user', function (req, res) {
  res.send('user post')
})

app.listen(3333, (err) => {
    if (err) throw err
    console.log('your server started on 3333')    
})
