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
    <div>
      <div className='text-center my-10'>CartEase</div>
    <div className='w-1/3 mx-auto border-2 shadow-md'>
    <form onSubmit={handleFormSubmit}>         
      
        <div>
      <label className='block text-gray-500 text-lg'>username: </label>
      <input
        type='text'
        name="username"
        value={formData.username}
        onChange={handleInputChange}
        className=' w-full border  rounded-md p-2 mt-1 '
        required
      >
      </input>
      </div>
      
      <div>
      <label className='block text-gray-500 text-lg' >email: </label>
      <input
        type='email'
        name="email"
        value={formData.email}
        onChange={handleInputChange}
        className='w-full border  rounded-md p-2 mt-1 '
        required
      >
      </input>
      </div>
      <div>
      <label className='block text-gray-500 text-lg' >password: </label>
      <input
        type='password'
        name="password"
        autoComplete='current-password'
        value={formData.password}
        onChange={handleInputChange}
        className='w-full border  rounded-md p-2 mt-1 '
        required
      >
      </input>
      </div>
      <div className='my-5 text-center'>
        <button className='bg-slate-100 hover:bg-slate-200 focus:bg-slate-300 w-28 text-xl font-medium' type="submit">Login</button>
      </div>
    </form>
    </div>
    </div>
  )
}

export default Login
