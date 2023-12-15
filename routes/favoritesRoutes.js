const express = require('express')
const router = express.Router()
const {getFavorites,putFavorites,post,delete} = require('../backend/controllers/favoritesController.js')

router.get('/', getUFavorites)

router.put('/:id', putFavorites)

router.post('/', post)

router.delete('/:id', delete)

module.exports = router