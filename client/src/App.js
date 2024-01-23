import React,{useState} from 'react';
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
import Header from './components/header/header';
import PrivateRoute from './components/auth/PrivateRoute';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <div className="App">
     <BrowserRouter>
     <div>
        {/* <Header/> */}
        <Routes>
          <Route index path="/" exact element={<Home  isLoggedIn={isLoggedIn}/>} ></Route>
          {/* <Route path="/login" element={<Login/>}></Route> */}
          {/* <Route path="/register" element={<Register/>}></Route> */}
          <Route path="/product/:productID" element={
          <div>
          <Header isLoggedIn={isLoggedIn}/>
          <ProductDetail/>
        </div>} exact></Route>
          {/* <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess/>} ></Route> */}
          <Route path="/product/category/:categoryId" element={<CategoryProducts/>} exact></Route>
          
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/cart" element={
            <PrivateRoute isLoggedIn={isLoggedIn} element={
            <div>
            <Header isLoggedIn={isLoggedIn} />
            <Cart />
          </div>}/>}></Route>

          
        </Routes>
       
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess/>} ></Route>
          
          <Route path="/profile" element={
            <div>
          <UserProfile/>
          </div>
          }></Route>
        </Routes>
      </div>  
     </BrowserRouter>
      
    </div>
  );
}

export default App;
