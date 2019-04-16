const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content.Type': 'text/html' })
    res.write('<h1>Alessandro Marchi</h1>')
    res.end()
})

server.listen(8081, '127.0.0.1')

console.log('Servver runnuning at http://127.0.0.1:8081/')