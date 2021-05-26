import React, {useState, useEffect} from 'react';

function PreviousPurchases({cart}){
    const {subtotal, orders} =cart
    const renderOrderDetails = orders.map(order => {
      return ( 
       <div className= "prevOrderCard" >
            <p>{order.meal.name}</p>
            <p>Quantity: {order.mealqty}</p>
            <p>Price/ea: {order.meal.price}</p>
            <img src={order.meal.image}/>
        </div>
        )
        })
    const randomMonth = (Math.floor(Math.random() * (12 - 1)) + 1)
    const randomDay = (Math.floor(Math.random() * (25 - 1)) + 1)

    return (
        <div className="previous-purchase">
           {`${cart.id})`} Date Purchased: {randomMonth}/{randomDay}/2020 
           <br></br>
           <br></br>
           Total: {`$${(subtotal).toFixed(2)}`}
           <br></br>
           <br></br>
          {renderOrderDetails}
          <hr></hr>
        </div>
    )
}

export default PreviousPurchases