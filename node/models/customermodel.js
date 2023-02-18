const mongoose = require("mongoose");

const stdSchema = mongoose.Schema({
  name: String,
  number: String,
});

module.exports = mongoose.model("Customer", stdSchema);
