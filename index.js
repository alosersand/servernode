const http = require('http')

const server = http.createServer(function (req, res) {
    res.writeHead(200, { 'Content.Type': 'text/html' })
    res.write('Hello World')
    res.end()
})

server.listen(8080, '127.0.0.1')

console.log('Servver runnuning at http://127.0.0.1:8080/')