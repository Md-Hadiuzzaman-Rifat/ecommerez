import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import Admin from "./AdminPannel/pages/Admin/Admin";
import AdminLogin from "./AdminPannel/pages/AdminLogin/AdminLogin";
import Product from "./AdminPannel/pages/Product/Product";
import Mans from "./components/Mans/Mans";
import Woman from "./components/Women/Women";
import Sunglass from "./components/Sunglass/Sunglass";
import Accessories from "./components/accessories/Accessories";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/admin" element={<Admin />}></Route>
            <Route path="/adminLogin" element={<AdminLogin/>}></Route>
            <Route path="/product" element={<Product/>} ></Route>
            {/* <Route path="/product" element={<Product/>} ></Route> */}
            {/* // user page  */}
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            
            <Route path="/home" element={<Home />}></Route>
            <Route path="/singleProduct" element={<SingleProduct />}></Route>
            <Route path="/productDetails" element={<ProductDetails />}></Route>
            <Route path="/mans" element={<Mans/>}></Route>
            <Route path="/sunglass" element={<Sunglass/>}></Route>
            <Route path="/women" element={<Woman/>}></Route>
            <Route path="/accessories" element={<Accessories/>}></Route>
            <Route path="/checkout" element={<CheckoutPage/>}></Route>
            <Route path="/products" element={<ProductLayout/>}></Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
