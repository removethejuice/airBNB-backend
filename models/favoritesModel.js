const mongoose = require ('mongoose')

const favoritesSchema = mongoose.Schema({
  id: {
    type: Number,
    required : [true, 'Tiene que ser un numero']
  },
  imagelink: {
    type: String,
    required : [true, 'Please let it be text :)']
  },

  titulo: {
  type :String, 
  required : [true, 'Please let it be text :)']
},
descripcion :{
  type: String,
  required : [true, 'Please let it be text :)']
},
rating :{
type : Number,
},
galeria:{
  type: [String],
  required : [true, 'Porfa texto']
}
})

module.exports = mongoose.model('Favorites',favoritesSchema)

