import './App.css';
import React, {useEffect, useState} from 'react';
import Homepage from './Homepage';
import MealsContainer from './MealsContainer';
import Navbar from './Navbar';
import Cart from './Cart';
import { Route, Switch, useHistory } from 'react-router-dom'
import MealShowPage from './MealShowPage';
import Banner from './Banner';
import PrevPurchContainer from './PrevPurchContainer';
import About from './About';



function App() {
      const [mealsArray, setMealsArray] = useState([])
      const [currentCart, setCurrentCart] = useState({orders:[]})
      const[priceChange, setPriceChange] = useState(0)
      const [homepageCategory, setHomepageCategory] = useState('all')
      const [search, setSearch] = useState("")
      const [allergenSearch, setAllergenSearch] = useState("")
      const [cartIndex, setCartIndex] = useState(1)
      const [userCarts, setUserCarts] = useState([])



  // ************ Menu Functions ************
    useEffect(()=>{
        fetch('http://127.0.0.1:3000/meals')
        .then(r => r.json())
        .then(setMealsArray)
    }, [])


  // ************ Fetching User ************
    useEffect(()=>{
        fetch('http://127.0.0.1:3000/users/1')
        .then(r => r.json())
        .then(handleUserFetch)
      }, [currentCart.orders])

      function handleUserFetch(user){
        setUserCarts(user.carts)
        setCartIndex(user.carts.length)
      }
    
    // ************Cart Functions ************
    useEffect(()=>{
      fetch(`http://127.0.0.1:3000/carts/${cartIndex}`)
      .then(r => r.json())
      .then(setCurrentCart)
      }, [cartIndex])
  

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
        <Banner />
         <Navbar currentCart={currentCart}/>
         <Switch>
           <Route exact path="/">
             <Homepage setHomepageCategory={setHomepageCategory}/>
           </Route>
          <Route exact path="/meals">
             <MealsContainer allergenSearch={allergenSearch} 
              setAllergenSearch={setAllergenSearch} search={search} 
              setSearch={setSearch} 
              setHomepageCategory={setHomepageCategory} 
              mealsArray={homepageFiltering()}/>
           </Route>
          <Route path="/meals/:id">
             <MealShowPage 
             cartIndex={cartIndex} 
             setPriceChange={setPriceChange} 
             priceChange={priceChange} 
             sendNewOrderUp={sendNewOrderUp}/>
           </Route>
          <Route exact path="/cart/:id">
             <Cart
             setCurrentCart={setCurrentCart}
             userCarts={userCarts}
             cartIndex={cartIndex}
             priceChange={priceChange} 
             setPriceChange={setPriceChange} 
             currentCart={currentCart} 
             removeDeleted={removeDeleted}/>
           </Route>
          <Route exact path="/carts/completed">
             <PrevPurchContainer userCarts={userCarts}/>
           </Route>
          <Route exact path="/about">
             <About />
           </Route>
       </Switch>
    </div>
    </div>
  );
}

export default App;


// putting test info here