import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import "./App.scss"
import SingleProduct from "./components/SingleProduct/SingleProduct";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import RelatedProduct from "./components/RelatedProduct/RelatedProduct";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/singleProduct" element={<SingleProduct/>}></Route>
          <Route path="/productDetails" element={<ProductDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
