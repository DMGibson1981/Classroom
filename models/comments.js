const mongoose = require("mongoose");

var CommentsSchema = new mongoose.Schema({
    author: String,
    text: String
});

module.exports = mongoose.model("Comments", CommentsSchema);