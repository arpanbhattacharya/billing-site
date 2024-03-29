import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <div className="border-end bg-white" id="sidebar-wrapper">
        <div className="sidebar-heading border-bottom bg-light">
          Start Bootstrap
        </div>
        <div className="list-group list-group-flush">
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/"
          >
            Dashboard
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/add-product"
          >
            Add Products
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/list-product"
          >
            List Products
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/add-customer"
          >
            Add Customers
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/list-customer"
          >
            List Customers
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/create-bill"
          >
            Create Bill
          </Link>
          <Link
            className="list-group-item list-group-item-action list-group-item-light p-3"
            to="/show-bill"
          >
            Show Bill
          </Link>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
