const mongoose = require('mongoose');

const AddersstSchema = new mongoose.Schema({
    Street: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    },
    Country: {
        type: String,
        required: true,
    }
})

const patientSchema = new mongoose.Schema({
    patient_name: {
        type: String,
        required: true,
    },
    address: AddersstSchema,
    phone_number: {
        type: String,
        required: true,
    }

}, {
    timestamps: true,
})

const patientModel = mongoose.model('Patient', patientSchema);

module.exports = patientModel