const mongoose = require("mongoose");

const savedCollegeSchema = new mongoose.Schema({

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"SiteUser"
},

collegeId:{
type:mongoose.Schema.Types.ObjectId,
ref:"College"
},

collegeName:String,

image:String,

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("SavedCollege", savedCollegeSchema);