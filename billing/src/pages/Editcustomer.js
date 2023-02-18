import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function Editcustomer() {
  const param = useParams();

  var [cname, setCname] = useState("");
  var [cnumber, setCnumber] = useState("");

  async function getdata() {
    // var id = param.id;
    var fd = new FormData();
    fd.append("id", param.id);
    var resp = await axios.post("http://localhost:2000/customers/edit", fd);
    var cdata = await resp.data;
    console.log(cdata);
    setCname(cdata.name);
    setCnumber(cdata.number);
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
            <h1 className="mt-4">Edit Customers</h1>
            <br />
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
                  value={cname}
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter Name"
                  onChange={(ev) => {
                    setCname(ev.target.value);
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
                Customer's Number
              </label>
              <div className="col-sm">
                <input
                  value={cnumber}
                  type="text"
                  className="form-control"
                  id="usernumber"
                  placeholder="Enter Barcode"
                  onChange={(ev) => {
                    setCnumber(ev.target.value);
                  }}
                />
              </div>
            </div>
            <br />
            <button
              onClick={async () => {
                var fd = new FormData();
                fd.append("name", cname);
                fd.append("number", cnumber);
                var resp = await axios.post(
                  "http://localhost:2000/customers/upd",
                  fd
                );
                var resp2 = await resp.data;
                console.log(resp2);
                window.location = "/list-customer";
              }}
              type="submit"
              className="btn btn-secondary"
            >
              Edit Customer
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editcustomer;
