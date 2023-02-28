const mongoose = require("mongoose");
const stdSchema = mongoose.Schema({
  cid: String,
  pid: String,
});

module.exports = mongoose.model("Cart", stdSchema);
