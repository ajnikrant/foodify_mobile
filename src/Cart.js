import React, {useState, useEffect} from 'react';
import CartCheckout from './CartCheckout';
import EmptyCartMesage from './EmptyCartMessage';
import OrderCards from './OrderCards';
import { useHistory } from 'react-router-dom'
import PreviousPurchases from './PreviousPurchases';


function Cart({userCarts, cartIndex, currentCart, removeDeleted, priceChange, setPriceChange}){
    const [checkedOut, setCheckedOut] = useState(true)
    const history = useHistory()
    
    const renderMeals= currentCart.orders.length > 0 ? currentCart.orders.map(order => ( <OrderCards key={order.id} priceChange={priceChange} setPriceChange={setPriceChange} removeDeleted={removeDeleted} order={order}/>)) : "Looks Like your Cart is Empty"
    let priceTimesQty = currentCart.orders ? currentCart.orders.map(order => order.meal.price * order.mealqty).reduce(function(a, b){return a + b;}, 0) : 0

    const renderPreviousPurchases = userCarts.filter(cart => cart.checkedout===true).map(cart => <PreviousPurchases key={cart.id} cart={cart}/>)

    console.log("curent cart",currentCart.id)
    console.log("user cart state",userCarts)
    console.log("filter",renderPreviousPurchases)


     useEffect(()=>{
        setPriceChange(priceTimesQty)
    },[currentCart.orders])

    function handleCheckout(e, finalTotal){
        // e.preventDefault()
        // console.log(currentCart.orders[0].meal.id)
        setCheckedOut(false)
        
        let total= parseFloat(finalTotal)

        fetch(`http://localhost:3000/carts/${cartIndex}`, {
            method: "PATCH", 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({checkedout: true, subtotal: total})
        })
        
            const newCart ={
                user_id: 1,
                checkedout: false, 
                subtotal: 0
            }

            fetch("http://localhost:3000/carts", {
                method: "POST", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify(newCart)
            })
            .then(r => r.json())
            .then(console.log)
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
                <button onClick={handleClick} className="btn btn-primary">Go to Menu</button>
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
            <div className="previousP container">
                <h5>Previous Purchases</h5>
                {renderPreviousPurchases}
            </div>
        </div>
    )

}

export default Cart