import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from './components/home/home';
import ProductDetail from './components/product/ProductDetail';

import CheckoutPage from './components/checkout/CheckoutPage';
import PaymentSuccess from './components/checkout/PaymentSuccess';
import CategoryProducts from './components/category/CategoryProducts';
import Cart from './components/cart/Cart';
import AddProduct from './components/product/AddProduct';
import UserProfile from './components/profile/UserProfile';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/product/:productID" element={<ProductDetail/>} exact></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess/>} ></Route>
          <Route path="/product/category/:categoryId" element={<CategoryProducts/>} exact></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/profile" element={<UserProfile/>}></Route>

          
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
