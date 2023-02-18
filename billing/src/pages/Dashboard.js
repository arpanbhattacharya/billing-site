import Header from "../inc/Header";
import Sidebar from "../inc/Sidebar";

function Dashboard() {
  return (
    <>
      <div className="d-flex" id="wrapper">
        {/* Sidebar*/}
        <Sidebar/>
        {/* Page content wrapper*/}
        <div id="page-content-wrapper">
          {/* Top navigation*/}
          <Header/>
          {/* Page content*/}
          <div className="container-fluid">
            <h1 className="mt-4">Dashboard</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
