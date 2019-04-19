const express = require('express')
// let port = process.PORT || 3000
let port = process.argv[2] || 3000
const app = express()

if (process.argv[2] === 'v')
  console.log('MyApp verisione 0.0.1')
 
app.use(express.static(__dirname + '/public'))
 
app.listen(port)

console.log(`Servver runnuning at http://127.0.0.1:${port}`)