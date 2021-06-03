import React, {useState} from 'react';
import { useLocation } from 'react-router-dom'
import { useHistory } from 'react-router-dom'

function MealShowPage({cartIndex, sendNewOrderUp, setPriceChange, priceChange}){
    const location = useLocation()
    const [mealDetail, setMealDetail] = useState(location.state.params)
    const [showAlert, setShowAlert] = useState(false)
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

        window.scrollTo({
            top: 0, 
            left: 0, 
            behavior: 'smooth'
            });

            setTimeout(() => {
                setShowAlert(true)
            }, 500);

            setTimeout(() => {
                setShowAlert(false)
            }, 3000);
    }

    function handleAlertClick(){
        setShowAlert(false)
    }

    function handleMenuClick(){
        history.push(`/meals`)

    }

    return (
        <div className="showpage container">
          { showAlert && <div className="alert alert-success show" role="alert" onClick={handleAlertClick}>
                This item was successfully added to your cart  
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> 
                </svg> 
            </div> 
        }
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
            <button className="btn btn-warning" onClick={handleAddToCart}>Add to Cart</button>
            <br></br>
            <br></br>
            <button className="btn btn-info" onClick={handleMenuClick}>Back to Menu</button>
        </div>
    )
}

export default MealShowPage