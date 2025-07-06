const express = require("express");
const router = express.Router();
const Quote = require("../models/Quote");

// Create a new quote (public)
router.post("/", async (req, res) => {
  try {
    const newQuote = new Quote(req.body);
    await newQuote.save();
    res.status(201).json({ message: "Quote submitted successfully", quote: newQuote });
  } catch (error) {
    console.error("Quote submission error:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Optional: Get all quotes (for admin)
router.get("/", async (req, res) => {
  try {
    const quotes = await Quote.find().populate("productId");
    res.json(quotes);
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
