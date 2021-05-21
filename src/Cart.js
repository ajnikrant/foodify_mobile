import React from 'react';
import CartCheckout from './CartCheckout';
import OrderCards from './OrderCards';

function Cart({currentCart, removeDeleted}){

    const renderMeals= currentCart.orders ? currentCart.orders.map(order => ( <OrderCards removeDeleted={removeDeleted} order={order}/>)) : "Loading Orders"
   console.log(currentCart.orders)

    return(
        <div className="cartContainer">
            <h2>Here's What You've Ordered:</h2>
            <div className="cart">
                {renderMeals}
            </div>
            <br></br>
            <br></br>
            <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Checkout</button>

                <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">Complete Checkout</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <CartCheckout />
                    </div>
                </div>
        </div>
    )

}

export default Cart