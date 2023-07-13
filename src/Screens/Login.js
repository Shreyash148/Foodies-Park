import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Login() {

  const [info,setInfo]=useState({password:"",email:""});
    const navigate=useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:5000/api/loginUser',{
      method:'POST',
      headers:{ 
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        email:info.email,
        password:info.password
      })
    })
    const json = await response.json();
    console.log(json);
    if(!json.success){
      alert("invalid");
    }
    else{
      localStorage.setItem("email",info.email);
      localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem("authToken"));
        navigate('/');
    }
  }
  const handleChange=(e)=>{
    setInfo({...info,[e.target.name]:e.target.value});
  }

  return (
    <>
    <Navbar/>
      <div className="container my-5 p-5">
      <form className="row g-3 d-flex-column justify-content-center" onSubmit={handleSubmit}>
        <div className="col-md-7">
          <label htmlFor="inputEmail4" className="form-label" >Email</label>
          <input type="email" className="form-control" name="email" value={info.email} onChange={handleChange} />
        </div>
        <div className="col-md-7">
          <label htmlFor="inputPassword4" className="form-label" >Password</label>
          <input type="password" className="form-control" name="password" value={info.password} onChange={handleChange} />
        </div>
        <div className="col-7">
          <button type="submit" className="btn btn-warning text-light">Log in</button>
        </div>
        <div  className="col-7">
        <Link to="/api/createUser">I'm new user?</Link>
        </div>
      </form>
      </div>
    </>
  )
}

