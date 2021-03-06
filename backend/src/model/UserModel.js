const mongoose = require('../config/database');
const Schema = mongoose.Schema;

mongoose.Promise = global.Promise;

const UserSchema = new Schema({
    user : String,
    email : String,
    password : String
    }, {
        versionKey:false
    });
    

module.exports = mongoose.model('User', UserSchema);