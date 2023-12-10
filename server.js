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

appInstance.post('/createUser', async (req, res) => {
  try {
    const client = new MongoClient(uri);
    const database = client.db("insertDB");
    const usuarios = database.collection("usuarios");

    // Create a document to insert
    const customerAddress = new Address("456 Oak St", "Townsville", "54321");

    // Example data for CreditCard
    const creditCard1 = new CreditCard("1234-5678-9012-3456", "12/23");
    const creditCard2 = new CreditCard("9876-5432-1098-7654", "06/25");

    // Example data for Customer
    const customer = new Customer(
      1,
      "John",
      "Doe",
      customerAddress,
      "john@example.com",
      [creditCard1, creditCard2]
    );

    // Logging the created Customer
    console.log(customer);
    const doc = {
      number: 123
    }
    const result = await usuarios.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);

  } finally {
    await client.close();
  }
  res.status(200).send("Usuario creado exitosamente");
})

