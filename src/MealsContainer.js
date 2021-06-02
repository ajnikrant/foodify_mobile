import React, {useEffect, useState} from 'react';
import Filter from './FIlter';
import MealCard from './MealCard';

function MealsContainer({mealsArray, setHomepageCategory, search, setSearch, allergenSearch, setAllergenSearch}){

    const renderMeals = mealsArray.map((meal) => <MealCard allergenSearch={allergenSearch} key={meal.id} meal={meal} />)

    return(
       <div className="mealsContainer container">
        <div className="row ">
           <div className="filter col-md-3" >
            <Filter 
            allergenSearch={allergenSearch} 
            setAllergenSearch={setAllergenSearch} 
            setHomepageCategory={setHomepageCategory} 
            search={search} 
            setSearch={setSearch}
            />
           </div>
           <div className="mealCardContainer col-md-9">
            {renderMeals}
           </div>
        </div>
        </div>
    )

}

export default MealsContainer