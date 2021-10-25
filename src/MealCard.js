import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom'


function MealCard({meal, allergenSearch}){
    const {description, id, image, ingredients, name, price} = meal
    const [cardColor, setCardColor] = useState(false)
    const [showDescription, setShowDescription] = useState(false)

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
        }
        else {setCardColor(false)}
    }

    useEffect(()=> {
        highlightAllergens()
    }, [allergenSearch])    

    function handleHoverEnter(){
        setShowDescription(true)
    }

    function handleHoverLeave(){
        setShowDescription(false)
    }

    return(
        <div className={cardColor? "mealcard card text-white bg-danger mb-3" : "mealcard card text-dark bg-light mb-3"} style={{ width: '18rem' }} 
        onMouseLeave={handleHoverLeave} 
        onMouseEnter={handleHoverEnter} 
        onClick={handleCardClick}
        >
            <h4>{name}</h4>
            <p>{showDescription ? 
                <div className="mouseOverDesc">
                    <p>{description}</p>
                    <img className="mouseOverDescImage" src = {image} alt={description}/>
                </div> 
                : 
                <img className="menuCardImage" src = {image} alt={description}/>}
            </p>
            <p id="price"> ${price}</p>
            

        </div>
    )

}

export default MealCard
