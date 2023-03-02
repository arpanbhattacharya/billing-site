const mongoose = require("mongoose");
const stdSchema = mongoose.Schema({
  cid: mongoose.Schema.Types.ObjectId,
  pid: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model("Cart", stdSchema);
