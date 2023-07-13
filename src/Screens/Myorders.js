import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card';

export default function Myorders() {
  const [foodItem, setFoodItem] = useState([]);
  const loadData = async () => {
    let response = await fetch('http://localhost:5000/api/orderData', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: localStorage.getItem("email")
      })
    });
    response = await response.json();
    setFoodItem(response);
  }
  useEffect(() => {
    loadData()
  }, []);
  return (
    <>
      <Navbar />
      <h3 style={{ position: "relative", left: "45%", margin: "20px" }}>My orders</h3>
      <div className="container">
        {foodItem.length !== 0 ? <>
          {foodItem.slice(0).reverse().map(ele =>
          <div  key={ele._id} >
            {new Date(ele.date).toLocaleString()}
            <div className='row'>
              {ele.items.map(e =>
                <div className="col-3 m-4" key={e._id}>
                  <Card key={e._id} item={e} type="order" />
                </div>
              )}

            </div></div>
          )}
        </> : <div className='text-center' style={{fontSize:"xx-large",padding:"20vh",color:"grey"}}><b>No Orders Yet</b></div>}
      </div>
      <Footer />
    </>
  )
}