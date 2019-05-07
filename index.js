const express = require('express')
// const https = require('https')
const app = express()
const { settings } = require('./settings')
const { test } = require('./settings')
const package = require('./package')

const users = require('./routes/users')
const personaggi = require('./routes/personaggi')
let port = process.argv[2] || 8080

app.use(express.urlencoded({extended: false}))

const myLogger = (req, res, next) => {
    console.log('LOGGED')
    next()
}

app.use(myLogger)

console.log(settings)
console.log(test)

// app.get('/', (req, res) => {
//   res.send('Ciao')
// })

app.use('/v0.1/users', users)
app.use('/v0.1/personaggi', personaggi)
app.use(`/v${package.version}/personaggi`, personaggi)

app.use((req, res) => {
    res.status(404).send('What???')
})

app.listen(port)