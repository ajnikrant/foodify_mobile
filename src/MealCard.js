import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'


function MealCard({meal}){
    const {description, id, image, ingredients, name, price} = meal
    const history = useHistory()


    function handleCardClick(){
        history.push(`/meals/${id}`, { params: meal })

    }

    return(
        <div className="card" onClick={handleCardClick}>
            <h4>{name}</h4>
            <img src = {image} alt={description} />
            <p>{description}</p>
            <p>${price}</p>

        </div>
    )

}

export default MealCard