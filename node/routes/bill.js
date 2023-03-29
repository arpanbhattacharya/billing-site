const express = require("express");
const billl = express.Router();
const mcart = require("../models/cart");
const mcustomer = require("../models/customermodel");
const mproduct = require("../models/productmodel");
const morder = require("../models/order");
const msuborder = require("../models/suborder");

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

billl.post("/del", async (req, res) => {
  await mcart.findByIdAndDelete(req.body.id);
  res.json({ msg: "deleted" });
});

billl.post("/order", async (req, res) => {
  var odata = await morder.findOne().sort("-order_id");
  if (odata != null) {
    order_id = Number(odata.order_id) + 1;
  } else {
    order_id = 1;
  }
  var obj = {
    name: req.body.name,
    phone: req.body.number,
    order_id: order_id,
  };
  await morder.create(obj);

  var sodata = await mcart.find({ cid: req.body.cid });
  var i = 0;
  for (i = 0; i < sodata.length; i++) {
    var pdata = await mproduct.findById(sodata[i].pid);

    var pobj = {
      name: pdata.name,
      price: pdata.price,
      barcode: pdata.barcode,
      order_id: order_id,
    };
    await msuborder.create(pobj);
    await mcart.findByIdAndDelete(sodata[i]._id);
  }
  res.json({ msg: "done" });
});

billl.get("/sbill", async (req, res) => {
  var data = morder.find();
  res.json(data);
});

billl.post("/mbill", async (req, res) => {
  var data = await morder.findOne({ order_id: req.body.oid });
  var product = await msuborder.find({ order_id: req.body.oid });
  res.json({ bill: data, products: product });
});

module.exports = billl;
