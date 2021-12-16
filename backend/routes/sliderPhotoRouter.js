const express = require('express');
const sliderPhotoController = require('../controllers/sliderPhotoController.js');

const sliderPhotoRouter = express.Router();

sliderPhotoRouter.get('/', sliderPhotoController.getSliderPhotos);
sliderPhotoRouter.post('/', sliderPhotoController.addSliderPhotos);

module.exports = sliderPhotoRouter;