import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Addcustomer from "./pages/Addcustomer";
import Addproduct from "./pages/Addproduct";
import Listcustomer from "./pages/Listcustomer";
import Listproduct from "./pages/Listproduct";
import Editproduct from "./pages/Editproduct";
import Editcustomer from "./pages/Editcustomer";
import Createbill from "./pages/Createbill";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/add-product" element={<Addproduct />} />
          <Route path="/list-product" element={<Listproduct />} />
          <Route path="/add-customer" element={<Addcustomer />} />
          <Route path="/list-customer" element={<Listcustomer />} />
          <Route path="/edit-product/:id" element={<Editproduct />} />
          <Route path="/edit-customer/:id" element={<Editcustomer />} />
          <Route path="/create-bill" element={<Createbill />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
