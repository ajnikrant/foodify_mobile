import React, {useEffect, useState} from 'react';
import Filter from './FIlter';
import MealCard from './MealCard';

function MealsContainer({mealsArray, setHomepageCategory, search, setSearch, allergenSearch, setAllergenSearch}){

    const renderMeals = mealsArray.map((meal) => <MealCard allergenSearch={allergenSearch} key={meal.id} meal={meal} />)

    return(
       <div className="mealcontainer">
            <Filter allergenSearch={allergenSearch} setAllergenSearch={setAllergenSearch} setHomepageCategory={setHomepageCategory} search={search} setSearch={setSearch}/>
            {renderMeals}
           
        </div>
    )

}

export default MealsContainer