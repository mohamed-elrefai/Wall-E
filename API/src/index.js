require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')
const patientRouter = require('./Routers/Pations/patient.routes')
const MeasurementsRouter = require('./Routers/Measurements/Measurements.routes')

mongoose.connect(process.env.database)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/api', patientRouter)
app.use('/api', MeasurementsRouter)

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});
app.listen(1999)
module.exports = app;