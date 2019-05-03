const express = require('express')
const app = express()
const { settings } = require('./settings')
const { test } = require('./settings')

const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

console.log(settings)
console.log(test)

// app.get('/', (req, res) => {
//   res.send('Ciao')
// })

app.use('/users', users)
app.use('/personaggi', personaggi)

app.listen(port)