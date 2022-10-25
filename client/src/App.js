import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import ScrollToTop from "./components/ScrollToTop";
import Success from "./pages/Success";

function App() {
  const user = useSelector((state) => state.user.currentUser);
  // const navigate = useNavigate()


  return (
    <BrowserRouter>
      <ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/:category" element={<ProductList />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="cart" element={<Cart />} />
        <Route path="success" element={<Success/>}/>
        <Route
        path="login"
        element={
          user ? (<Navigate replace to="/"/>)
        : (<Login />)
        }
        />
        <Route 
        path="register" 
        element={
          user ? (<Navigate replace to='/'/>)
          : (<Register />)
        } />
      </Routes>
      </ScrollToTop>
    </BrowserRouter>
  );
}

export default App;
