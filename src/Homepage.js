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
        </div>
    )
}

export default Homepage