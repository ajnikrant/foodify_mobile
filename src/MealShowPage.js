import React, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom'


function MealShowPage(){
    // const {description, id, image, ingredients, name, price} = meal
    const location = useLocation()
    const [mealDetail, setMealDetail] = useState(location.state.params)

    return (
        <div>
            <h4>{mealDetail.name}</h4>
            <img src = {mealDetail.image} alt={mealDetail.description} />
            <p>{mealDetail.description}</p>
            <p>Ingredients: {mealDetail.ingredients}</p>
            <p>${mealDetail.price}</p>
        </div>
    )
}

export default MealShowPage