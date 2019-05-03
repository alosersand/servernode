const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    const query = req.query
    let msg = 'Ciao'
    console.log('RES', query)

    if (query.key === '768654343457870695854') {
        msg = `${msg} Ale`

        if (query.sesso === 'm') {
            msg = `${msg} bell'uomo`
        }
        if (query.colore) {
            msg = `${msg} ${query.colore}`
        }
    } else {
        msg = 'Non sei autorizzato'
    }

    res.send(msg)
})
  
router.get('/:id', (req, res) => {
    const id = req.params.id
    console.log('ID: ', id)
    res.send(`personaggio id: ${id}`)
})

module.exports = router