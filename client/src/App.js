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
import { AuthProvider } from './context/AuthContext';
import AboutUs from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';

function App() {
  const [isLoggedIn,setIsLoggedIn]=useState(false);
  return (
    <AuthProvider>
    <div className="App">
     <BrowserRouter>
     <div>
        {/* <Header/> */}
        <Routes>
          <Route index path="/" exact element={<Home  />} ></Route>
          {/* <Route path="/login" element={<Login/>}></Route> */}
          {/* <Route path="/register" element={<Register/>}></Route> */}
          <Route path="/product/:productID" element={
          <div>
          <Header />
          <ProductDetail/>
        </div>} exact></Route>
         <Route path="/about" element={
          <div><Header/><AboutUs/></div>
         }></Route>
         <Route path="/contact" element={
          <div><Header/><ContactUs/></div>
         }></Route>
          {/* <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess/>} ></Route> */}
          <Route path="/product/category/:categoryId" element={<CategoryProducts/>} exact></Route>
          
          <Route path="/addProduct" element={<AddProduct/>}></Route>
          <Route path="/cart" element={
            <PrivateRoute  element={
            <div>
            <Header  />
            <Cart />
          </div>}/>}></Route>

          
        </Routes>
       
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
          <Route path="/checkout" element={<CheckoutPage/>}></Route>
          <Route path="/paymentsuccess" element={<PaymentSuccess />} ></Route>
          
          <Route path="/profile" element={
            <div>
          <UserProfile/>
          </div>
          }></Route>
        </Routes>
      </div>  
     </BrowserRouter>
      
    </div>
    </AuthProvider>
  );
}

export default App;
