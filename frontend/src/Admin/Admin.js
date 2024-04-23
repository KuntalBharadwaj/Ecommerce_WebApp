// AdminPanel.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios"
import Insert from "./component/Insert";
import AllProducts from "./component/AllProducts";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("productOrders");

  return (
    <div className="lg:flex h-screen">
      <Sidebar setActiveSection={setActiveSection} ActiveSection={activeSection} />
      <div className="flex-grow p-8 relative bg-white m-3 shadow-lg rounded-sm shadow-slate-500">
        {activeSection === "productOrders" &&
          <div>
          </div>}
        {activeSection === "insertProduct" && <div>
          <Insert/>
        </div>}

        {activeSection === "deleteProduct" && <div><AllProducts/></div>}
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};

export default Admin;
