const express = require("express");
const router = express.Router();
const Product = require("../models/Product");
const upload = require("../middleware/upload");
const auth = require("../middleware/auth");

// =============================
// ✅ Create Product (with image)
// =============================
router.post("/", auth, upload.single("image"), async (req, res) => {
  try {
    const image = req.file ? "/upload/" + req.file.filename : "";
    const product = await Product.create({
      ...req.body,
      image,
      userId: req.userId,
    });
    res.json(product);
  } catch (err) {
    console.error("Create error:", err);
    res.status(500).json({ message: "Failed to create product" });
  }
});

// =============================
// ✅ Get All Products (Public)
// =============================
router.get("/public", async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// =============================
// ✅ Get Products by User (Admin Protected)
// =============================
router.get("/", auth, async (req, res) => {
  try {
    const products = await Product.find({ userId: req.userId }).populate("category");
    res.json(products);
  } catch (err) {
    console.error("Error fetching user products:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// =============================
// ✅ Get Single Product by ID
// =============================
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) return res.status(404).json({ message: "Product not found" });
    res.json(product);
  } catch (err) {
    console.error("Error fetching product:", err);
    res.status(500).json({ message: "Server error" });
  }
});

// =============================
// ✅ Update Product
// =============================
router.put("/:id", auth, upload.single("image"), async (req, res) => {
  try {
    const updateData = { ...req.body };
    if (req.file) {
      updateData.image = "/upload/" + req.file.filename;
    }

    const updated = await Product.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId },
      updateData,
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updated);
  } catch (err) {
    console.error("Update error:", err);
    res.status(500).json({ message: "Failed to update product" });
  }
});

// =============================
// ✅ Delete Product
// =============================
router.delete("/:id", auth, async (req, res) => {
  try {
    await Product.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ message: "Product deleted" });
  } catch (err) {
    console.error("Delete error:", err);
    res.status(500).json({ message: "Failed to delete product" });
  }
});

module.exports = router;
