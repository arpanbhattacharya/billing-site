const express = require("express");
const billl = express.Router();
const mcart = require("../models/cart");
const mcustomer = require("../models/customermodel");
const mproduct = require("../models/productmodel");

billl.post("/add", async (req, res) => {
  var findd = await mproduct.findOne({ barcode: req.body.barcode });
  if (findd != null) {
    var cid = req.body.cid;
    var pid = findd._id;
    var obj = {
      cid: cid,
      pid: pid,
    };
    await mcart.create(obj);
    res.json({ msg: "added" });
  } else {
    res.json({ msg: "Invalid" });
  }
});

billl.get("/getall", async (req, res) => {
  var cartdata = await mcart.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "pid",
        foreignField: "_id",
        as: "products",
      },
    },
  ]);
  res.json(cartdata);
});

module.exports = billl;
