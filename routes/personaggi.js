const express = require('express')
const router = express.Router()
const characters = require('../data/characters')


router.get('/', (req, res, next) => {
    let personaggi = characters.characters
    const query = req.query

    if ('lastname' in query) {
        personaggi = personaggi.filter((personaggio) => {
            return personaggio.lastname === query.lastname
        })
    }

    if ('firstname' in query) {
        personaggi = personaggi.filter((personaggio) => {
            return personaggio.firstname === query.firstname
        })
    }

    res.send(personaggi)
    next()

}, (req, res) => {
        console.log('FIRE 2')
    }
)

router.get('/:id', (req, res) => {
    let personaggi = characters.characters
    const id = Number(req.params.id)

    console.log('ID: ', id)
    // res.send(`personaggio id: ${id}`)
    res.json(personaggi.filter((personaggio) => personaggio.id === id))
})

module.exports = router