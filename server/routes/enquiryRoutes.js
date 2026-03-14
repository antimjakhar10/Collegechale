const express = require("express");
const router = express.Router();
const Enquiry = require("../models/Enquiry");


// Add enquiry
router.post("/add", async (req, res) => {
  try {
    const enquiry = new Enquiry(req.body);
    await enquiry.save();
    res.json(enquiry);
  } catch (err) {
    res.status(500).json(err);
  }
});


// Get all enquiries
router.get("/", async (req, res) => {
  try {
    const enquiries = await Enquiry.find().sort({ createdAt: -1 });
    res.json(enquiries);
  } catch (err) {
    res.status(500).json(err);
  }
});



router.delete("/:id", async (req,res)=>{
  try{

    await Enquiry.findByIdAndDelete(req.params.id);

    res.json({message:"Enquiry deleted"});

  }catch(err){
    res.status(500).json(err);
  }
});

router.get("/user/:id", async (req,res)=>{

try{

const enquiries = await Enquiry.find({userId:req.params.id}).sort({createdAt:-1});

res.json(enquiries);

}catch(err){
res.status(500).json(err);
}

});

module.exports = router;