const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
    username:{
        type:"String",
    },
    password: {
        type:"String",
    },
});

const Admin_user = mongoose.model("admin_user",AdminSchema);
module.exports = Admin_user;