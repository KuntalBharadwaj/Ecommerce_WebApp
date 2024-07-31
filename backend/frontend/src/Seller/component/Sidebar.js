// Sidebar.js
import { Logout } from "@mui/icons-material";
import axios from "axios";
import React, { useContext } from "react";
import { LoginContext } from "../../component/context/LoginContext";
import { useNavigate } from "react-router-dom";
import { Avatar } from "@mui/material";

const Sidebar = ({ setActiveSection, ActiveSection}) => {

  const {setIsSellerLogin,setUser,user} = useContext(LoginContext)
  const navigate = useNavigate()

  const handleLogout = async()=>{
    const response = await axios.get(`${window.location.origin}/api/user/logout`,{withCredentials:true})
    if(response.data.success) {
      setIsSellerLogin(false)
      setUser(null)
      navigate("/login")
    }
  }

  return (
    <div className="bg-white m-3 shadow-lg rounded-sm shadow-slate-500 text-slate-700 lg:w-80 flex flex-col">
      <div className="p-4 flex items-center"><Avatar/><p className="ml-2 font-bold">{user.UserName}</p></div>
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
          className={`p-4 mb-2 border-b-2 flex border-slate-200 rounded-sm cursor-pointer hover:bg-[#f4ecfcb0] hover:text-light-violet ${(ActiveSection === "deleteProduct")?`bg-[#e5ccffb0]`:""}`}
          onClick={handleLogout}
        >
          <h1 className="text-sm font-semibold mr-3">Logout</h1>
          <Logout/>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
