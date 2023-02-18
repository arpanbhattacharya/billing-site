import { useState } from "react";
import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Listproduct() {
  var [products, setProducts] = useState([]);

  async function getproduct() {
    var resp = await axios.get("http://localhost:2000/products/sel");
    var resp2 = await resp.data;

    setProducts(resp2);
    console.log(resp2);
  }

  useEffect(() => {
    getproduct();
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
            <h1 className="mt-4">List Products</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Barcode</th>
                  <th scope="col">Price</th>
                  <th scope="col">Delete</th>
                  <th scope="col">Edit</th>
                </tr>
              </thead>
              <tbody>
                {products.map((pr) => (
                  <tr key={pr._id}>
                    <td>{pr.name}</td>
                    <td>{pr.barcode}</td>
                    <td>{pr.price}</td>
                    <td>
                      <button
                        onClick={async () => {
                          if (window.confirm("Are you sure?")) {
                            var fd = new FormData();

                            fd.append("id", pr._id);

                            var resp = await axios.post(
                              "http://localhost:2000/products/del",
                              fd
                            );
                            var resp2 = await resp.data;

                            getproduct();
                          }
                        }}
                        className="btn btn-outline-danger"
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <Link to={"/edit-product/"+pr._id} className="btn btn-outline-primary">Edit</Link>
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

export default Listproduct;
