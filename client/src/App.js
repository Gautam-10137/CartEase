import React from 'react';
import { BrowserRouter,Routes ,Route} from 'react-router-dom';
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Home from './components/home/home';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route index path="/" element={<Home/>} ></Route>
          <Route path="/api/auth/login" element={<Login/>}></Route>
          <Route></Route>
        </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
