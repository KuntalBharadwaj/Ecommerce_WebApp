import Home from "./component/Home/Home";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
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
import { intializeState } from "./component/redux/CartSlice";
import Admin from "./Admin/Admin";
import SuccesfulPayemnt from "./component/Address/SuccesfulPayemnt";
import Seller from "./Seller/Seller.js";

function App() {
  const { isUserLogin, isAdminLogin, isSellerLogin, user } = useContext(LoginContext);
  const { ProductList } = useContext(ProductContext);

  const dispatch = useDispatch();

  const fetchCart = async () => {
    const response = await axios.get(`${window.location.origin}/api/user/cart`, {
      withCredentials: true,
    });
    if (response.data.success) {
      let Productdata = [];
      let responseData = response.data.data;
      if (ProductList.length) {
        ProductList.forEach((ele) => {
          responseData.forEach((e) => {
            if (ele._id === e.product_id) {
              let temp = ele;
              temp = { ...temp, count: e.count };
              Productdata.push(temp);
            }
          });
        });
        dispatch(intializeState(Productdata));
      }
    }
  };

  useEffect(() => {
    fetchCart();
  }, [isUserLogin, user, []]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            (isAdminLogin)?<Admin/>:
            (isSellerLogin)?<Seller/>:
            <>
              <NavigationBar />
              <Home />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />

        <Route
          path="/login"
          element={
            (isUserLogin || isAdminLogin || isSellerLogin) ? (
              <Navigate to="/" />
            ) : (
              <>
                <NavigationBar />
                <Login />
              </>
            )
          }
        />
        <Route
          path="/register"
          element={
            (isUserLogin || isAdminLogin || isSellerLogin) ? (
              <Navigate to="/" />
            ) : (
              <>
                <NavigationBar />
                <Register />
              </>
            )
          }
        />
        <Route
          path="/product/:catagory"
          element={
            <>
              <NavigationBar />
              <ProductMain />
            </>
          }
        />
        <Route
          path="/product/:catagory/:id"
          element={
            <>
              <NavigationBar />
              <ProductOverview />
            </>
          }
        />
        <Route
          path="/viewCart"
          element={
            isUserLogin ? (
              <>
                <NavigationBar />
                <ShoppingCart />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route
          path="/checkout"
          element={isUserLogin ? <AddressMain /> : <Navigate to="/login" />}
        />
        <Route
          path="/profile"
          element={isUserLogin ? <Profile /> : <Navigate to="/login" />}
        />
        <Route
          path="/payment"
          element={isUserLogin ? <SuccesfulPayemnt/> : <Navigate to="/login" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
