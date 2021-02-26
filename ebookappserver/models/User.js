const mongoose = require("mongoose");

const User = new mongoose.Schema({
    password:{
        type:"String",
    },
    department: {
        type:"String",
    },
    email: {
        type:"String",
    },
    firstname: {
        type:"String",
    },
    lastname: {
        type:"String",
    },
    major: {
        type:"String",
    },
    number: {
        type:"String",
    },
    school: {
        type:"String",
    },
    study_level: {
        type:"String",
    }
});

const user = mongoose.model("user",User);
module.exports = user;