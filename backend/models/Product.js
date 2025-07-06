const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  color: String,
  materialType: String,
  cusion: String,
  description: String,
  price: Number,
  height: Number,
  width: Number,
  image: String,
  userId: String,
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = mongoose.model("Product", productSchema);
