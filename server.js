// Importing necessary classes and functions from external modules.
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
  PaymentOptions } = require('./Classes.js');

const {
  pingdb,
  connectToMongoDB,
  closeMongoDBConnection } = require('./configdb.js');

const { initiateFirebase } = require('./configfirebase.js');

// Importing 'express' for building the server and creating an app instance.
const uri = "mongodb+srv://diegojesuschavezbotto:Pedifart123@@cluster0.6ygm1rx.mongodb.net/?retryWrites=true&w=majority";
const express = require('express');
const appInstance = express();

// Importing 'cors' middleware for handling Cross-Origin Resource Sharing.
const cors = require('cors');
appInstance.use(cors());

// Importing 'body-parser' middleware for parsing incoming request bodies
const bodyParser = require('body-parser');
const { initializeApp } = require('firebase/app');
const { MongoClient } = require('mongodb');

// Middleware for handling URL-encoded data using 'body-parser'
const urlEncodeParser = bodyParser.urlencoded({ extended: true });
appInstance.use(urlEncodeParser);

// Setting the port number for the server to listen on.
const port = 3000;

// Starting the server and testing the connection to the MongoDB database.
appInstance.listen(port, async () => {
  console.log("Server is running and listening on port", port);
  await pingdb(console.dir);
  initiateFirebase(console.dir);
})
appInstance.use('/api/users', require('./routes/userRoutes.js'))


appInstance.post('/createuser', async (req, res) => {
  try {
    // nos conectamos a la base de datos proyectoUX y a la coleccion clientes
    const client = new MongoClient(uri);
    const database = client.db("proyectoUX");
    const clientes = database.collection("clientes");
   
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    }

    // Insert the defined document into the "clientes" collection
    const result = await clientes.insertOne(doc);
    // Print the ID of the inserted document
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } 
  catch(error){
      res.status(200).send("ERROR en algo")
    }
  finally {
    // Close the MongoDB client connection
    await client.close();
  }
})




// appInstance.post('/createUser', async (req, res) => {
//   try {
//

//
//     const doc = {
//       number: 123
//     }
//     const result = await usuarios.insertOne(doc);
//     console.log(`A document was inserted with the _id: ${result.insertedId}`);

//   } finally {
//     await client.close();
//   }
//   res.status(200).send("Usuario creado exitosamente");
// })

