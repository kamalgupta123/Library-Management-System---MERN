const mongoose = require("mongoose");

const ViewCount = new mongoose.Schema({
    id:{
        type:"Number",
    },
    count: {
        type:"Number",
    },
});

const View_counts = mongoose.model("view_counts",ViewCount);
module.exports = View_counts;