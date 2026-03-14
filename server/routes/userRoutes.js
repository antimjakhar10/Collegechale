const express = require("express");
const router = express.Router();
const User = require("../models/User");


const SiteUser = require("../models/SiteUser");

router.get("/", async(req,res)=>{

try{

const adminUsers = await User.find().sort({createdAt:-1});

const siteUsers = await SiteUser.find().sort({createdAt:-1});

const formattedSiteUsers = siteUsers.map(u => ({
_id: u._id,
name: u.name,
email: u.email,
mobile: "-",
permissions: { website:true },
userType: "Website User",
createdAt: u.createdAt
}));

const formattedAdminUsers = adminUsers.map(u => ({
...u._doc,
userType: "Admin User"
}));

const allUsers = [...formattedAdminUsers, ...formattedSiteUsers];

res.json(allUsers);

}catch(err){

res.status(500).json(err);

}

});


// ADD USER
router.post("/add", async(req,res)=>{

const {name,email,password,mobile,permissions} = req.body;

const newUser = new User({

name,
email,
password,
mobile,
permissions

});

await newUser.save();

res.json(newUser);

});

// DELETE USER
router.delete("/:id", async(req,res)=>{

const adminUser = await User.findByIdAndDelete(req.params.id);

if(!adminUser){
await SiteUser.findByIdAndDelete(req.params.id);
}

res.json({message:"User deleted"});

});

module.exports = router;