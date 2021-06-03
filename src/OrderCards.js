import React, {useState} from 'react';

function OrderCards({order, removeDeleted, setPriceChange, priceChange}){
    const {id, meal, mealqty} = order
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
        <h4>{meal.name}</h4>
        <img src={meal.image} />
        <li>Price/ea:{`$${meal.price}.00`}</li> 
        <button onClick={handleQtyChange} name="subtract">-</button>
        <input type="text" value={orderQty}/>            
        <button onClick={handleQtyChange} name="add">+</button>

        <li>Item Subtotal: {`$${meal.price * orderQty}.00`}</li>
        <br></br>
        <button onClick={handleDelete} type="button" id="trashcanBtn" class="btn btn-danger"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
            <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
            </svg>
        </button>
        <br></br>
    </div>

)
}

export default OrderCards
