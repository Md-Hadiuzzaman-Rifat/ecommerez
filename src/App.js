import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss";
import SingleProduct from "./components/SingleProduct/SingleProduct";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import { AuthProvider } from "./context/AuthContext";
import AdminLogin from "./AdminPannel/pages/AdminLogin/AdminLogin";
import Product from "./AdminPannel/pages/Product/Product";
import Mans from "./components/Mans/Mans";
import Woman from "./components/Women/Women";
import Sunglass from "./components/Sunglass/Sunglass";
import Accessories from "./components/accessories/Accessories";
import ProductLayout from "./components/ProductLayout/ProductLayout";
import CheckoutPage from "./components/CheckoutPage/CheckoutPage";
import Exp from "./components/Exp/Exp";
import EditProduct from "./components/EditProduct/EditProduct";
import Dashboard from "./AdminPannel/pages/Dashboard/Dashboard";
import Invoice from "./AdminPannel/pages/Invoice/Invoice";
import Control from "./AdminPannel/pages/Control/Control";
import OrderSuccess from "./components/OrderSuccess/OrderSuccess";
import MainContent from "./AdminPannel/components/MainContent/MainContent";
import Badges from "./AdminPannel/components/Badges/Badges";
import ViewOrder from "./AdminPannel/pages/ViewOrder/ViewOrder";
import Profile from "./components/Profile/Profile";
import Practice from "./components/Practice/Practice";
import Practice2 from "./components/Practice2/Practice2";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRoute from "./components/PublicRoute/PublicRoute";
import BlogDashboard from "./AdminPannel/pages/BlogDashboard/BlogDashboard";
import PaymentPage from "./components/PaymentPage/PaymentPage";
import ControllerPrivateRoute from "./AdminPannel/components/ControllerPrivateRoute/ControllerPrivateRoute";
import Article from "./components/Article/Article";
import CallButton from "./components/CallButton/CallButton";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Header></Header>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/invoice/:id" element={<Invoice />}></Route>
            <Route path="/dashboard/orders/invoice/:id" element={<Invoice />}></Route>
            <Route path="/control" element={<Control />}></Route>
            {/* Admin subRoute start*/}

            {/* <Route path="admin/" element={<Admin />}> */}
            <Route path="/admin" element={<AdminLogin></AdminLogin>} />
            {/* // dashbaord and its nasted routes  */}
            <Route path="dashboard" element={<Dashboard></Dashboard>}>
              <Route path="*" element={<ControllerPrivateRoute/>}>
              <Route path="control" element={<Control></Control>} />
              <Route path="orders" element={<MainContent></MainContent>} />
              <Route path="blogDashboard" element={<BlogDashboard></BlogDashboard>} />
              <Route path="orders/:orderId" element={<ViewOrder />}></Route>
              <Route path="product" element={<Product></Product>} />
              </Route>
            </Route>
            {/* </Route> */}

            
            {/* Admin subRoute end */}
            <Route path="/adminLogin" element={<AdminLogin />}></Route>
            <Route path="/product" element={<Product />}></Route>
            <Route path="/dashboard" element={<ControllerPrivateRoute><Dashboard /></ControllerPrivateRoute>}></Route>
            {/* <Route path="/product" element={<Product/>} ></Route> */}
            {/* // user page  */}

            {/* // for user router  */}
            <Route path="/" element={<PublicRoute/>}>
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />}></Route>
            </Route>
            
            <Route path="/home" element={<Home />}></Route>
            <Route path="/payment" element={<PaymentPage />}></Route>
            <Route
              path="/home/productDetails/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/practice" element={<Practice />}></Route>
            <Route path="/practice2" element={<Practice2 />}></Route>
            <Route path="/singleProduct" element={<SingleProduct />}></Route>
            <Route
              path="/productDetails/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/mans" element={<Mans />}></Route>
            <Route path="/mans/productDetails/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/sunglass" element={<Sunglass />}></Route>
            <Route path="/sunglass/productDetails/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/women" element={<Woman />}></Route>
            <Route path="/women/productDetails/:productId"
              element={<ProductDetails />}
            ></Route>
            <Route path="/orderSuccess" element={<OrderSuccess />}></Route>
            <Route path="/accessories" element={<Accessories />}></Route>
            <Route
              path="/checkout"
              element={
                <PrivateRoute>
                  <CheckoutPage />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/products" element={<ProductLayout />}></Route>
            <Route path="/blog/:id" element={<Article />}></Route>
            <Route path="/exp" element={<Exp />}></Route>
            <Route path={`/edit/:productId`} element={<EditProduct />}></Route>
            <Route path="/badge" element={<Badges></Badges>}></Route>
          </Routes>
        </AuthProvider>
        <CallButton></CallButton>
      </BrowserRouter>
    </div>
  );
}

export default App;
