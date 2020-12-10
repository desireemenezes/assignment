const mongoose = require('../config/database');
const Type = require('./TypeModel');

const Schema = mongoose.Schema;


const TaskSchema = new Schema({
    macaddress: { 
        type: String, 
        required: true // endereço físico
    }, 
    type: { 
        type: Number, 
        required: true // endereço físico
    }, 
    typeCategory: { type: Schema.Types.ObjectId, ref: 'Type' },

    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    when: {
        type: Date,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    },
    created: { 
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Task', TaskSchema);