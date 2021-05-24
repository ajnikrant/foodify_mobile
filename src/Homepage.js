import React from 'react';
import { useHistory } from 'react-router-dom'


function Homepage({setHomepageCategory}){
    const history = useHistory()


    function handleHomePageClick(e){
        setHomepageCategory(e.target.alt)
        history.push("/meals")

    }

    return (
        <div className="homepage">
        <h2>Welcome to  Foodify </h2>
        <h3>Eat Healthy. Live Happy</h3>
        <div className="homepage-image-container">
            <div className="homepage-category" >
                <img onClick={handleHomePageClick} src="https://eatmightymeals.com/wp-content/uploads/2021/02/crusted_tuna.png" alt="all" />
                <h4>Browse All Meals</h4>
            </div>
            <div className="homepage-category" >
                <img onClick={handleHomePageClick} src="https://eatmightymeals.com/wp-content/uploads/2021/04/steak_rancheros.png" alt="lowcarb" />
                <h4>Low Carb Options</h4>
            </div>
            <div className="homepage-category" >
                <img onClick={handleHomePageClick} src="https://eatmightymeals.com/wp-content/uploads/2021/03/coconut_curry.png" alt="vegetarian"/>
                <h4>Vegetarian Options</h4>
            </div>
            <div className="homepage-category" >
                <img onClick={handleHomePageClick} src="https://eatmightymeals.com/wp-content/uploads/2021/01/Turkey-Bolognese-Stuffed-Pepper.png" alt="glutenfree"/>
                <h4>Gluten Free Options</h4>
            </div>
            <div className="homepage-category" >
                <img onClick={handleHomePageClick} src="https://eatmightymeals.com/wp-content/uploads/2020/09/web__0001_Tofu-Poke-Bowl.png" alt="lowcal"/>
                <h4>Meals under 500 calories</h4>
            </div>
        </div>
        </div>
    )
}

export default Homepage