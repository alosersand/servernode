const http = require('http')
const port = 7070

const server = http.createServer(function (req, res) {
    console.log(req.url)
    if (req.url === '/') { //home
        res.writeHead(200, {
            'Content.Type': 'text/html'
        })
        res.write('<h1>Marchi Alessandro </h1>')
        res.end()
    } else if (req.url === '/api') {
        res.writeHead(200, {
            'Content.Type': 'text/html'
        })
        res.write(JSON.stringify(
            {
                "version": "0.1",
                "nome": "My API Personale",
                "data": "2019-04-16"
            }
        ))
        res.end()
    } else {
        res.writeHead(200, {
            'Content.Type': 'text/html'
        })
        res.write(`<h1>${req.url}</h1>`)
        res.end()
    }
})

server.listen(port, '127.0.0.1')

console.log(`Servver runnuning at http://127.0.0.1:${port}/`)