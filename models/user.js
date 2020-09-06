const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const passport = require("passport");

var UserSchema = new mongoose.Schema({
    username: String,
    firstname: String,
    surname: String,
    email: String,
    password: String,
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", UserSchema);