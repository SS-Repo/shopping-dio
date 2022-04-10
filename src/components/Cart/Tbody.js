import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import cartActions from "../store/actions/cart";

const Tbody = () =>{
    const cart = useSelector( state => state.cart ); 
    const dispatch = useDispatch();

    let totalPrice = 0;

    if(cart.value > 0){
       for(let i = 0; i < cart.Cart.length; i++){
           totalPrice += cart.Cart[i].price * cart.Cart[i].quantity;
       }
    }
    
    return(
        <>
         <tbody>
            {cart.Cart.map(item => {
                return(
                    <tr key={item.id}>
                        <th>
                            <button 
                                onClick={() =>dispatch(cartActions.DeleteItem(cart ,item))}
                                className="badge bg-danger">
                                <i className="fas fa-window-close">
                                </i>
                            </button>
                        </th>
                        <th><img className="img-fluid img-thumbnail" src={item.image} alt={item.Name} width="50px"/></th>
                        <th>
                            <span className="badge badge-pill bg-warning">
                                {item.quantity}
                            </span>
                         </th>
                         <th>R$ {item.price.toFixed(2)}</th>
                        <th>
                            <button 
                                onClick={() =>dispatch(cartActions.AddItem(cart, item))}   
                                className="badge badge-pill bg-primary">
                                <i className="fas fa-plus"></i>
                            </button>
                        </th>
                        <th>
                            <button 
                                onClick={() => dispatch(cartActions.RemoveItem(cart, item))}
                                className="badge badge-pill bg-danger">
                                <i className="fas fa-minus">
                                </i>
                            </button>
                        </th>
                        <th>R$ {(item.price * item.quantity).toFixed(2)}</th>
                    </tr>
                )
            })}
         <tr>
             <th colSpan="2" scope="col">Total</th>
             <th colSpan="3">{ cart.value } itens</th>
             <th colSpan="2">R$ {totalPrice.toFixed(2)}</th>
         </tr>
         </tbody>
        </>
    )
}

export default Tbody;