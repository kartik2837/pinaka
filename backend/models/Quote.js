const mongoose = require("mongoose");

const quoteSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    },
    name: { type: String, required: true },
    number: { type: String, required: true },
    message: { type: String },
    color: { type: String },
    type: { type: String },
    height: { type: String },
    width: { type: String },
    cushion: { type: String },
    quantity: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Quote", quoteSchema);
