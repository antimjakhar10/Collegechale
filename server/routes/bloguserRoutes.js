const express = require("express");
const Blog = require("../models/blogModel");

const router = express.Router();


// Create Blog (User)
router.post("/create", async (req,res)=>{
try{

const blog = new Blog({
title: req.body.title,
slug: req.body.slug,
category: req.body.category,
description: req.body.description,
content: req.body.content,
author: req.body.author,
image: req.body.image,   
status: "pending"
});

await blog.save();

res.json({message:"Blog submitted for approval"});

}catch(err){
res.status(500).json(err);
}

});


// Get Approved Blogs
router.get("/approved", async(req,res)=>{

const blogs = await Blog.find({status:"approved"}).sort({createdAt:-1});
res.json(blogs);

});


// Get Pending Blogs (Admin)
router.get("/pending", async(req,res)=>{

const blogs = await Blog.find({status:"pending"});
res.json(blogs);

});

router.get("/all", async (req,res)=>{
 try{
 const blogs = await Blog.find().sort({createdAt:-1});
 res.json(blogs);
 }catch(err){
 res.status(500).json(err);
 }
});


module.exports = router;