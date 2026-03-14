const express = require("express");
const router = express.Router();
const SavedCollege = require("../models/SavedCollege");


// SAVE COLLEGE
router.post("/save", async(req,res)=>{

try{

const saved = new SavedCollege(req.body);

await saved.save();

res.json(saved);

}catch(err){
res.status(500).json(err);
}

});


// GET USER SAVED COLLEGES

router.get("/user/:id", async(req,res)=>{

try{

const colleges = await SavedCollege.find({
userId:req.params.id
}).sort({createdAt:-1});

res.json(colleges);

}catch(err){
res.status(500).json(err);
}

});


module.exports = router;