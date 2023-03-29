import { useState } from "react";
import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useEffect } from "react";
import axios from "axios";

function Showbill() {
  let [bill, setBill] = useState([]);
  async function getData() {
    var resp = await axios.get("http://localhost:2000/bills/sbill");
    var resp2 = resp.data;
    setBill(resp2);
  }

  useEffect(() => {
    getData();
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
            <h1 className="mt-4">Bill</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Bill No.</th>
                  <th scope="col">Customer Name</th>
                  <th scope="col">Customer Number</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {bill.map((b) => (
                  <tr key={b._id}>
                    <td>{b.order_id}</td>
                    <td>{b.name}</td>
                    <td>{b.phone}</td>
                    <td>
                      <a
                        target="_blank"
                        href={"/print/" + b.order_id}
                        className="btn btn-success"
                      >
                        Print
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Showbill;
