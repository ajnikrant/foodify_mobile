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
      const [currentCart, setCurrentCart] = useState({orders:[]})
      const [mealPrice, setMealPrice] = useState(0)

      // const priceTimesQty = currentCart.orders&& currentCart.orders.map(order => (order.meal.price * order.mealqty))
      // setMealPrice(priceTimesQty)

  // ************ Menu Functions ************
    useEffect(()=>{
        fetch('http://127.0.0.1:3000/meals')
        .then(r => r.json())
        .then(setMealsArray)
    }, [])


    
    // ************Cart Functions ************
    useEffect(()=>{
      fetch('http://127.0.0.1:3000/carts/1')
      .then(r => r.json())
      .then(setCurrentCart)
      }, [])
  

      function removeDeleted(orderId){
        const afterDelete = currentCart.orders.filter(order => {
            if (order.id !== orderId) {
              return order
            }
        })
            setCurrentCart(currentCart => ({
                ...currentCart, 
                orders: afterDelete
            }))
      }

      function sendNewOrderUp(newOrder){
        setCurrentCart({...currentCart, 
          orders: [...currentCart.orders, newOrder]})
      }

  
      const[priceChange, setPriceChange] = useState(0)

 // ************ HomePage Functions ************
      function sendHomePageCategory(category){
        console.log(category)
        const filteredMealsArray = mealsArray.filter(meal => meal.category == true)
        // console.log(filteredMealsArray)
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
             <MealShowPage setPriceChange={setPriceChange} priceChange={priceChange} sendNewOrderUp={sendNewOrderUp}/>
           </Route>
          <Route exact path="/cart/:id">
             <Cart priceChange={priceChange} setPriceChange={setPriceChange} mealPrice={mealPrice} currentCart={currentCart} removeDeleted={removeDeleted}/>
           </Route>
       </Switch>
    </div>
    </div>
  );
}

export default App;


// putting test info here