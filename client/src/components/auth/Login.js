import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:''
    });

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        
        setFormData({
            ...formData,
         [name]:value
        })
       
    }

    const handleFormSubmit=async (e)=>{
        e.preventDefault();
        
         const response=await fetch('http://127.0.0.1:7000/api/auth/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',

            },
            body:JSON.stringify(formData)
         });
         const data=await response.json();
         const token=data.token;
         localStorage.setItem('token',token);
         navigate('/');
    }

  return (
    <form onSubmit={handleFormSubmit}>         
      <div>
      <label >username: </label>
      <input
        type='text'
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        required
      >
      </input>
      </div>
      <div>
      <label >email: </label>
      <input
        type='email'
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        required
      >
      </input>
      </div>
      <div>
      <label >password: </label>
      <input
        type='password'
        name="password"
        autoComplete='current-password'
        value={formData.password}
        onChange={handleInputChange}
        required
      >
      </input>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  )
}

export default Login
