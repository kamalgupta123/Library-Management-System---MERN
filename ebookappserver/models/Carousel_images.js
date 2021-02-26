const mongoose = require("mongoose");

const carouselImagesSchema = new mongoose.Schema({
    ImagePath:{
        type:"String",
    },
    ImageName:{
        type:"String",
    },
});

const Carousel_images = mongoose.model("carousel_images",carouselImagesSchema);
module.exports = Carousel_images;