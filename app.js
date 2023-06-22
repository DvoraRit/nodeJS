const express = require('express');// express  is a 3rd party module
const mongoConnect = require('./util/database').mongoConnect;
const app = express();
const config = require('./config/config');
const meetupsRoutes = require('./routes/meetupsAPIRoutes');
const mongodb = require('mongodb');
const mongoose = require('mongoose');
// const config = require('../config/config');
// const MongoClient = mongodb.MongoClient;
//app.use is a middleware function that is used to add a middleware to the request handling pipeline
//this function will be executed for every incoming request and this function will receive three arguments,
//the request and the response object, and the next function

app.use('/', meetupsRoutes);

mongoConnect(async (client) => {
    const db = client.db();
    const meetupsCollection = db.collection(config.db.collections.meetups);//meetups is the name of the collection
    const meetups = await meetupsCollection.find().toArray();
    // console.log(meetups);
    // client.close();//close the connection

    app.listen(3000);
});



