import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from './components/home/home';
import ProductDetail from './components/product/ProductDetail';

import CheckoutPage from './components/checkout/CheckoutPage';
import PaymentSuccess from './components/checkout/PaymentSuccess';
import CategoryProducts from './components/category/CategoryProducts';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>} ></Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/product/:productID" element={<ProductDetail/>} exact></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess/>} ></Route>
          <Route path="/product/category/:categoryId" element={<CategoryProducts/>} exact></Route>
          
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
