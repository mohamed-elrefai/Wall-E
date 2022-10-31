const mongoose = require('mongoose');

const MeasurementsSchema = new mongoose.Schema({
    patient_id: {
        type: String,
        required: true,
    },
    patient_Name:{
        type: String,
        required: true,
    },
    O2: {
        type: String,
        required: true,
    },
    blood_pressure:{
        type: String,
        required: true,
    },
    diabetes:{
        type: String,
        required: true,
    },
    hemoglobin:{
        type: String,
        required: true,        
    }
}, {
    timestamps: true,
})

const MeasurementsModel = mongoose.model('Measurements', MeasurementsSchema);

module.exports = MeasurementsModel