const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact");


/* CREATE CONTACT */
router.post("/", async(req,res)=>{

try{

const contact = new Contact(req.body);

await contact.save();

res.json({message:"Message sent successfully"});

}catch(err){

res.status(500).json(err);

}

});


/* GET ALL CONTACTS (ADMIN) */
router.get("/", async(req,res)=>{

try{

const contacts = await Contact.find().sort({createdAt:-1});

res.json(contacts);

}catch(err){

res.status(500).json(err);

}

});


module.exports = router;