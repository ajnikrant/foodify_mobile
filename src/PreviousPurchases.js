import React, {useState, useEffect} from 'react';

function PreviousPurchases({cart}){
    const {subtotal, orders} =cart
    const renderOrders = orders.map(order => order.mealqty).reduce(function(a, b){return a + b;}, 0)

    return (
        <div className="previous-purchase">
           {`${cart.id})`}  Amount Paid: {`$${(subtotal).toFixed(2)}`}
           <br></br>
          Total Meals Ordered: {renderOrders}
        </div>
    )
}

export default PreviousPurchases