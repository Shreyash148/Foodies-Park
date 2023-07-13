import React, { useState } from 'react'
import { useDispatchCart } from './ContextReducer';

export default function Card(props) {
    let dispatch = useDispatchCart();
    const [qty, setQty] = useState(1);
    const handleCart = async () => {
        await dispatch({ type: "Add", id: props.item._id, name: props.item.name, price: finalPrice, qty: qty, img: props.item.img })
    }
    let finalPrice = props.item.price * qty;
    return (
        <>
            <div className="card" style={{ width: "18rem" }}>
                <img src={props.item.img} className="card-img-top" alt="..." style={{ height: "10rem" }} />
                <div className="card-body">
                    <h5 className="card-title">{props.item.name}</h5>
                    <p className="card-text">Rs.{finalPrice}</p>
                    <label htmlFor="Quantity" className="card-text">Quantity : </label>
                    {props.type!=="order"?<>
                    <select name="Quantity" className="bg-warning border-light border-4 px-2 mx-2 rounded-pill text-light" onChange={(e) => setQty(e.target.value)}>
                        {Array.from(Array(7), (obj, i) => {
                            return <option key={i} value={i + 1}>{i + 1}</option>
                        })}
                    </select>
                    <hr />
                    <div className="btn btn-warning text-light" onClick={handleCart}>Add to Cart</div>
                    </>:<>
                    <label name="Quantity" className='px-2'>{props.item.qty}</label></>}
                </div>
            </div>
        </>
    )
}
