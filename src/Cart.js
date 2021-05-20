import React, {useEffect, useState} from 'react';

function Cart(){
    const [currentCart, setCurrentCart] = useState({orders:[]})

    useEffect(()=>{
      fetch('http://127.0.0.1:3000/carts/1')
      .then(r => r.json())
      .then(setCurrentCart)
      }, [])
  

    console.log("CART",currentCart)
    console.log("orders",currentCart.orders)
    // console.log("meals",currentCart.meals)

    // const renderMealOrders = currentCart.map(cart => cart.orders)


    const renderMeals= currentCart.orders.map(order => {return (
        <>
        <br></br>
        <li>{[order.meal.name]}</li>
        <li>Price/ea:{[`$${order.meal.price}`]}</li> 
        <li>Quantity:{[order.mealqty]}</li>
        <li>Subtotal:{[`$${order.meal.price * order.mealqty}`]}</li>
        <br></br>
        </>
        )}
    )
   


    return(
        <div className="cart">
           <h2>Here's What You've Ordered:</h2>
           <ul>
            {currentCart.orders ? renderMeals : "looks like you haven't placed an order"}
           </ul>
        </div>
    )

}

export default Cart