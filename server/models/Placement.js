const mongoose = require("mongoose");

const placementSchema = new mongoose.Schema({
name:{
type:String,
required:true
},

logo:{
type:String
},

avgPackage:{
type:String
},

highestPackage:{
type:String
}

});

module.exports = mongoose.model("Placement",placementSchema);