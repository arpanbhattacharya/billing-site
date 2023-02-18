const mongoose = require("mongoose");

const stdSchema = mongoose.Schema({
  name: String,
  barcode: String,
  price: String,
});

module.exports = mongoose.model("Product", stdSchema);
