import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


function MealShowPage({sendNewOrderUp, setPriceChange, priceChange}){
    // const {description, id, image, ingredients, name, price} = meal
    const location = useLocation()
    const [mealDetail, setMealDetail] = useState(location.state.params)
    const [mealQty, setMealQty] = useState(1)
    const history = useHistory()


    function handleAddQty(){
        setMealQty(mealQty + 1)
    }
    function handleSubtractQty(){
        if (mealQty !== 1)
        {setMealQty(mealQty - 1)}
        else {return mealQty}
    }

    function handleAddToCart(){
        const newOrder={
            meal_id: Number(mealDetail.id),
            cart_id: Number(1), 
            mealqty: Number(mealQty),
            subtotal: Number(priceChange + (mealDetail.price * mealQty))
        }

        console.log(newOrder)
        fetch("http://localhost:3000/orders", {
            method: "POST", 
            headers: {
                'Accept': 'application/json',
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        .then(r => r.json())
        .then(sendNewOrderUp)

        setPriceChange(priceChange + (mealDetail.price * mealQty))


        history.push("/cart/1")

    }

    return (
        <div>
            <h4>{mealDetail.name}</h4>
            <img src = {mealDetail.image} alt={mealDetail.description} />
            <p>{mealDetail.description}</p>
            <p>Ingredients: {mealDetail.ingredients}</p>
            <p>${mealDetail.price}</p>
            <button onClick={handleSubtractQty}>-</button>
            <input type="text" value={mealQty}/>            
            <button onClick={handleAddQty}>+</button>
            <br></br>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default MealShowPage