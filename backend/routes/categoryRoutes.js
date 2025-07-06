const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

// =============================
// ✅ Create Category (with image)
// =============================
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? "/upload/" + req.file.filename : "";
    const { categoryName } = req.body;

    if (!categoryName) {
      return res.status(400).json({ message: "Category name is required" });
    }

    const category = await Category.create({
      categoryName,
      image,
      userId: req.userId,
    });

    res.status(201).json(category);
  } catch (err) {
    console.error("Create category error:", err);
    res.status(500).json({ message: "Failed to create category" });
  }
});

// =============================
// ✅ Get All Categories (Public)
// =============================
router.get("/public", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    console.error("Fetch public categories error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// =============================
// ✅ Get Categories by User (Admin Protected)
// =============================
router.get("/", auth, async (req, res) => {
  try {
    const categories = await Category.find({ userId: req.userId });
    res.json(categories);
  } catch (err) {
    console.error("Fetch user categories error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// =============================
// ✅ Get Single Category by ID
// =============================
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    console.error("Get category error:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// =============================
// ✅ Update Category
// =============================
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = "/upload/" + req.file.filename;
    }

    const updated = await Category.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Update category error:", err);
    res.status(500).json({ message: "Failed to update category" });
  }
});

// =============================
// ✅ Delete Category
// =============================
router.delete("/:id", auth, async (req, res) => {
  try {
    const deleted = await Category.findOneAndDelete({
      _id: req.params.id,
      userId: req.userId,
    });

    if (!deleted) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted" });
  } catch (err) {
    console.error("Delete category error:", err);
    res.status(500).json({ message: "Failed to delete category" });
  }
});

module.exports = router;
