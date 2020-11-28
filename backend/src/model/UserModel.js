const mongoose = require('../config/database');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    user : {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    password : {
        type: String,
        required: true
    },
    
    versionKey:false
    
});

module.exports = mongoose.model('User', UserSchema);