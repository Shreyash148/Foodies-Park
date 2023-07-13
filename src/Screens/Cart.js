import React from 'react'
import CartItem from '../components/CartItem'
import { useCart, useDispatchCart } from '../components/ContextReducer';

export default function Cart({ onClose }) {
  const modalContainer = {
    position: "fixed",
    top: "2%",
    left: "5%",
    right: "5%",
    bottom: "2%",
    padding: "2rem",
    borderRadius: "15px",
    boxShadow: "1px 1px 5px 5px #888888",
    backgroundColor: "white",
    zIndex: "1000",
    overflowY: "scroll"
  }
  const dispatch= useDispatchCart();
  const data = useCart();
  let total = 0;
  if(data){total=data.reduce((t, food) => { return t + food.price }, 0);}
  const handleOrder = async()=>{
    await dispatch({type:"Drop"});
    const response = await fetch('http://localhost:5000/api/myOrder', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: localStorage.getItem("email"),
                cart: await data
            })
        })
        const json = await response.json();
        if (!json.success) {
            alert("invalid");
        }
  }
  return (
    <>
      <div style={modalContainer}>
        <div style={{ display: "flex", position: "relative" }}>
          <h1>My Cart</h1>
          <div className="btn btn-danger my-5 my-sm-0 mx-4" style={{ position: "absolute", right: "2rem" }} onClick={onClose}>X</div>
        </div>
        <hr />
        {data && data.length===0?<h4 style={{ position: "absolute", left: "45%",color:"grey" }}>Cart Empty</h4> :
          <div>
            {data.map((food, index) => {
              return <div key={food.id}>
                <CartItem food={food} index={index}/>
              </div>
            })}
            <h3 className="btn btn-danger my-4 mx-4" style={{ position: "absolute", left: "45%" }}  onClick={handleOrder}>
              <table><tbody>
              <tr>
                <td><div>Pay on Delivery</div>
                <div>Rs.{total}</div></td>
              </tr></tbody>
              </table>
            </h3>
          </div> 
        }
      </div>
    </>
  )
}
