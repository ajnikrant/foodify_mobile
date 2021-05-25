import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'


function MealCard({meal, allergenSearch}){
    const {description, id, image, ingredients, name, price} = meal
    const [cardColor, setCardColor] = useState(false)

    const history = useHistory()


    function handleCardClick(){
        history.push(`/meals/${id}`, { params: meal })

    }

   
    function highlightAllergens(){

        if (allergenSearch === ""){
            setCardColor(false)
        }

        else if (ingredients.toLowerCase().includes(allergenSearch.toLowerCase())){
                setCardColor(true)
                console.log(allergenSearch)
                console.log("allergen search in meal card", allergenSearch)
                
        }
        else {setCardColor(false)}
    }

    useEffect(()=> {
        highlightAllergens()
    }, [allergenSearch])    

    return(
        <div className={cardColor? "card text-white bg-danger mb-3" : "card text-dark bg-light mb-3"} style={{ width: '18rem' }} onClick={handleCardClick}>
            <h4>{name}</h4>
            <img src = {image} alt={description} />
            <p>{description}</p>
            <p>${price}</p>
            

        </div>
    )

}

export default MealCard