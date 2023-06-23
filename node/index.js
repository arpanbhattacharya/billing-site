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



// Your code
if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get("*", (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'),function (err) {
          if(err) {
              res.status(500).send(err)
          }
      });
  })
}
// Your code


const customer = require("./routes/customer");
const product = require("./routes/product");
const billing = require("./routes/bill");

app.use(cors());

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

// file upload method
app.use(expressFileupload());

app.use("/customers", customer);
app.use("/products", product);
app.use("/bills", billing);

app.listen(2000);
