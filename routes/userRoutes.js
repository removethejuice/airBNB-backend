const express = require('express')
const router = express.Router()
const {getUsers} = require('../backend/controllers/userController.js')
const {putUsers} = require('../backend/controllers/userController.js')
const {postUsers} = require('../backend/controllers/userController.js')
const {deleteUsers} = require('../backend/controllers/userController.js')

router.get('/', getUsers)

router.put('/:id', putUsers)

router.post('/', postUsers)

router.delete('/:id', deleteUsers)

module.exports = router