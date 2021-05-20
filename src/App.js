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

  

  return (
    <div className="App">
    <div>
         <Navbar />
         <Search />
         <Switch>
           <Route exact path="/">
             <Homepage />
           </Route>
          <Route exact path="/meals">
             <MealsContainer/>
           </Route>
          <Route path="/meals/:id">
             <MealShowPage/>
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