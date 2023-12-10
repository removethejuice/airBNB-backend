const { initializeApp } = require("firebase/app");

const firebaseConfig = {
  apiKey: "AIzaSyBWSjhrL3Ph0GRSL2c8fGA5wlaNf1rx-_8",
  authDomain: "finalprojectux-4256e.firebaseapp.com",
  projectId: "finalprojectux-4256e",
  storageBucket: "finalprojectux-4256e.appspot.com",
  messagingSenderId: "105556046339",
  appId: "1:105556046339:web:71d52ddbff34d5019e5436",
  measurementId: "G-P58W7TK7VL"
};

let app;

const initiateFirebase = () => { 
  console.log("Firebase instance created");
  app = initializeApp(firebaseConfig);
  // console.log(app);
  return app;
};

module.exports = { initiateFirebase };