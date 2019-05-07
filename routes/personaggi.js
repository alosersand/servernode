const express = require('express')
const router = express.Router()
const characters = require('../data/characters')


router.get('/', (req, res, next) => {
    const query = req.query
    let personaggi = characters.characters

    if ('lastname' in query) {
        personaggi = personaggi.filter((personaggio) => {
            return personaggio.lastname === query.lastname
        })
    }

    if ('firstname' in query) {
        personaggi = personaggi.filter((personaggio) => {
            return personaggio.lastname === query.firstname
        })
    }

    res.send(personaggi)
    next()

}, (req, res) => {
        console.log('FIRE 2')
    }
)

router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('ID: ', id)
    res.send(`personaggio id: ${id}`)
})

module.exports = router