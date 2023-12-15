const asyncHandler = require('express-async-handler')
const { MongoClient } = require('mongodb')
const Favorites = require('./models/favorites.js')

const getFavorites = asyncHandler(async (req,res) => {
    const favorites = await Favorites.find()
    res.status(200).json(favorites)
})

const postFavorites = asyncHandler(async (req,res) => {

    const favorites = await Favorites.create({
    id: req.body.id,
    imagelink: req.body.imagelink,
    titulo: req.body.titulo ,
    descripcion : req.body.descripcion,
    rating : req.body.rating,
    galeria: req.body.galeria

})