import React from 'react'
import del from '../images/icons8-trash.svg'
import { useDispatchCart } from './ContextReducer'


export default function CartItem(props) {
  let dispatch = useDispatchCart();
  const handleRemove = async() => { 
     await dispatch({ type: "Remove", index: props.index });
   }
  return (
    <>
      <div className="card my-3 mx-5 ">
        <div className="card-body" style={{ display: "flex", position: "relative" }} >
          <img src={props.food.img} alt="" style={{ height: "5rem", width: "5rem", borderRadius: "50%" }} />
          <table><tbody>
            <tr>
              <td> <h4 className="card-text mx-4 my-2">{props.food.name}</h4>
                <h6 className="card-text mx-4 my-2">Quantity : {props.food.qty}</h6></td>
            </tr></tbody></table>


          <div style={{ position: "absolute", right: "10px", top: "2rem" }} >
            <table><tbody>
              <tr>
                <td><h6 className="card-text mx-5 my-3"> Price : {props.food.price}</h6></td>
                <td><button type="button" className="btn btn-outline-danger " onClick={handleRemove}>
                <img src={del} alt="" /></button></td>
              </tr></tbody></table>
          </div>
        </div>
      </div>
    </>
  )
}
