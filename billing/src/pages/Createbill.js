import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useState } from "react";
import axios from "axios";

function Createbill() {
  var [cnumber, setCnumber] = useState("");

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
                <button onClick={async ()=>{
                    var fd = new FormData();
                    fd.append("number",cnumber);

                    var resp = await axios.post("http://localhost:2000/customers/find",fd);
                    var resp2 = await resp.data;
                    console.log(resp2);

                }} className="btn btn-outline-secondary" id="basic-addon2">
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
                  type="text"
                  className="form-control"
                  id="usernumber"
                  placeholder="Enter Number"
                />
              </div>
            </div>
            <br />
            <button
              type="submit"
              className="btn btn-secondary"
            >
              Add Customer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Createbill;
