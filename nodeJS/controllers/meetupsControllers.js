const BaseController = require('./baseController');

class MeetupsControlers extends BaseController{
    constructor(modalName){
        debugger;
        super(modalName);
    }

    async getMeetups(){
       if(this.db){
        const meetupsCollection = this.db.collection(`${this.modalName}`);//meetups is the name of the collection
        const meetups = await meetupsCollection.find().toArray();
        return meetups;
        }
    }
}

module.exports = MeetupsControlers;