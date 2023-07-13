import React, { createContext, useContext, useReducer } from 'react';
const cartState = createContext();
const cartDispatch = createContext();


const reducer = (state, action) => {
    switch (action.type) {
        case "Add":
            let Item = [...state, { id: action.id, name: action.name, price: action.price, qty: action.qty, img: action.img ,date:action.img}];
            localStorage.setItem("foodCart",JSON.stringify(Item));
            return Item;
        case "Remove":
            let newItem = [...state]
            newItem.splice(action.index, 1);
            localStorage.setItem("foodCart",JSON.stringify(newItem));
            return newItem
        case "Drop":
            let x=[];
            localStorage.setItem("foodCart",JSON.stringify(x));
            return x
        default:
            return console.log("reducer error");
    }
}
export const CartProvider = ({ children }) => {
    const car=JSON.parse(localStorage.getItem("foodCart"))||"";
    const [state, dispatch] = useReducer(reducer, [...car]);
    return (
        <cartDispatch.Provider value={dispatch}>
            <cartState.Provider value={state}>
                {children}
            </cartState.Provider>
        </cartDispatch.Provider>
    )
}

export const useCart = () => useContext(cartState)
export const useDispatchCart = () => useContext(cartDispatch)