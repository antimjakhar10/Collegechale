const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({

title:String,
slug:String,
category:String,
description:String,
image:String,
content:String,
author:String,  

userId:{
type:mongoose.Schema.Types.ObjectId,
ref:"SiteUser"
},

status:{
type:String,
enum:["pending","approved","rejected"],
default:"approved"
},

createdAt:{
type:Date,
default:Date.now
}

});

module.exports = mongoose.model("Blog",blogSchema);