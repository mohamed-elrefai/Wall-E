require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require('mongoose')

mongoose.connect(process.env.database)

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", (req, res, next) => {
  return res.status(200).json({
    message: "Hello from root!",
  });
});

const shcema = new mongoose.Schema({
    add: {
        type: String
    }
})

const model = mongoose.model('adds', shcema)

app.post("/add", async (req, res, next) => {
    await model.create(req.body);
    res.status(200).json("AWS Work")
});

app.use((req, res, next) => {
  return res.status(404).json({
    error: "Not Found",
  });
});

module.exports = app;