const MeetupsControlers  = require('../controllers/meetupsControllers');
const getDB = require('../util/database').getDB;

const express = require('express');
const router = express.Router();

const modalBase = 'meetups';
const meetupsControlers = new MeetupsControlers(modalBase)

router.get('/', async (req, res, next) => {
    _db = getDB();
    console.log("data requested");
    if(_db){
        const meetupsCollection = _db.collection(modalBase);//meetups is the name of the collection
        const meetups = await meetupsCollection.find().toArray();
        res.send(meetups);
        console.log("data sended");
    }
})

router.post('/',async (req, res, next) => {
    console.log("post");
});

module.exports = router;

// export default(router, app) =>{
//     const modalBase = 'meetups';

//     const meetupsControlers = new MeetupsControlers(modalBase);

//     router.get('/', meetupsControlers.getMeetups);
// }