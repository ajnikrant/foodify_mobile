import React, {useEffect, useState} from 'react';
import OrderCards from './OrderCards';

function Cart({currentCart, removeDeleted}){

    const renderMeals= currentCart.orders ? currentCart.orders.map(order => ( <OrderCards removeDeleted={removeDeleted} order={order}/>)) : "Loading Orders"
   

    return(
        <div className="cartContainer">
            <h2>Here's What You've Ordered:</h2>
            <div className="cart">
                {renderMeals}
            </div>
            <br></br>
            <br></br>
            <button>Checkout</button>
        </div>
    )

}

export default Cart