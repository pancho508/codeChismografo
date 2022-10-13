const express = require('express')
const router = require('./router.js')
console.log("this is the router", router)
const app = express()

app.use(express.json());

app.use(express.static('./client'))

app.use('/test', router)

app.get('/user', function (req, res) {
  res.send('user get')
})

app.post('/user', function (req, res) {
  console.log('this is req.body', req.body)
  res.send('bajo construction')
})

app.listen(3333, (err) => {
    if (err) throw err
    console.log('your server started on 3333')    
})
