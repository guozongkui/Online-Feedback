const router = require('./router')
const express = require('express')
const app = express()
const api = require('./api')

app.get('/feedback', (req, res, next) => {
  api.feedback(req, res, next);
})

// app.use('/api',router)
app.listen(3000)

console.log('success listen at port:3000......')