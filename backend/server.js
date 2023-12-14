// Importando clases y funciones
const {
  Customer,
  Owner,
  Organization,
  BankAccount,
  Property,
  Rating,
  Room,
  Reservation,
  ReservationStatus,
  PaymentOptions } = require('../Classes.js');

const {
  pingdb,
  connectToMongoDB,
  closeMongoDBConnection } = require('../configdb.js');

const { initiateFirebase } = require('../configfirebase.js');

// Importando express y el uri y demas
const uri = "mongodb+srv://diegojesuschavezbotto:Pedifart123@@cluster0.6ygm1rx.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const colors = require('colors')
const dotenv = require('dotenv').config();
const {errorHandler} = require ('../backend/middleware/errorMiddleware.js')
const connectDB = require('../backend/config/db.js')
const appInstance = express();

// Importing 'cors' middleware for handling Cross-Origin Resource Sharing.
const cors = require('cors');
appInstance.use(cors());

// Requerimientos para iniciar el client
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { MongoClient } = require('mongodb');

// esto es para que sepa como desencodear los url
const urlEncodeParser = bodyParser.urlencoded({ extended: true });
appInstance.use(urlEncodeParser);

// Seteando el port, mirar el archivo .env que esta en la root del documento para mas detalles
const port = process.env.PORT || 5000;
connectDB()
// Inicializando el servidor
appInstance.listen(port, async () => {
  console.log("Server is running and listening on port", port);
  await pingdb(console.dir);
  initiateFirebase(console.dir);
})

//esta linea conecta a el CRUD con user Routes que contiene todos los metodos para los users
appInstance.use('/api/users', require('../routes/userRoutes.js'))
appInstance.use(errorHandler);

appInstance.post('/createuser', async (req, res) => {
  let client
  try {
    // nos conectamos a la base de datos proyectoUX y a la coleccion clientes
    client = new MongoClient(uri);
    const database = client.db("proyectoUX");
    const clientes = database.collection("clientes");
   
    const doc = req.body

    // Insert the defined document into the "clientes" collection
    const result = await clientes.insertOne(doc);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } 
  catch(error){
      res.status(500).send("ERROR en algo")
    }
  finally {
    // Close the MongoDB client connection
    await client.close();
  }
})




