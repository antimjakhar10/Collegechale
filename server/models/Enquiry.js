const mongoose = require("mongoose");

const enquirySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  course: String,
  college: String,

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "SiteUser",
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Enquiry", enquirySchema);
