import React,{useState} from 'react'

const Register = () => {
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
         const data= await response.json();
        console.log(data);
    }
    return (
    <div>
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
      <label >confirm password: </label>
      <input
        type='password'
        name="confirmPassword"
        value={formData.currentPassword}
        onChange={handleInputChange}
        required
      >
      </input>
      </div>
      {passwordError && <p style={{ color: 'red' }}>{passwordError}</p>}
      <div>
        <button type="submit">Register</button>
      </div>
    </form>     
    </div>
  )
}

export default Register
