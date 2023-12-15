const asyncHandler = require('express-async-handler')
const { MongoClient } = require('mongodb')
const Favorites = require('./models/favorites.js')


const getFavorites = asyncHandler(async (req,res) => {
    const favorites = await Favorites.find()
    res.status(200).json(favorites)
})

const postFavorites = asyncHandler(async (req,res) => {

    if (!req.body.id || !req.body.imagelink) {
        res.status(400)
        throw new Error ('faltan atributos')
    }

    const favorites = await Favorites.create({
    id: req.body.id,
    imagelink: req.body.imagelink,
    titulo: req.body.titulo ,
    descripcion : req.body.descripcion,
    rating : req.body.rating,
    galeria: req.body.galeria})

    res.status(200).json(favorites)
})

const putFavorites = asyncHandler (async (req,res) => {
    const favorites = await Favorites.findByID(req.params.id)

    if(!favorites){
        res.status(400)
        throw new Error ('Ese id no lo encuentro')
    }

    const updatedfavorites = findByIDandUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(updatedfavorites)

})

const deleteFavorites = asyncHandler (async (req,res) =>{
    const favorites = await Favorites.findByID(req.params.id)

    if(!favorites){
        res.status(400)
        throw new Error ('Ese id no lo encuentro')
    }

    await favorites.remove()
    res.status(200).json({message: `Deleted favorite with id: ${req.params.id}`})
})

module.exports ={
   putFavorites,
    postFavorites,
    deleteFavorites,
    getFavorites
}