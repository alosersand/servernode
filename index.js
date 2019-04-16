const http = require('http')
const port = 8081

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
            [
                {
                    "nome": "Mario",
                    "cognome": "Rossi"
                },
                {
                    "nome": "Ken",
                    "cognome": "Norris"
                }
            ]
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