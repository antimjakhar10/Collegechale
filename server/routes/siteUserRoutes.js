const express = require("express");
const router = express.Router();
const SiteUser = require("../models/SiteUser");

router.get("/", async(req,res)=>{

try{

const users = await SiteUser.find().sort({createdAt:-1});

res.json(users);

}catch(err){

res.status(500).json(err);

}

});

module.exports = router;