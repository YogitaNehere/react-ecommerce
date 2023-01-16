import logo from "./logo.svg";
import "./App.scss";
import {
  createBrowserRouter,
  RouterProvider,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
// import './assets/styles/bootstrap4/bootstrap.min.css';
import "./assets/styles/main_styles.css";
import "./assets/styles/responsive.css";
import "./assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./containers/Home/Home";
import ContactUs from "./containers/ContactUs/ContactUs";
import Cart from "./containers/Cart/Cart";
import NotFound from "./containers/NotFound/NotFound";
import ProductDetails from "./containers/ProductDetails/ProductDetails";
// import Login from './containers/Login/Login';
import React, { Suspense } from "react";
import Profile from "./containers/Profile/Profile";
const Login = React.lazy(() => import("./containers/Login/Login"));
const Shop = React.lazy(() => import("./containers/Shop/Shop"));

// onAddToCart = () => {
//   console.log('On add to card click');
// }

function App() {
  return (
    // <div className="App">
    <div className="super_container">
      <BrowserRouter>
        <Header />
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/cart" element={<Cart />} />
            {/* <Route path='/product-details/:id' element={ <ProductDetails />} /> */}
            <Route path="/product-details" element={<ProductDetails />} />
            <Route path="/login" element={<Login />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop:category" element={<Shop />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </div>
    // </div>
  );
}

export default App;
