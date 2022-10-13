const express = require('express')
const app = express()

app.use(express.static('./client'))

app.get('/hello', function (req, res) {
  res.send('Hello Pancho Del Rancho')
})

app.listen(3333, (err) => {
    if (err) throw err
    console.log('your server started on 3333')    
})
