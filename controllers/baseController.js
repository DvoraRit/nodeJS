

const getDB = require('../util/database').getDB;
class BaseController{
    modalName = "";
    // db = getDB();
    constructor(modalName){
    
        this.modalName = modalName;
    }

}

module.exports = BaseController;