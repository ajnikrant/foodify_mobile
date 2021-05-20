import React, {useEffect, useState} from 'react';
import { Route, Switch, useHistory } from 'react-router-dom'
import MealCard from './MealCard';
import MealsContainer from './MealsContainer';
import Navbar from './Navbar';


function Homepage(){


    return (
        <div className="homepage">
        <h2>Welcome to  Foodify </h2>
        <h3>Eat Healthy. Live Happy</h3>
        <div className="homepage-image-container">
            <div className="homepage-category" >
                <h4>Low Carb Options</h4>
                <img src="https://eatmightymeals.com/wp-content/uploads/2021/04/steak_rancheros.png" alt="low carb option" />
            </div>
            <div className="homepage-category" >
                <h4>Vegetarian Options</h4>
                <img src="https://eatmightymeals.com/wp-content/uploads/2021/03/coconut_curry.png" alt="vegetarian option"/>
            </div>
            <div className="homepage-category" >
                <h4>Gluten Free Options</h4>
                <img src="https://eatmightymeals.com/wp-content/uploads/2021/01/Turkey-Bolognese-Stuffed-Pepper.png" alt="glutenfree option"/>
            </div>
            <div className="homepage-category" >
                <h4>Meals under 500 calories</h4>
                <img src="https://eatmightymeals.com/wp-content/uploads/2020/09/web__0001_Tofu-Poke-Bowl.png" alt="under 500 Cals"/>
            </div>
        </div>
        </div>
    )
}

export default Homepage