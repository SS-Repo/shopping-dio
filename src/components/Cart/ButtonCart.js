import React from "react";
import { useSelector } from "react-redux"; 

const ButtonCart = () => {
    const cart = useSelector( state => state.cart ); 

    if(cart.value > 0){
        localStorage.setItem('dioshopping:cart', JSON.stringify(cart))
    }
    
    return(
        <>
          <button type="button" className="button-cart" data-bs-toggle="modal" data-bs-target="#CartModal">
            <span><i className="fas fa-shopping-cart"></i></span>
            <span className="badge rounded-pill bg-info text-dark">
                { cart.value }
            </span>
         </button>
        </>
    )
}

export default ButtonCart;