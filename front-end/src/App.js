import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ProductMain from "./component/productList/ProductMain";
import ProductOverview from "./component/ProductOverview/ProductOverview";
import ShoppingCart from "./component/ShoppingCart/ShopingCart";
import NavigationBar from "./component/navbar/Navigation";
import AddressMain from "./component/Address/AddressMain";
import Login from "./component/Authentication/Login";
import Register from "./component/Authentication/Register";
import Profile from "./component/Profile/Profile";
import { LoginContext } from "./component/context/LoginContext";
import { useContext, useEffect } from "react";
import axios from "axios";

function App() {

  const { isLogin } = useContext(LoginContext)

  const CartProduct = async()=>{
    try {
      const response = axios.get("",
      {withCredentials:true})
      
      console.log(response)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    CartProduct()
  },[])

  return (

    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/login" 
          element={isLogin ? <Navigate to="/" /> : <Login/>} />
        <Route 
          path="/register" 
          element={isLogin ? <Navigate to="/" /> : <Register/>} />
        <Route path="/product/:catagory" element={<ProductMain />} />
        <Route path="/product/:catagory/:id" element={<ProductOverview />} />
        <Route 
          path="/viewCart" 
          element={isLogin ? <ShoppingCart /> : <Navigate to="/login" />} />
        <Route 
          path="/checkout" 
          element={isLogin ? <AddressMain /> : <Navigate to="/login" />} />
        <Route
          path="/profile"
          element={isLogin ? <Profile /> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
