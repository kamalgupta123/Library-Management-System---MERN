const mongoose = require("mongoose");

const ebookFileSchema = new mongoose.Schema({
    id:{
        type:"Number",
    },
    catName:{
        type:"String",
    },
    ebookFileName:{
        type:"String",
    },
    ebookFileDescription:{
        type:"String",
    },
    ebookFileImagePath:{
        type:"String",
    },
    ebookFilePath:{
        type:"String",
    },
});

const Ebook_files = mongoose.model("ebook_files",ebookFileSchema);
module.exports = Ebook_files;