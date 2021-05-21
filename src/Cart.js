import React, {useEffect, useState} from 'react';
import OrderCards from './OrderCards';

function Cart(){
    const [currentCart, setCurrentCart] = useState({orders:[]})
    console.log(currentCart)

    useEffect(()=>{
      fetch('http://127.0.0.1:3000/carts/1')
      .then(r => r.json())
      .then(setCurrentCart)
      }, [])
  
      function removeDeleted(orderId){
          console.log("ORDER ID", orderId)
        const afterDelete = currentCart.orders.filter(order => {
            if (order.id !== orderId) {
              return order
            }
        })
        // console.log(afterDelete)
            setCurrentCart(currentCart => ({
                ...currentCart, 
                orders: afterDelete
            }))
        
      }

    const renderMeals= currentCart.orders ? currentCart.orders.map(order => ( <OrderCards removeDeleted={removeDeleted} order={order}/>)) : "Loading Orders"
   

    return(
        <div className="cartContainer">
            <h2>Here's What You've Ordered:</h2>
            <div className="cart">
                {renderMeals}
            </div>
        </div>
    )

}

export default Cart