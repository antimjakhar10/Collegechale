const express = require("express");
const Placement = require("../models/Placement");

const router = express.Router();

/* GET */
router.get("/", async (req, res) => {
const placements = await Placement.find();
res.json(placements);
});

/* ADD */
router.post("/add", async (req, res) => {

const placement = new Placement({
name: req.body.name,
logo: req.body.logo,
avgPackage: req.body.avgPackage,
highestPackage: req.body.highestPackage
});

await placement.save();
res.json(placement);

});

/* DELETE */
router.delete("/:id", async (req, res) => {
await Placement.findByIdAndDelete(req.params.id);
res.json({ message: "Deleted" });
});

/* UPDATE */
router.put("/:id", async (req, res) => {

await Placement.findByIdAndUpdate(req.params.id,{
name: req.body.name,
logo: req.body.logo,
avgPackage: req.body.avgPackage,
highestPackage: req.body.highestPackage
});

res.json({ message: "Updated" });

});

module.exports = router;