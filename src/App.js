import './App.css';
import React, {useEffect, useState} from 'react';
import Homepage from './Homepage';
import MealsContainer from './MealsContainer';
import Navbar from './Navbar';
import Cart from './Cart';
import { Route, Switch, useHistory } from 'react-router-dom'
import Search from './Search';
import MealShowPage from './MealShowPage';



function App() {
      const [mealsArray, setMealsArray] = useState([])


    useEffect(()=>{
        fetch('http://127.0.0.1:3000/meals')
        .then(r => r.json())
        .then(setMealsArray)
    }, [])

    function sendHomePageCategory(category){
        console.log(category)
        const filteredMealsArray = mealsArray.filter(meal => meal.category == true)
        console.log(filteredMealsArray)
        // setMealsArray(filteredMealsArray)
    }
  

  return (
    <div className="App">
    <div>
         <Navbar />
         <Search />
         <Switch>
           <Route exact path="/">
             <Homepage sendHomePageCategory={sendHomePageCategory}/>
           </Route>
          <Route exact path="/meals">
             <MealsContainer mealsArray={mealsArray}/>
           </Route>
          <Route path="/meals/:id">
             <MealShowPage />
           </Route>
          <Route exact path="/cart/:id">
             <Cart />
           </Route>
       </Switch>
    </div>
    </div>
  );
}

export default App;


// putting test info here