const express = require("express");
const product = express.Router();
const mproduct = require("../models/productmodel");

product.post("/add", async (req, res) => {
  res.json(req.body);

  productObject = {
    name: req.body.name,
    barcode: req.body.barcode,
    price: req.body.price,
  };

  await mproduct.create(productObject);
});

product.get("/sel", async (req, res) => {
  var show = await mproduct.find();
  res.json(show);
});

product.post("/del", async (req, res) => {
  await mproduct.findByIdAndDelete(req.body.id);
  res.json({ msg: "Deleted" });
});

product.post("/edit", async (req, res) => {
  var ed = await mproduct.findById(req.body.id);
  res.json(ed);
});

product.post("/upd", async (req, res) => {
  productObject = {
    name: req.body.name,
    barcode: req.body.barcode,
    price: req.body.price,
  };
  await mproduct.findByIdAndUpdate(req.body.id, productObject);
  res.json({ msg: "Updated" });
});

module.exports = product;
