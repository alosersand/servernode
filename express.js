const express = require('express')
let port = process.argv[3] || 3000;
const app = express()

if (process.argv[2] === 'v')
  console.log('MyApp verisione 0.0.1')
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(port)

console.log(`Servver runnuning at http://127.0.0.1:${port}`)