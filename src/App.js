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
      // const [mealPrice, setMealPrice] = useState(0)
      const[priceChange, setPriceChange] = useState(0)
      const [homepageCategory, setHomepageCategory] = useState('all')
      const [search, setSearch] = useState("")
      const [allergenSearch, setAllergenSearch] = useState("")
      // const [cardColor, setCardColor] = useState(false)


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

  

 // ************ HomePage Functions ************
      function homepageFiltering(){
        if (homepageCategory === "glutenfree"){
          const filteredMenu = mealsArray.filter(meal => meal.glutenfree === true)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
          // .filter((meal) => {
          //   if (meal.ingredients.toLowerCase().includes(allergenSearch.toLowerCase())){
          //     setCardColor(true)
          //     return meal
          //   }
          //   else {return meal}
          // })
             return (filteredMenu)
        }
        else if (homepageCategory === "vegetarian"){
          const filteredMenu = mealsArray.filter(meal => meal.vegetarian === true)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
             return (filteredMenu)
        }
        else if (homepageCategory === "lowcarb"){
          const filteredMenu = mealsArray.filter(meal => meal.lowcarb === true)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
             return (filteredMenu)
        }
        else if (homepageCategory === "lowcal"){
          const filteredMenu = mealsArray.filter(meal => meal.calories < 500)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
             return (filteredMenu)
        }
        else if (homepageCategory === "all"){
          const filteredMenu = mealsArray.filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
          return (filteredMenu)
        }
        else if (homepageCategory === "vegan"){
          const filteredMenu = mealsArray.filter(meal => meal.vegan=== true)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
             return (filteredMenu)
        }
        else if (homepageCategory === "dairyfree"){
          const filteredMenu = mealsArray.filter(meal => meal.dairyfree=== true)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
             return (filteredMenu)
        }
        else if (homepageCategory === "pescatarian"){
          const filteredMenu = mealsArray.filter(meal => meal.pescatarian=== true)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
             return (filteredMenu)
        }
        else if (homepageCategory === "lowsodium"){
          const filteredMenu = mealsArray.filter(meal => meal.lowsodium=== true)
          .filter((meal) => meal.ingredients.toLowerCase().includes(search.toLowerCase()))
             return (filteredMenu)
        }
        else if (homepageCategory === "keto"){
          const filteredMenu = mealsArray.filter(meal => meal.keto=== true)
          .filter((meal) => (meal.ingredients.toLowerCase().includes(search.toLowerCase())))
             return (filteredMenu)
        }

    }

  return (
    <div className="App">
    <div>
         <Navbar />
         <Search />
         <Switch>
           <Route exact path="/">
             <Homepage setHomepageCategory={setHomepageCategory}/>
           </Route>
          <Route exact path="/meals">
             <MealsContainer allergenSearch={allergenSearch} setAllergenSearch={setAllergenSearch} search={search} setSearch={setSearch} setHomepageCategory={setHomepageCategory} mealsArray={homepageFiltering()}/>
           </Route>
          <Route path="/meals/:id">
             <MealShowPage setPriceChange={setPriceChange} priceChange={priceChange} sendNewOrderUp={sendNewOrderUp}/>
           </Route>
          <Route exact path="/cart/:id">
             <Cart priceChange={priceChange} setPriceChange={setPriceChange} currentCart={currentCart} removeDeleted={removeDeleted}/>
           </Route>
       </Switch>
    </div>
    </div>
  );
}

export default App;


// putting test info here