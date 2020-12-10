const mongoose = require('../config/database');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const TypeSchema = new Schema({
    typeCategory: String
    }, {
        versionKey:false
    });
    

module.exports = mongoose.model('Type', TypeSchema);