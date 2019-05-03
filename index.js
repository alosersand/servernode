const express = require('express')
const app = express()
const fs = require('fs')
let port = process.argv[2] || 8080

app.get('/books', function(req, res){
  const filename = process.argv[2]
  fs.readFile(filename, function(e, data) {
    // 500 Internal Server Error
    if (e) return res.sendStatus(500)
    try {
      books = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(books)
  })
})

app.get('/menu', function(req, res){
  const filename = process.argv[3]
  fs.readFile(filename, function(e, data) {
    // 500 Internal Server Error
    if (e) return res.sendStatus(500)
    try {
      menu = JSON.parse(data)
    } catch (e) {
      res.sendStatus(500)
    }
    res.json(menu)
  })
})

app.listen(port)