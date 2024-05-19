// Sidebar.js
import React, { useContext } from "react";
import { LoginContext } from "../component/context/LoginContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Logout } from "@mui/icons-material";

const Sidebar = ({ setActiveSection, ActiveSection}) => {

  const {setIsAdminLogin,setUser} = useContext(LoginContext)
  const navigate = useNavigate()

  const handleLogout = async()=>{
    const response = await axios.get("http://127.0.0.1:4000/api/user/logout",{withCredentials:true})
    if(response.data.success) {
      setIsAdminLogin(false)
      setUser(null)
      navigate("/login")
    }
  }

  return (
    <div className="bg-white m-3 shadow-lg rounded-sm shadow-slate-500 text-slate-700 lg:w-80 flex flex-col">
      <div className="p-4 text-2xl font-bold">Admin Panel</div>
      <ul className="p-4 flex lg:flex-col justify-start">
      
      <li
          className={`p-4 mb-2 border-b-2 border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "overview")?`bg-[#e5ccffb0]`:""}`}
          onClick={() => setActiveSection("overview")}
        >
          <h1 className="text-sm font-semibold">Overview</h1>
        </li>
        
        <li
          className={`p-4 mb-2 border-b-2 border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "seller_request")?`bg-[#e5ccffb0]`:""}`}
          onClick={() => setActiveSection("seller_request")}
        >
          <h1 className="text-sm font-semibold">Seller Request</h1>
        </li>
        <li
          className={`p-4 mb-2 border-b-2 border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "deleteProduct")?`bg-[#e5ccffb0]`:""}`}
          onClick={() => setActiveSection("deleteProduct")}
        >
          <h1 className="text-sm font-semibold">Delete Product</h1>
        </li>
        <li
          className={`p-4 mb-2 flex border-b-2 border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "logout")?`bg-[#e5ccffb0]`:""}`}
          onClick={() => {
            setActiveSection("logout")
            handleLogout()
          }}
        >
          <h1 className="text-sm font-semibold mr-2">Logout</h1>
          <Logout/>
        </li>
        
      </ul>
    </div>
  );
};

export default Sidebar;
