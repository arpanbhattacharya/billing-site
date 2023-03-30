import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useState } from "react";
import axios from "axios";

function Createbill() {
  var [cnumber, setCnumber] = useState("");
  var [name, setName] = useState("");
  var [num, setNum] = useState("");
  var [cid, setCid] = useState("");
  var [barcode, setBarcode] = useState();
  var [dt, setDt] = useState("");

  var [bill, setBill] = useState([]);

  async function getbill() {
    var resp = await axios.get("http://localhost:2000/bills/getall");
    var resp2 = await resp.data;

    setBill(resp2);
  }
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
            <h1 className="mt-4">Create Bills</h1>
            <br />
            <br />
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Enter number to search"
                onChange={(ev) => {
                  setCnumber(ev.target.value);
                }}
              />
              <div className="input-group-append">
                <button
                  onClick={async () => {
                    var fd = new FormData();
                    fd.append("number", cnumber);

                    var resp = await axios.post(
                      "http://localhost:2000/customers/find",
                      fd
                    );
                    var resp2 = await resp.data;
                    console.log(resp2);
                    setName(resp2.name);
                    setNum(resp2.number);
                    setCid(resp2._id);
                  }}
                  className="btn btn-outline-secondary"
                  id="basic-addon2"
                >
                  search
                </button>
              </div>
            </div>
            <br />
            <div className="row">
              <label
                // for="username"
                className="col-sm-2 
                col-form-label h1"
              >
                Customer's Name
              </label>
              <div className="col-sm">
                <input
                  value={name}
                  onChange={(ev) => {
                    setName(ev.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Name"
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
                Customer's Number
              </label>
              <div className="col-sm">
                <input
                  value={num}
                  onChange={(ev) => {
                    setNum(ev.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="usernumber"
                  placeholder="Enter Number"
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
                Date
              </label>
              <div className="col-sm">
                <input
                  onChange={(ev) => {
                    setDt(ev.target.value);
                  }}
                  type="date"
                  className="form-control"
                  id="usernumber"
                  placeholder="Enter Number"
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
                  value={barcode}
                  onChange={(ev) => {
                    setBarcode(ev.target.value);
                  }}
                  type="text"
                  className="form-control"
                  id="usernumber"
                  placeholder="Enter Barcode"
                />
              </div>
            </div>
            <br />
            <button
              onClick={async () => {
                var fd = new FormData();
                fd.append("cid", cid);
                fd.append("barcode", barcode);
                var resp = await axios.post(
                  "http://localhost:2000/bills/add",
                  fd
                );
                var resp2 = await resp.data;
                console.log(resp2);

                setBarcode("");
                getbill();
              }}
              type="submit"
              className="btn btn-secondary"
            >
              Add Product
            </button>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Product Name</th>
                  <th scope="col">Product Price</th>
                  <th scope="col">Barcode</th>
                  <th scope="col">Delete</th>
                </tr>
              </thead>
              <tbody>
                {bill.map((pr) => (
                  <tr key={pr._id}>
                    <td>{pr.products[0].name}</td>
                    <td>{pr.products[0].price}</td>
                    <td>{pr.products[0].barcode}</td>
                    <td>
                      <button
                        onClick={async () => {
                          if (window.confirm("Are you sure?")) {
                            var fd = new FormData();
                            fd.append("id", pr._id);

                            var resp = await axios.post(
                              "http://localhost:2000/bills/del",
                              fd
                            );
                            var resp2 = await resp.data;
                            getbill();
                          }
                        }}
                        className="btn btn-danger"
                      >
                        delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <p>
              <button
                onClick={async () => {
                  var fda = new FormData();
                  fda.append("cid", cid);
                  fda.append("name", name);
                  fda.append("number", num);
                  fda.append("date", dt);

                  var respo = await axios.post(
                    "http://localhost:2000/bills/order",
                    fda
                  );
                  var respo2 = respo.data;
                  console.log(respo2);
                  window.location = "/show-bill";
                }}
                className="btn btn-success"
              >
                Confirm Order
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createbill;
