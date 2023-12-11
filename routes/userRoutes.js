const express = require('express')
const router = express.Router()
const {getUsers,putUsers,postUsers,deleteUsers} = require('../backend/controllers/userController.js')

router.get('/', getUsers)

router.put('/:id', putUsers)

router.post('/', postUsers)

router.delete('/:id', deleteUsers)

module.exports = router

//basicamente exportamos esto al router