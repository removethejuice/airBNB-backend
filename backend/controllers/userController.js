 //basicamente esta es la carne de los metodos y lo exportamos a userRoutes
const asyncHandler = require('express-async-handler')

 const getUsers = asyncHandler(async (req,res) => {
    res.status(200).json({message:'Get users'})
})



const postUsers = asyncHandler(async (req,res) => {
    let client
    try {
      // nos conectamos a la base de datos proyectoUX y a la coleccion clientes
       client = new MongoClient(process.env.MONGO_URI);
      const database = client.db("proyectoUX");
      const clientes = database.collection("clientes");

      const doc = req.body
  
      
      const result = await clientes.insertOne(doc);
      
      console.log(`A document was inserted with the _id: ${result.insertedId}`);
    } 
  catch (error) {
    res.status (400)
        throw new Error('Error en algo')
  }
    finally {
      // Close the MongoDB client connection
      res.status(200).json({message:'Todo salio bien rick!!!!!!!~!'})
      await client.close();
    }
})

const putUsers =  asyncHandler(async(req,res) => {
    
    if(!req.body.text){
        res.status (400)
        throw new Error('Error en algo')
    }
    res.status(200).json({message:'Put users'})
})


const deleteUsers = asyncHandler(async(req,res) => {
    res.status(200).json({message:'Delete users'})
})


module.exports = {
    getUsers,putUsers,postUsers,deleteUsers
}