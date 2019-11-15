var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//create city Schema & Model
let cities = new Schema({

    name: {
        type: String
    },
    country: {
        type: String
    }
});


module.exports = mongoose.model('cities', cities)