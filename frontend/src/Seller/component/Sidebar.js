// Sidebar.js
import React from "react";

const Sidebar = ({ setActiveSection, ActiveSection}) => {

  return (
    <div className="bg-white m-3 shadow-lg rounded-sm shadow-slate-500 text-slate-700 lg:w-80 flex flex-col">
      <div className="p-4 text-2xl font-bold">Seller Panel</div>
      <ul className="p-4 flex lg:flex-col justify-start">
      
      <li
          className={`p-4 mb-2 border-b-2 border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "overview")?`bg-[#e5ccffb0]`:""}`}
          onClick={() => setActiveSection("overview")}
        >
          <h1 className="text-sm font-semibold">Overview</h1>
        </li> 
        <li
          className={`p-4 mb-2 border-b-2 border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "insertProduct")?`bg-[#e5ccffb0]`:""}`}
          onClick={() => setActiveSection("insertProduct")}
        >
          <h1 className="text-sm font-semibold">Insert Product</h1>
        </li>
        <li
          className={`p-4 mb-2 border-b-2 border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "deleteProduct")?`bg-[#e5ccffb0]`:""}`}
          onClick={() => setActiveSection("deleteProduct")}
        >
          <h1 className="text-sm font-semibold">Logout</h1>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
