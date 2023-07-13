import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function Signup() {

  const [info,setInfo]=useState({name:"",password:"",address:"",contact:"",email:""});
  const navigate=useNavigate();
  const handleSubmit= async (e)=>{
    e.preventDefault();
    const response=await fetch('http://localhost:5000/api/createUser',{
      method:'POST',
      headers:{
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        name:info.name,
        email:info.email,
        contactNumber:info.contact,
        address:info.address,
        password:info.password
      })
    })
    const json = await response.json();
    console.log(json);
    if(!json.success){
      alert("invalid");
    }
    else{
      navigate('/api/Login');
    }
  }
  const handleChange=(e)=>{
    setInfo({...info,[e.target.name]:e.target.value});
  }

  return (
    <>
    <Navbar/>
      <div className="container my-5 p-5 ">
      <form className="row g-3 d-flex-column justify-content-center" onSubmit={handleSubmit}>
        <div className="col-7">
          <label htmlFor="inputName" className="form-label" >Name</label>
          <input type="text" className="form-control" name="name" value={info.name} onChange={handleChange} />
        </div>
        <div className="col-md-7">
          <label htmlFor="inputEmail4" className="form-label" >Email</label>
          <input type="email" className="form-control" name="email" value={info.email} onChange={handleChange} />
        </div>
        <div className="col-md-7">
          <label htmlFor="inputPassword4" className="form-label" >Password</label>
          <input type="password" className="form-control" name="password" value={info.password} onChange={handleChange} />
        </div>
        <div className="col-md-7">
          <label htmlFor="inputContact" className="form-label" >Contact Number</label>
          <input type="tel" className="form-control" name="contact" value={info.contact} onChange={handleChange}/>
        </div>
        <div className="col-7">
          <label htmlFor="inputAddress" className="form-label" >Address</label>
          <input type="text" className="form-control" name="address" value={info.address} onChange={handleChange} placeholder="1234 Main St" />
        </div>
        <div className="col-7">
          <button type="submit" className="btn btn-warning text-light">Sign in</button>
        </div>
        <div className="col-7">
        <Link to="/api/Login">Already a user?</Link>
        </div>
      </form>
      </div>
    </>
  )
}

