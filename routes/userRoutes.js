const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.status(200).json({message: 'No error'})
})

router.post('/', (req, res) => {
    res.status(200).json({message: 'No error'})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: 'No error'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: 'No error'})
})
module.exports = router