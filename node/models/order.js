const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  name: String,
  number: String,
  order_id: String,
  dt: String
});

module.exports = mongoose.model("Order", orderSchema);
