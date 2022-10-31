const express = require('express');
const patientModel = require('../../Models/patient/patient.model');
const router = express.Router();
const MeasurementsModel = require('../../Models/Measurements/Measurements.model')

// Create patient
router.post('/patient/create', async (req, res, next) => {
    try{
        const data = req.body;
        
        const patient = await new patientModel(data);
        await patient.save();

        res.status(200).json({status: "OK", message: "Data saved successfully"});
        next();
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

// get Data
router.get('/patient/get/:id', async (req, res, next) => {
    try{
        const data_id = req.params.id;
        await MeasurementsModel.findById(data_id)
        res.status(200).json({status: "OK", message: "Data saved successfully"});

        next();
    }catch(err){
        res.status(500).json({message: err.message})
    } 
})

module.exports = router