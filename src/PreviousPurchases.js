import React, {useState, useEffect} from 'react';

function PreviousPurchases({cart}){
    const {subtotal, orders} =cart

    const renderOrderDetails = orders.map(order => {
      return ( 
       <div className= "prevOrderCard" >
               <div className=" col-sm-2">
                <p>{order.meal.name}</p>
               </div>
                <p>Quantity: {order.mealqty}</p>
                <p>Price/ea: {order.meal.price}</p>
                <img src={order.meal.image}/>
        </div>
        )
        })


    return (
        
        <div className="previous-purchase">
            <div className="container">
            <div className="row">
            <div className=" col-sm-2">
                {`${cart.id})`} Completed On: 
                <br></br>
                <br></br>
                {cart.datePurchased}
                <br></br>
                <br></br>
                 {/* Total: {`$${(subtotal).toFixed(2)}`} */}
            </div>

            <div className=" col-sm-8">
                {renderOrderDetails}
            </div>
            <div className=" col-sm-2">
                Total: {`$${(subtotal).toFixed(2)}`}
            </div>
            <hr></hr>
            </div>
          </div>
        </div>
    )
}

export default PreviousPurchases