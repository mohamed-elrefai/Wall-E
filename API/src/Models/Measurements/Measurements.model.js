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
    O2: [
        {
            New:{
                type: String,
                required: true,
            }
        }
    ],
    blood_pressure:[
        {
            New:{
                type: String,
                required: true,
            }
        }
    ],
    diabetes:[
        {
            New:{
                type: String,
                required: true,
            }
        }
    ],
    hemoglobin:[
        {
            New:{
                type: String,
                required: true,
            }
        }
    ]
}, {
    timestamps: true,
})

const MeasurementsModel = mongoose.model('Measurements', MeasurementsSchema);

module.exports = MeasurementsModel