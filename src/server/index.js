
const path = require('path')
const express = require('express')
const app = express()

app.get('/feedback', (req, res, next) => {
  res.json({
    data: 'OKOK!'
  })
})

app.listen(3000)

console.log('success listen at port:3000......')
