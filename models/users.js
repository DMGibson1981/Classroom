const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    surname: String,
    email: String,
    password: String,
});

module.exports = mongoose.model("User", userSchema);