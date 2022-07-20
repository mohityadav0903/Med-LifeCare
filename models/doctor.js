const mongoose = require('mongoose');
 const doctorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    speciality: { type: String },
    experience: { type: String },
    image: { type: String },
    slot: { type: String },
    status: { type: String },
    emailVerified: { type: Boolean , default: false},
    phoneVerified: { type: Boolean , default: false},
    certificate: { type: String },
 }, { timestamps: true });

    module.exports = mongoose.model('Doctor', doctorSchema);
