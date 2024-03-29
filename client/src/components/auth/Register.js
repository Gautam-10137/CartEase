import React,{useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({
        username:'',
        email:'',
        password:'',
        confirmPassword:''
    });
    const [passwordError,setPasswordError]=useState('');

    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        
        setFormData({
            ...formData,
         [name]:value
        })
        if(name==='password' || name==='confirmPassword'){
            setPasswordError('');
        }
    }

    const handleFormSubmit=async (e)=>{
        e.preventDefault();
        const username=formData.username;
        const email=formData.email;
        const password=formData.password;
        const confirmPassword=formData.confirmPassword;
        if(password!==confirmPassword){
            setPasswordError('Password do not match');
            return ;
        }
         const response=await fetch('http://127.0.0.1:7000/api/auth/register',{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
            },
            body:JSON.stringify({username,email,password})
         });
        navigate('/');
    }
       
    return (
    <div>
      <div className="font-bold shadow hover:shadow-md hover:bg-red-200 text-2xl border-2 text-center w-28  border-red-200 rounded bg-red-100 mx-auto mb-10 mt-6 h-8">
              <Link to="/">CartEase</Link>
            </div>
      <div className='w-1/3 mx-auto border-2 shadow-md'>
     <form onSubmit={handleFormSubmit}>         
      <div>
      <label className='block text-gray-500 text-lg' >username: </label>
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
        className=' w-full border  rounded-md p-2 mt-1 '
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
        className=' w-full border  rounded-md p-2 mt-1 '
        required
      >
      </input>
      </div>
      <div>
      <label className='block text-gray-500 text-lg' >confirm password: </label>
      <input
        type='password'
        name="confirmPassword"
        value={formData.currentPassword}
        onChange={handleInputChange}
        className=' w-full border  rounded-md p-2 mt-1 '
        required
      >
      </input>
      </div>
      {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      <div className='my-5 text-center'>
        <button className='bg-slate-100 border-2 border-red-100 hover:bg-slate-200 focus:bg-slate-300 w-28 text-xl font-medium' type="submit">Register</button>
      </div>
    </form>  
    </div>   
    </div>
  )
}

export default Register
