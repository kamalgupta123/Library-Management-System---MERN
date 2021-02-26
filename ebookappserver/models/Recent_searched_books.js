const mongoose = require("mongoose");

const recentEbookFileSchema = new mongoose.Schema({
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

const Recent_searched_books = mongoose.model("recent_searched_books",recentEbookFileSchema);
module.exports = Recent_searched_books;