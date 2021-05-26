import React, {useState, useEffect} from 'react';

function PreviousPurchases({cart}){
    const {subtotal, orders} =cart

    console.log("cart in prev cart",orders[0].mealqty)
    const renderOrders = orders.map(order => order.mealqty).reduce(function(a, b){return a + b;}, 0)

    return (
        <div className="previous-purchase">
            <h5>Previous Purchases</h5>
           Amount Paid: {`$${(subtotal).toFixed(2)}`}
           <br></br>
          Total Meals Ordered: {renderOrders}
        </div>
    )
}

export default PreviousPurchases