const express = require("express");
const router = express.Router();
const College = require("../models/College");


// GET all colleges
router.get("/", async (req, res) => {
  try {
    const colleges = await College.find().sort({ _id: -1 });
    res.json(colleges);
  } catch (err) {
    res.status(500).json(err);
  }
});


// GET single college
router.get("/:id", async (req, res) => {
  try {
    const college = await College.findById(req.params.id);
    res.json(college);
  } catch (err) {
    res.status(500).json(err);
  }
});


// ADD college
router.post("/add", async (req, res) => {
  try {
    const college = new College(req.body);
    await college.save();
    res.json(college);
  } catch (err) {
    res.status(500).json(err);
  }
});


// UPDATE college
router.put("/:id", async (req, res) => {
  try {

    const data = req.body;

    const updatedCollege = await College.findByIdAndUpdate(
      req.params.id,
      {
        name: data.name,
        url: data.url,
        location: data.location,
        streams: data.streams || [],
        description: data.description,
        courses: data.courses || [],
        facilities: data.facilities || [],
        placements: data.placements || [],
        fees: data.fees || [],
        image: data.image,
        images: data.images || []
      },
      { new: true }
    );

    res.json(updatedCollege);

  } catch (err) {
    console.log("UPDATE ERROR:", err);
    res.status(500).json({message:"Update failed"});
  }
});


// DELETE college
router.delete("/:id", async (req, res) => {
  try {
    await College.findByIdAndDelete(req.params.id);
    res.json({ message: "College deleted" });
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;