const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
{
title:{
type:String,
required:true
},

slug:{
type:String,
required:true,
unique:true
},

category:{
type:String,
required:true
},

description:{
type:String,
required:true
},

content:{
type:String,
required:true
},

image:{
type:String
},

author:{
type:String
},

status:{
type:String,
enum:["pending","approved","rejected"],
default:"pending"
}

},
{timestamps:true}
);

module.exports = mongoose.models.Blog || mongoose.model("Blog", blogSchema);