const mongoose = require("mongoose"),
    Schema = mongoose.Schema;

const userModel = new Schema({
    firstName: {type: String},
    lastName: {type: Number},
    age: {type: Number},
});
module.exports = mongoose.model("User", userModel);