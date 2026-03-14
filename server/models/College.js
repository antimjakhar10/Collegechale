const mongoose = require("mongoose");

const collegeSchema = new mongoose.Schema({
  name: String,
  location: String,
 streams:[String],
  description: String,
  courses: [String],
  facilities: [String],
 placements:[
{
name:String,
logo:String
}
],

  fees: [
    {
      course: String,
      duration: String,
      amount: String,
    },
  ],

  image: String,
  images: [String],
});

module.exports = mongoose.model("College", collegeSchema);
