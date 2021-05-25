import React, {useState, useEffect} from 'react';
import CartCheckout from './CartCheckout';
import EmptyCartMesage from './EmptyCartMessage';
import OrderCards from './OrderCards';
import { useHistory } from 'react-router-dom'


function Cart({currentCart, removeDeleted, priceChange, setPriceChange}){
    const [checkedOut, setCheckedOut] = useState(true)
    const history = useHistory()
    
    console.log("database subtotal",currentCart.subtotal)
    console.log("checked out",currentCart.checkedout)

    const renderMeals= currentCart.orders ? currentCart.orders.map(order => ( <OrderCards key={order.id} priceChange={priceChange} setPriceChange={setPriceChange} removeDeleted={removeDeleted} order={order}/>)) : "Loading Orders"
    let priceTimesQty = currentCart.orders ? currentCart.orders.map(order => order.meal.price * order.mealqty).reduce(function(a, b){return a + b;}, 0) : 0

     useEffect(()=>{
        setPriceChange(priceTimesQty)
    },[currentCart.orders])

    function handleCheckout(e, finalTotal){
        // e.preventDefault()
        // console.log(currentCart.orders[0].meal.id)
        setCheckedOut(false)
        
        let total= parseFloat(finalTotal)

        fetch(`http://localhost:3000/carts/1`, {
            method: "PATCH", 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({checkedout: true, subtotal: total})
        })

        // currentCart.orders.map(order => {
        //     fetch(`http://localhost:3000/orders/${order.id}`, {
        //     method: 'DELETE'
        // })
        // setPriceChange(priceChange - (order.meal.price * order.mealqty))
        // removeDeleted(order.id)
        // })
    }

    function handleClick(){
        history.push("/meals")
    }

    

    return(
        <div className="cartContainer">
            <h2>Here's What You've Ordered:</h2>
       
        {checkedOut?  
                <>
                <div className="cart">
                    {renderMeals}
                </div>
                <br></br>
                <div className="price-section">
                Subtotal: {`$${priceChange}.00`}
                </div>
                <br></br>
                <button onClick={handleClick} className="btn btn-primary">Back to Menu</button>
                <br></br>
                <br></br>
                <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">Checkout</button>

                    <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                        <div className="offcanvas-header">
                            <h5 id="offcanvasRightLabel">Complete Checkout</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <CartCheckout handleCheckout={handleCheckout} priceChange={priceChange}/>
                        </div>
                    </div>
                </>
            : <EmptyCartMesage setCheckedOut={setCheckedOut}/>}
        </div>
    )

}

export default Cart