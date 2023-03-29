import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Print() {
  let [bill, setBill] = useState({});
  let [products, setProducts] = useState([]);
  const params = useParams();
  async function getData() {
    var fd = new FormData();
    fd.append("oid", params.oid);
    var resp = await fetch("http://localhost:2000/bills/mbill", {
      method: "POST",
      body: fd,
    });
    var data = await resp.json();
    setBill(data.bill);
    setProducts(data.products);
    setTimeout(function () {
      pbill();
    }, 3000);
  }
  function pbill() {
    window.print();
    setTimeout(function () {
      window.close();
    }, 5000);
  }

  useEffect(() => {
    getData();
  }, [params.oid]);
  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* Sidebar*/}

        {/* Page content wrapper*/}
        <div id="page-content-wrapper">
          {/* Top navigation*/}

          {/* Page content*/}
          <div className="container-fluid">
            <h1 className="mt-4">Bill</h1>
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Bill No</th>
                  <th>{bill.order_id}</th>
                </tr>
                <tr>
                  <th>Customer Name</th>
                  <th>{bill.name}</th>
                </tr>
                <tr>
                  <th>Customer Phone</th>
                  <th>{bill.phone}</th>
                </tr>
              </thead>
            </table>

            <table className="table table-striped">
              <thead>
                <tr>
                  <th>Barcode</th>
                  <th>Product Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {products.map((pro) => (
                  <tr key={pro._id}>
                    <td>{pro.barcode}</td>
                    <td>{pro.name}</td>
                    <td>{pro.price}</td>
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

export default Print;
