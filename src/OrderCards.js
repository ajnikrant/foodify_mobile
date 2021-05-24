import React, {useState} from 'react';

function OrderCards({order, removeDeleted, setPriceChange, priceChange}){
    const {id, meal_id, meal, mealqty, image} = order
    const [orderQty, setOrderQty] = useState(mealqty)

    function handleQtyChange(e){
        if (e.target.name === "add"){
            setOrderQty(orderQty + 1)
            setPriceChange(priceChange + meal.price)

            fetch(`http://localhost:3000/orders/${id}`, {
                method: "PATCH", 
                headers: {
                    'Accept': 'application/json',
                    'Content-Type' : 'application/json'
                },
                body: JSON.stringify({mealqty: orderQty+1,})
            })

        }
        if(e.target.name === "subtract"){
            if (orderQty !== 1){
                setOrderQty(orderQty-1)
                setPriceChange(priceChange - (meal.price))


            }
            else {setOrderQty(1)}
        
        fetch(`http://localhost:3000/orders/${id}`, {
            method: "PATCH", 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({mealqty: orderQty-1})
        })
        }
    }


    function handleDelete(){
        fetch(`http://localhost:3000/orders/${id}`, {
            method: 'DELETE'
        })
        setPriceChange(priceChange - (meal.price * orderQty))
        removeDeleted(id)
    }

return(
    <div className="orderCards">
        <br></br>
        <h6>{meal.name}</h6>
        <img src={meal.image} />
        <li>Price/ea:{`$${meal.price}`}</li> 

        {/* <li>Quantity:{mealqty}</li> */}

        <button onClick={handleQtyChange} name="subtract">-</button>
        <input type="text" value={orderQty}/>            
        <button onClick={handleQtyChange} name="add">+</button>

        <li>Item Subtotal: {`$${meal.price * orderQty}`}</li>
        <br></br>
        <button onClick={handleDelete}>X</button>
        <br></br>
    </div>

)
}

export default OrderCards
