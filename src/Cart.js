import React, {useEffect, useState} from 'react';

function Cart(){
    const [currentCart, setCurrentCart] = useState({meals:[]})

    useEffect(()=>{
      fetch('http://127.0.0.1:3000/carts/1')
      .then(r => r.json())
      .then(setCurrentCart)
      }, [])
  

    console.log("CART",currentCart)
    console.log("orders",currentCart.orders)
    console.log("meals",currentCart.meals)

    const renderMealOrders = currentCart.map(cart => cart.orders)


    const renderMeals= currentCart.meals.map(meal => {return (
        <>
        <br></br>
        <li>{[meal.name]}</li>
        <li>{[`$${meal.price}`]}</li> 
        <br></br>
        </>
        )}
    )
   


    return(
        <div className="cart">
           <h2>Here's What You've Ordered:</h2>
           <ul>
            {currentCart.meals ? renderMeals : "looks like you haven't placed an order"}
           </ul>
        </div>
    )

}

export default Cart