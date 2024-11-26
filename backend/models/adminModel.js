const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    name: { type: String, required: true },
    hostel: {
        type: String, 
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String,
        required: true 
    },
    token: { 
        type: String 
    }
});

module.exports = mongoose.model('Admin', adminSchema);
