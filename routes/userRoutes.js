const express = require('express')
const router = express.Router()

router.post('/', (req, res) =>{
    res.status
})

router.get('/', (req, res) => {
    res.status(200).json({message: 'Chavez es gay'})
})

module.exports = router