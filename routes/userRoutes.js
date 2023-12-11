const express = require('express')
const router = express.Router()
const {getUsers} = require('../backend/controllers/userController.js')


router.get('/', getUsers)

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