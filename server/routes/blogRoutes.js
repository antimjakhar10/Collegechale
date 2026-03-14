const express = require("express");
const router = express.Router();
const Blog = require("../models/Blog");


// GET BLOGS
router.get("/", async(req,res)=>{

const blogs = await Blog.find().sort({createdAt:-1});

res.json(blogs);

});


// ADD BLOG
router.post("/add", async(req,res)=>{

const {title,slug,category,description,content,image,author,userId} = req.body;

const newBlog = new Blog({

title,
slug,
category,
description,
content,
image,
author,
userId,
status:"pending"

});

await newBlog.save();

res.json(newBlog);

});

// GET SINGLE BLOG
router.get("/:id", async(req,res)=>{

const blog = await Blog.findById(req.params.id);

res.json(blog);

});



// UPDATE BLOG
router.put("/:id", async(req,res)=>{

const {title,slug,category,description,content,image,status,author,userId} = req.body;

await Blog.findByIdAndUpdate(req.params.id,{

title,
slug,
category,
description,
content,
image,
status,
author,
userId
});

res.json({message:"Blog Updated"});

});


// DELETE BLOG
router.delete("/:id", async(req,res)=>{

await Blog.findByIdAndDelete(req.params.id);

res.json({message:"Blog Deleted"});

});


router.put("/approve/:id", async (req,res)=>{
try{

await Blog.findByIdAndUpdate(req.params.id,{status:"approved"});

res.json({message:"Blog approved"});

}catch(err){
res.status(500).json(err);
}
});


router.put("/reject/:id", async (req,res)=>{
try{

await Blog.findByIdAndUpdate(req.params.id,{status:"rejected"});

res.json({message:"Blog rejected"});

}catch(err){
res.status(500).json(err);
}
});

router.get("/user/:id", async(req,res)=>{

try{

const blogs = await Blog.find({userId:req.params.id}).sort({createdAt:-1});

res.json(blogs);

}catch(err){
res.status(500).json(err);
}

});

module.exports = router;