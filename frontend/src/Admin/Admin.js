// AdminPanel.js
import React, { useState } from "react";
import Sidebar from "./Sidebar";
import axios from "axios"
import AllProducts from "./component/AllProducts";
import Overview from "./component/Overview";
import SellerRequest from "./component/SellerRequest";

const Admin = () => {
  const [activeSection, setActiveSection] = useState("overview");

  return (
    <div className="lg:flex h-screen">
      <Sidebar setActiveSection={setActiveSection} ActiveSection={activeSection} />
      <div className="flex-grow p-8 relative bg-white m-3 shadow-lg rounded-sm shadow-slate-500">
      {activeSection === "overview" && <div>
          <Overview/>
        </div>}
        
        {activeSection === "seller_request" &&
          <div>
            <SellerRequest/>
          </div>}
        {activeSection === "insertProduct" && <div>
          {/* <Insert/> */}
        </div>}

        {activeSection === "deleteProduct" && <div><AllProducts/></div>}
        {/* Add more sections as needed */}
      </div>
        {/* Add more sections as needed */}
    </div>
  );
};

export default Admin;
