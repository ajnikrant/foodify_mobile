import React from 'react';
import { useHistory } from 'react-router-dom'
import justLogoIcon from './assets/justLogoIcon.png'



function Homepage({setHomepageCategory}){
    const history = useHistory()


    function handleHomePageClick(e){
        setHomepageCategory(e.target.alt)
        history.push("/meals")

    }

    function handleClick(){
        setHomepageCategory("all")
        history.push("/meals")
    }

    return (
        <div className="homepage">
            <img className='homepageIcon' src={justLogoIcon}/>
            <h1>Welcome to  Foodify </h1>
            <br></br>
            <br></br>
            <h3>Hand-Prepared Healthy Meals Delivered Fresh to You!</h3>
            <br></br>
            <br></br>

            <iframe src="https://www.youtube.com/embed/exXdcVE0nQA?rel=0&amp;autoplay=1&mute=1&loop=1" width="950" height="515" frameborder="0" allowfullscreen></iframe>
            <br></br>
            <br></br>
            <div className="container">
                <div className="homepage-image-container">
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
                    {/* </div> */}
                    <br></br>
                    <br></br>
                        <button type="button" className="btn btn-primary btn-lg" onClick={handleClick}> See Full Menu </button>
                </div>
            </div>
        </div>
    )
}

export default Homepage