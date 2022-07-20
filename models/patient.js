const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
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
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        
    },
    email_verified: {
        type: Boolean,
        default: false
    },
    phone_verified: {
        type: Boolean,
        default: false
    },
    deaseses: {
        type: Array,
        
    },
    blood_group: {
        type: String,
      
    },
    weight: {
        type: Number,
        
    },
    height: {
        type: Number,
       
    },
    profile_pic: {
        type: String,
        
    },
    role: {
        type: String,
        default: 'patient'
    },
},
{timestamps: true},
);

module.exports = mongoose.model('Patient', patientSchema);