import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from './components/home/home';
import ProductDetail from './components/product/ProductDetail';

import CheckoutPage from './components/checkout/CheckoutPage';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>} ></Route>
          <Route path="/api/auth/login" element={<Login/>}></Route>
          <Route path="/product/:productID" element={<ProductDetail/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
