const express = require("express");
const router = express.Router();
const Stream = require("../models/Stream");

/* GET STREAMS */
router.get("/", async (req,res)=>{
  const streams = await Stream.find();
  res.json(streams);
});

/* ADD STREAM */
router.post("/add", async (req,res)=>{
  try{

    const stream = new Stream({
      name:req.body.name
    });

    await stream.save();

    res.json(stream);

  }catch(err){
    res.status(500).json({error:err.message});
  }
});

/* DELETE STREAM */
router.delete("/:id", async (req,res)=>{
  await Stream.findByIdAndDelete(req.params.id);
  res.json({message:"Deleted"});
});

/* UPDATE STREAM */
router.put("/:id", async (req,res)=>{
  await Stream.findByIdAndUpdate(req.params.id,{
    name:req.body.name
  });

  res.json({message:"Updated"});
});

module.exports = router;