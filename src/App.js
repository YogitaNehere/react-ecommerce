import logo from './logo.svg';
import './App.scss';
import {
  createBrowserRouter, 
  RouterProvider, 
  Routes,
  Route,
  BrowserRouter
} from "react-router-dom";
// import './assets/styles/bootstrap4/bootstrap.min.css';
import './assets/styles/main_styles.css';
import './assets/styles/responsive.css';
import './assets/plugins/font-awesome-4.7.0/css/font-awesome.min.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './containers/Home/Home';
import ContactUs from './containers/ContactUs/ContactUs';
import Cart from './containers/Cart/Cart';
import NotFound from './containers/NotFound/NotFound';
import ProductDetails from './containers/ProductDetails/ProductDetails';

// onAddToCart = () => {
//   console.log('On add to card click');
// }

function App() {
  return (
    <div className="App">
      <div className="super_container">
        <BrowserRouter>
          <Header/>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/product-details/:id' element={ <ProductDetails />} />
              <Route path='*' element={<NotFound />} />
            </Routes>
          <Footer />
        </BrowserRouter>
        
      </div>
    </div>
  );
}

export default App;
