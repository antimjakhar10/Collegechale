const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

name:String,
email:String,
password:String,
mobile:String,

permissions:{
category:Boolean,
subcategory:Boolean,
addCollege:Boolean,
blogs:Boolean,
users:Boolean
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("User",userSchema);