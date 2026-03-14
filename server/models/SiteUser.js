const mongoose = require("mongoose");

const siteUserSchema = new mongoose.Schema({
  name:{
    type:String,
    required:true
  },

  email:{
    type:String,
    required:true,
    unique:true
  },

  password:{
    type:String,
    required:true
  },

  role:{
    type:String,
    default:"user"
  }

},{timestamps:true});

module.exports = mongoose.model("SiteUser",siteUserSchema);