import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import RelatedProduct from "./components/RelatedProduct/RelatedProduct";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import Admin from "./AdminPannel/pages/Admin/Admin";
import AdminLogin from "./AdminPannel/pages/AdminLogin/AdminLogin";
import Product from "./AdminPannel/pages/Product/Product";

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
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
