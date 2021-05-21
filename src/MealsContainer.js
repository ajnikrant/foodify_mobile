import React, {useEffect, useState} from 'react';
import Filter from './FIlter';
import MealCard from './MealCard';

function MealsContainer({mealsArray}){
    // const [mealsArray, setMealsArray] = useState([])


    // useEffect(()=>{
    //     fetch('http://127.0.0.1:3000/meals')
    //     .then(r => r.json())
    //     .then(setMealsArray)
    // }, [])

    // function sendHomePageCategory(data){
    //     console.log(data)
    // }


    const renderMeals = mealsArray.map((meal) => <MealCard key={meal.id} meal={meal} />)

    return(
       <div className="mealcontainer">
            Hey, this is the meals container
            <Filter />
            {renderMeals}
        </div>
    )

}

export default MealsContainer