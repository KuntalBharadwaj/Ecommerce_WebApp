import Home from "./component/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductMain from "./component/productList/ProductMain";
import ProductOverview from "./component/ProductOverview/ProductOverview";
import ShoppingCart from "./component/ShoppingCart/ShopingCart";
import NavigationBar from "./component/navbar/Navigation";
import AddressMain from "./component/Address/AddressMain";
import Login from "./component/Authentication/Login";
import Register from "./component/Authentication/Register";

function App() {
  return (

    <BrowserRouter>
    <NavigationBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/product/:catagory" element={<ProductMain />} />
        <Route path="/product/:catagory/:id" element={<ProductOverview />} />
        <Route path="/viewCart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<AddressMain />} />
        hello
      </Routes>
    </BrowserRouter>
  );
}

export default App;
