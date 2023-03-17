const mongoose = require("mongoose");

const suborderSchema = mongoose.Schema({
  name: String,
  barcode: String,
  price: String,
  order_id: String
});

module.exports = mongoose.model("Suborder", suborderSchema);
