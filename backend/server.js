// Importando clases y funciones que utilizaremos
const {
  User,
  Property,
  Rating,
  Room,
  Reservation,
  ReservationStatus,
  PaymentOptions } = require('../Classes.js');

  // esto es para conectar la base de datos no se exactamente que hace pero sirve para la base de datos
const {
  pingdb,
  connectToMongoDB,
  closeMongoDBConnection } = require('../configdb.js');

const { initiateFirebase } = require('../configfirebase.js');

// Importando express e inicializando el appinstance

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

// esto es para que sepa como desencodear los url para parsear sin esto el URI no funciona para nada y todos los URL tampoco esto es vital

const urlEncodeParser = bodyParser.urlencoded({ extended: true });
appInstance.use(urlEncodeParser);

// Seteando el port, mirar el archivo .env que esta en la root del documento para mas detalles basicamente aca digo que uso el port 5000

const port = process.env.PORT || 5000;
connectDB()

// Inicializando el servidor

appInstance.listen(port, async () => {
  console.log("Server is running and listening on port", port);
  await pingdb(console.dir);
  initiateFirebase(console.dir);
})

//esta linea conecta a el CRUD con user Routes que contiene todos los metodos para los users basicamente el routes exporta los metodos en los controladores
appInstance.use('/api/users', require('../routes/userRoutes.js'))
// esta linea de abajo es el middleware basicamente hace que los errores se envien de manera personalizada con mas info y no en css si no que en json, para mas info revisar el file errorMiddleware.js 
appInstance.use(errorHandler);






