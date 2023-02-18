import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useState } from "react";
import axios from "axios";

function Addproduct() {
  var [pname, setPname] = useState("");
  var [pbarcode, setPbarcode] = useState("");
  var [pprice, setPprice] = useState("");

  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* Sidebar*/}
        <Sidebar />
        {/* Page content wrapper*/}
        <div id="page-content-wrapper">
          {/* Top navigation*/}
          <Header />
          {/* Page content*/}
          <div className="container-fluid">
            <h1 className="mt-4">Add Products</h1>
            <br />
            <br />
            <div className="row">
              <label
                // for="username"
                className="col-sm-2 
                col-form-label h1"
              >
                Product Name
              </label>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Name"
                  onChange={(ev) => {
                    setPname(ev.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <label
                // for="usernumber"
                className="col-sm-2 
                col-form-label h1"
              >
                Product Barcode
              </label>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  id="usernumber"
                  placeholder="Enter Barcode"
                  onChange={(ev) => {
                    setPbarcode(ev.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <div className="row">
              <label
                // for="userprice"
                className="col-sm-2 
                col-form-label h1"
              >
                Product Price
              </label>
              <div className="col-sm">
                <input
                  type="text"
                  className="form-control"
                  id="userprice"
                  placeholder="Enter Price"
                  onChange={(ev) => {
                    setPprice(ev.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <button
              onClick={async () => {
                var fd = new FormData();
                fd.append("name", pname);
                fd.append("barcode", pbarcode);
                fd.append("price", pprice);

                var resp = await axios.post("http://localhost:2000/products/add",fd);
                var resp2 = await resp.data;
                console.log(resp2);
              }}
              type="submit"
              className="btn btn-secondary"
            >
              Add Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addproduct;
