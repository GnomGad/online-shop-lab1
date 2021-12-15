const dotenv = require('dotenv');
dotenv.config();

const connectDb = require('./db/connect');
require('./db');

var cors = require('cors');

const express = require('express');
const {Product,MainSlider} = require("./db");
const app = express();

app.use(cors());

connectDb();

app.get("/slider_photos", function(req, res){
    MainSlider.findAll({
        where: {
            is_use: true
        },
        raw: true
    })
        .then(data=>{
        res.json(data);
    });
});

app.get("/products", function(req, res){
    Product.findAll({
        where: {
            is_use: true
        },
        raw: true
    })
        .then(data=>{
            res.json(data);
        });
});

app.get("/", function(req, res){
    res.sendStatus(200);

});

app.listen(process.env.PORT, process.env.HOST,()=>{
    console.log(`Сервер запущен по http://${process.env.HOST}:${process.env.PORT}/`);
});
