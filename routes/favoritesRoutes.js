const express = require('express')
const router = express.Router()
const {getFavorites,putFavorites,postFavorites,deleteFavorites} = require('../backend/controllers/favoritesController.js')

router.get('/', getFavorites)

router.put('/:id', putFavorites)

router.post('/', postFavorites)

router.delete('/:id', deleteFavorites)

module.exports = router