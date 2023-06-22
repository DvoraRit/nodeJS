//connect tomongoDB
// const mongoose = require('mongoose');
const mongodb = require('mongodb');
const config = require('../config/config');
const MongoClient = mongodb.MongoClient;

let _db;

const mongoConnect = callback => {
    console.log("trying to connect");
MongoClient.connect(`mongodb+srv://${config.db.userName}:${config.db.password}@cluster0.uvwc9kp.mongodb.net/meetups?retryWrites=true&w=majority`)
.then(result =>{
    console.log('Connected to MongoDB');
    _db = result.db();
    callback(result);
}
).catch(err => {
    console.log(err);
    throw err;
});
};

const getDB = () => {
    if(_db){
        return _db;
    }
    throw 'No database found!';
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;