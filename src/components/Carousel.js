import React, { useState } from 'react'
import burger from '../images/burger.jpg';
import biryani from '../images/biryani.jpg';
import chicken from '../images/butterChicken.jpg';

export default function Carousel(props) {
  const [search,setSearch]=useState("");
  return (
    <>
      <div className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner" style={{ height: "400px" }}>
          <div className='carousel-caption' style={{ zIndex: "1" }}>
            <div className="mb-10">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Search" value={search} onChange={(e)=>setSearch(e.target.value)} />
                <button className="btn  bg-warning text-light" type="button" onClick={()=>props.search({search})}>Search</button>
              </div>
            </div>
          </div>
          <div className="carousel-item active" data-bs-interval="5000">
            <img src={burger} alt="c" className="d-block w-100"/>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={biryani} alt="c"className="d-block w-100" />
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={chicken} alt="c"className="d-block w-100" />
          </div>
        </div>
      </div>
    </>
  )
}

