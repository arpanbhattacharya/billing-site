const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const expressFileupload = require("express-fileupload");
const mongoose = require("mongoose");
mongoose.set("strictQuery", false);
mongoose.connect(
  "mongodb+srv://billing:arpan007@cluster0.jxzqgep.mongodb.net/billingdb?retryWrites=true&w=majority"
);

const customer = require("./routes/customer");
const product = require("./routes/product");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// file upload method
app.use(expressFileupload());

app.use("/customers", customer);
app.use("/products", product);

app.listen(2000);
