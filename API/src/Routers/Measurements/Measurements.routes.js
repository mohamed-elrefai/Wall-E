const express = require('express');
const MeasurementsModel = require('../../Models/Measurements/Measurements.model')
const router = express.Router();

// Create patient
router.post('/measurements/create', async (req, res, next) => {
    try{
        const data = req.body;
        const Measurements = await MeasurementsModel(data).save();
        res.status(200).json({status: "OK", message: "Data saved successfully", Measurements});
        next();
    }catch(err){
        res.status(500).json({message: err.message})
    }
})

// get Data
// get Data
router.get('/measurements/get', async (req, res, next) => {
    try{
        await MeasurementsModel.find()
        res.status(200).json({status: "OK", message: "Data saved successfully"});

        next();
    }catch(err){
        res.status(500).json({message: err.message})
    } 
})

module.exports = router