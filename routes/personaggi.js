const express = require('express')
const router = express.Router()
const characters = require('../data/characters')


router.get('/', (req, res) => {
    const query = req.query
    let personaggi = characters.characters

    if ('lastname' in query) {
        personaggi = personaggi.filter((personaggio) => {
            return personaggio.lastname === query.lastname
        })
    }

    res.send(personaggi)
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('ID: ', id)
    res.send(`personaggio id: ${id}`)
})

module.exports = router