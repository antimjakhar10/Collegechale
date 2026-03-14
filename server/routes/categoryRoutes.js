const express = require("express");
const router = express.Router();
const Category = require("../models/Category");

// GET
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// ADD
router.post("/add", async (req, res) => {
  const { name, slug } = req.body;

  const category = new Category({
    name,
    slug,
  });

  await category.save();

  res.json(category);
});

//UPDATE
router.put("/:id", async(req,res)=>{

const {name,slug} = req.body;

const updated = await Category.findByIdAndUpdate(
req.params.id,
{name,slug},
{new:true}
);

res.json(updated);

});

// DELETE
router.delete("/:id", async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);

  res.json({ message: "Deleted" });
});

module.exports = router;
