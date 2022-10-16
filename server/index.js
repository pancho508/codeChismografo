const express = require('express')
const router = require('./router.js')
// console.log("1. this is the router", router)
const app = express()

app.use(express.json());

app.use(express.static('./clientReact'))

app.use('/user-management', router)

app.listen(3333, (err) => {
    if (err) throw err
    console.log('your server started on 3333')    
})
