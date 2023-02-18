const express = require("express");
const customer = express.Router();
const mcustomer = require("../models/customermodel");

customer.post("/add", async (req, res) => {
  res.json(req.body);

  customerObject = {
    name: req.body.name,
    number: req.body.number
  };

  await mcustomer.create(customerObject);
});

customer.get("/sel", async (req, res) => {
  var show = await mcustomer.find();
  res.json(show);
});

customer.post("/del", async (req, res) => {
  var findcu = await mcustomer.findById(req.body.id);

  await mcustomer.findByIdAndDelete(req.body.id);
});

customer.post("/edit", async (req, res) => {
  var ed = await mcustomer.findById(req.body.id);
  res.json(ed);
});

customer.post("/upd", async (req, res) => {
  customerObject = {
    name: req.body.name,
    number: req.body.number
  };
  await mcustomer.findByIdAndUpdate(req.body.id, customerObject);
  res.json({ msg: "Updated" });
});

module.exports = customer;
