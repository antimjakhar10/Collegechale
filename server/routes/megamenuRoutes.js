const express = require("express");
const router = express.Router();
const MegaMenu = require("../models/MegaMenu");


router.post("/add",async(req,res)=>{

try{

const menu = new MegaMenu(req.body);

await menu.save();

res.json(menu);

}catch(err){

res.status(500).json(err);

}

});


router.get("/:stream",async(req,res)=>{

try{

const data = await MegaMenu.find({
stream:req.params.stream
})
.populate("topColleges")
.populate("popularColleges");

res.json(data);

}catch(err){

res.status(500).json(err);

}

});


router.get("/",async(req,res)=>{

const data = await MegaMenu.find()
.populate("topColleges")
.populate("popularColleges");

res.json(data);

});


module.exports = router;