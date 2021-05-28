import React from 'react';
import propic_small from './assets/propic_small.png'


function About(){
    return(
        <div className="container">
            <h1>About Foodify</h1>
            <p>Foodify is where hand-prepared healthy meals are delivered fresh to you! In a world where time is short and healthy meal options can be difficult to find, 
                Foodfy strives to provide healthy options with the convenience of delivery. As food sensitivities and allergies skyrocket across the United States, 
                Foodify provides filtering options to help highlight meals containing ingredients that should be avoided. 
            </p>
            <br></br>
            <br></br>
            <h1>Our Founder</h1>
            <img className="founderimg" src={propic_small}/>
        </div>
    )
}

export default About