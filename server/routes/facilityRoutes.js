const express = require("express");
const Facility = require("../models/Facility");

const router = express.Router();

/* GET */

router.get("/", async(req,res)=>{
const facilities = await Facility.find();
res.json(facilities);
});

/* ADD */

router.post("/add", async(req,res)=>{
const facility = new Facility({
name:req.body.name
});

await facility.save();

res.json(facility);
});

/* DELETE */

router.delete("/:id", async(req,res)=>{
await Facility.findByIdAndDelete(req.params.id);
res.json({message:"Deleted"});
});

/* UPDATE */

router.put("/:id", async(req,res)=>{
await Facility.findByIdAndUpdate(req.params.id,{
name:req.body.name
});
res.json({message:"Updated"});
});

module.exports = router;