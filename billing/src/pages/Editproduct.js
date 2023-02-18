import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editproduct() {
  const param = useParams();

  var [pname, setPname] = useState("");
  var [pbarcode, setPbarcode] = useState("");
  var [pprice, setPprice] = useState("");

  async function getdata() {
    // var id = param.id;
    var fd = new FormData();
    fd.append("id", param.id);
    var resp = await axios.post("http://localhost:2000/products/edit", fd);
    var pdata = await resp.data;
    console.log(pdata);
    setPname(pdata.name);
    setPbarcode(pdata.barcode);
    setPprice(pdata.price);
  }

  useEffect(() => {
    getdata();
  }, []);

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
            <h1 className="mt-4">Edit Products</h1>
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
                  value={pname}
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
                  value={pbarcode}
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
                  value={pprice}
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

                var resp = await axios.post(
                  "http://localhost:2000/products/upd",
                  fd
                );
                var resp2 = await resp.data;
                console.log(resp2);
                window.location = "/list-product";
              }}
              type="submit"
              className="btn btn-secondary"
            >
              Edit Product
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editproduct;
