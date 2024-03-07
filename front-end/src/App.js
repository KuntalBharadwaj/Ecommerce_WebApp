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
import { ProductContext } from "./component/context/ProductContext";
import { useContext, useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { intializeState } from "./component/redux/CartSlice"

function App() {

  const { isLogin } = useContext(LoginContext)
  const { ProductList } = useContext(ProductContext)

  const dispatch = useDispatch()

  const fetchCart = async () => {
    const response = await axios.get("http://127.0.0.1:4000/api/user/cart", { withCredentials: true })
    if (response.data.success) {

      let Productdata = []
      let responseData = response.data.data
      if(ProductList.length) {
        ProductList.forEach(ele => {
          responseData.forEach(e => {
            if (ele._id === e.product_id) {
              let temp = ele
              temp = {...temp,count:e.count}
              Productdata.push(temp)
            }
          })
        });
        dispatch(intializeState(Productdata))
      }
    }
  }

  useEffect(() => {
    fetchCart()
  }, [ProductList])

  return (

    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/login"
          element={isLogin ? <Navigate to="/" /> : <Login />} />
        <Route
          path="/register"
          element={isLogin ? <Navigate to="/" /> : <Register />} />
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
