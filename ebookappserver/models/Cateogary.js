const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
    CateogaryId:{
        type:"Number",
    },
    CateogaryName:{
        type:"String",
    },
    CateogaryImage:{
        type:"String",
    },
});

const Cateogary = mongoose.model("categories",CategorySchema);
module.exports = Cateogary;