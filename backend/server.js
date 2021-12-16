const dotenv = require('dotenv');
dotenv.config();

const connectDb = require('./db/connect');
require('./db');

const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
const productRouter = require('./routes/productRouter.js');
const sliderPhotoRouter = require('./routes/sliderPhotoRouter.js');

connectDb();

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true,
}));


app.use("/products", productRouter);
app.use("/slider_photos",sliderPhotoRouter);

app.get("/", function(req, res){
    res.sendStatus(200);

});

app.use("/",(req, res)=>{
    res.sendStatus(404);
})
app.listen(process.env.PORT, process.env.HOST,()=>{
    console.log(`Сервер запущен по http://${process.env.HOST}:${process.env.PORT}/`);
});
