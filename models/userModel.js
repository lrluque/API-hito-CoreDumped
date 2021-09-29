const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const userModel = new Schema({
    firstName: {type: String},
    lastName: {type: String},
    age: {type: Number},
});
module.exports = mongoose.model("User", userModel);