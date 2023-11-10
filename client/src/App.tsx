import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Shop from "./Components/shop/Shop";
import Cart from "./Components/Cart";
import Footer from './Components/Footer'
import Checkout from "./Components/Checkout";
import ProductDetails from "./Components/ProductDetails";
import Login from "./Components/Login";
import ProtectedRoute from "./ProtectedRoute";
import Dashboard from "./admin/Dashboard";
import AddProducts from "./admin/AddProducts";
import AllProducts from "./admin/AllProducts";


export default function App() {
  return (
    <>
   <Router>
    <div className="App">
    <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/shop:id" element={<ProductDetails />}/>
          <Route path="/cart" element={<Cart />}/>
          <Route path="/checkout" element={<Checkout />}/>

          <Route path="/*" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="dashboard/all-products" element={<AllProducts />} />
        <Route path="dashboard/add-product" element={<AddProducts />} />
      </Route>

          <Route path="/login" element={<Login />}/>
        </Routes>
        <Footer/>
      </div>      
    </Router>
    </>
  );
}
