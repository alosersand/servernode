const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Ciao da exports')
})
  
// router.get('/personaggi', (req, res) => {
//     res.send('Personaggi')
// })

module.exports = router