import React, {useState, useEffect} from 'react';
import CartCheckout from './CartCheckout';
import OrderCards from './OrderCards';
// import { useEffect } from 'react';

function Cart({currentCart, removeDeleted, priceChange, setPriceChange}){
    
    const renderMeals= currentCart.orders ? currentCart.orders.map(order => ( <OrderCards priceChange={priceChange} setPriceChange={setPriceChange} removeDeleted={removeDeleted} order={order}/>)) : "Loading Orders"
    let priceTimesQty = currentCart.orders ? currentCart.orders.map(order => order.meal.price * order.mealqty).reduce(function(a, b){return a + b;}, 0) : 0

     useEffect(()=>{
         
        setPriceChange(priceTimesQty)
  
    },[currentCart.orders])
    // setPriceChange(priceTimesQty)
    // console.log(mealPrice)

    return(
        <div className="cartContainer">
            <h2>Here's What You've Ordered:</h2>
            <div className="cart">
                {renderMeals}
            </div>
            <br></br>
            <div className="price-section">
            Subtotal: {`$${priceChange}`}
            </div>
            <br></br>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Checkout</button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Complete Checkout</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <CartCheckout priceChange={priceChange}/>
                    </div>
                </div>
        </div>
    )

}

export default Cart