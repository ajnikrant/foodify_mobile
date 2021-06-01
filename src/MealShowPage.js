import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'


function MealShowPage({cartIndex, sendNewOrderUp, setPriceChange, priceChange}){
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
            cart_id: Number(cartIndex), 
            mealqty: Number(mealQty),
            subtotal: Number(priceChange + (mealDetail.price * mealQty))
        }

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


        history.push(`/cart/${cartIndex}`)

    }

    return (
        <div className="showpage container">
            <div className="description row">
                <h2>{mealDetail.name}</h2>
                <br></br>
                <img src = {mealDetail.image} alt={mealDetail.description} />
                <div className="descriptionPrice">
                    <p>{mealDetail.description}</p>
                    <br></br>
                    <p>Price: ${mealDetail.price}</p>
                </div>
            </div>
            <div className="splitInfo row">
                <div className="col-sm-6">
                        <h5>Ingredients: </h5>
                    <p>{mealDetail.ingredients}</p>
                </div>
                <div className="col-sm-6">
                    <h5>Nutrition Info: </h5>
                        <p>Calories: {mealDetail.calories}</p>
                        <p>Carbs: {mealDetail.carbs}g</p>
                        <p>Protein: {mealDetail.protein}g</p>
                        <p>Fat: {mealDetail.fat}g</p>
                </div>
            </div>
                <button onClick={handleSubtractQty}>-</button>
                <input type="text" value={mealQty}/>            
                <button onClick={handleAddQty}>+</button>
            <br></br>
            <br></br>
            <button onClick={handleAddToCart}>Add to Cart</button>
        </div>
    )
}

export default MealShowPage