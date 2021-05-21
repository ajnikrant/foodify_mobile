import React, {useEffect, useState} from 'react';
import Filter from './FIlter';
import MealCard from './MealCard';

function MealsContainer({mealsArray}){

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