const mongoose = require("mongoose");

const PagesSchema = new mongoose.Schema({
    id:{
        type:"Number",
    },
    name:{
        type:"String",
    },
    description: {
        type:"String",
    },
    banner: {
        type:"String",
    }
});

const Pages = mongoose.model("pages",PagesSchema);
module.exports = Pages;