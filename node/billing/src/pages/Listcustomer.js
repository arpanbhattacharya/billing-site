import { useState } from "react";
import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listcustomer() {
  var [customers, setCustomers] = useState([]);

  async function getcustomer() {
    var resp = await axios.get("http://localhost:2000/customers/sel");
    var resp2 = await resp.data;

    setCustomers(resp2);
    console.log(resp2);
  }

  useEffect(() => {
    getcustomer();
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
            <h1 className="mt-4">List Customers</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Number</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {customers.map((cu) => (
                  <tr key={cu._id}>
                    <td>{cu.name}</td>
                    <td>{cu.number}</td>
                    <td>
                      <button
                        onClick={async () => {
                          if (window.confirm("Are you sure?")) {
                            var fd = new FormData();

                            fd.append("id", cu._id);

                            var resp = await axios.post(
                              "http://localhost:2000/customers/del",
                              fd
                            );
                            var resp2 = await resp.data;
                            console.log(resp2);

                            getcustomer();
                          }
                        }}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link
                        to={"/edit-customer/" + cu._id}
                        className="btn btn-outline-primary"
                      >
                        Edit
                      </Link>
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

export default Listcustomer;
