import React from "react";
import { useState, useContext } from "react";
import axios from "axios";
import { LoginContext } from "../context/LoginContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setIsError] = useState("");
  const [Type, setType] = useState("User");

  const { setIsUserLogin,setIsSellerLogin,setIsAdminLogin, setUser } = useContext(LoginContext);
  const navigate = useNavigate();

  // for dynamic redirect
  const location = useLocation();
  const from = location.state || "/";

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${window.location.origin}/api/login`,
        {
          email: email,
          password: password,
          role: Type
        },
        { withCredentials: true }
      );
      if (data.data.success) {
        if(data.data.user.role === 'User') setIsUserLogin(true)
          if(data.data.user.role === 'Seller') setIsSellerLogin(true)
          if(data.data.user.role === 'Admin') setIsAdminLogin(true)

        await setUser(pre=>(data.data.user));
        navigate(`${from}`);
      } else {
        setIsError(data.data.message);

        setTimeout(() => {
          setIsError("");
        }, 4000);
      }
    } catch (error) {
      console.log(error.message) // edit
      setIsError("Some Internal Error Occur");
    }
  };

  return (
    <div className="flex items-center justify-center h-[91vh]">
      <div className="flex flex-col justify-center items-center relative  w-[350px] shadow-lg md:w-[400px] h-[450px] bg-white ">
        <h1 className="absolute top-5 text-4xl font-bold font-sans">Login</h1>
        <div className="flex flex-col items-center justify-center">
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            required
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="pl-2 w-[300px] h-[45px] my-3 bg-slate-300"
          ></input>
          <input
            type="password"
            name="password"
            placeholder="Enter your Password"
            required
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="pl-2 w-[300px] h-[45px] my-3 bg-slate-300"
          ></input>
          <div className="flex justify-around mt-3 mb-3 ">
            <label htmlFor="select" className="mr-5">Login As a</label>
            <select id="select" className="border border-black" value={Type} onChange={(e)=>{setType(e.target.value)}}>
              <option value="User">User</option>
              <option value="Admin">Admin</option>
              <option value="Seller">Seller</option>
            </select>
          </div>
          <div className="mt-2">
            <Link to={"/register"} className="mt-2 text-sm sm:text-md">Create a new Account !<span className=' text-blue-600'> !Click Here</span></Link>
          </div>
          <button
            type="submit"
            className="w-[300px] h-[45px] my-2 bg-purple-500"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
        {isError !== "" ? (
          <div className="w-[300px] h-10 bg-white border-2 shadow-md border-red-300 mt-5 text-sm font-semibold text-red-600 flex items-center justify-center">
            {isError}
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Login;
