const mongoose = require('mongoose');

const ContactSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    name: {
        type: String, 
        requred: true
    },
    email: {
        type: String, 
        requred: true
    },
    phone: {
        type: String, 
    },
    type: {
        type: String,
        default: 'personal'
    },
    date: {
        type: String, 
        default: Date.now
    }
});

module.exports = mongoose.model('contact', ContactSchema);