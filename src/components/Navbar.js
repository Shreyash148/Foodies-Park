import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Cart from '../Screens/Cart';

export default function Navbar() {
    const navigate=useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem("authToken");
        navigate("/api/Login");
    }
    const [modal,setModal]=useState(false);
    const handleModal=async()=>{
            setModal(true);
        }
    return (
        <>
        <div style={{position:"sticky" ,top:"0px",zIndex:"2"}}>
        <nav className="navbar navbar-expand-sm navbar-dark bg-warning" >
            <Link className="navbar-brand mx-4" to="/" style={{fontSize:"1.6rem",fontWeight:"bolder",fontFamily:"sans-serif"}}><i>FoodiesPark</i></Link>
            <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="/collapsibleNavId" aria-controls="collapsibleNavId"
                aria-expanded="false" aria-label="Toggle navigation"></button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/" aria-current="page">Home <span className="visually-hidden">(current)</span></Link>
                    </li>
                    {(localStorage.getItem("authToken"))?<li className="nav-item">
                        <Link className="nav-link active" to="/Myorders">My orders</Link>
                        </li>
                        :""
                    }
                    
                </ul>
                    {(!localStorage.getItem("authToken"))?
                <div className="d-flex my-2 my-lg-0">
                    <Link className="btn btn-outline-warning my-5 my-sm-0 bg-light" to="/api/Login">Log In</Link>
                    <Link className="btn btn-outline-warning my-5 my-sm-0 bg-light mx-4" to="/api/createUser">Sign Up</Link>
                </div>
                :<div className="d-flex my-2 my-lg-0">
                
                <div className="btn btn-outline-warning my-5 my-sm-0 bg-light mx-4" onClick={handleModal}>My Cart</div>
                <div className="btn btn-outline-warning my-5 my-sm-0 bg-light mx-4" onClick={handleLogout}>Logout</div>
                </div>
}
            </div>
        </nav>
        </div>
        {modal?<Cart onClose={()=>setModal(false)}/>:""}
        </>
    )
}
