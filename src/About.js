import React from 'react';
import propic_small from './assets/propic_small.png'
import smallLogo from './assets/smallLogo.png'


function About(){
    return(
        <div className="about container">
            <div className="row">
                <h3>About Foodify</h3>
                <div className=" col-sm-6">
                    <img src={smallLogo} alt="tasty, healthy food!" />
                </div>
                <div className="col-sm-6">
                    <p>Foodify is where hand-prepared healthy meals are delivered fresh to you! In a world where time is short and healthy meal options can be difficult to find, 
                    Foodfy strives to provide healthy options with the convenience of delivery. As food sensitivities and allergies skyrocket across the United States, 
                    Foodify provides filtering options to help highlight meals containing ingredients that should be avoided. 
                     </p>
                </div>
            </div>
            <div className="row">
                <h3>Our Founder</h3>
                <div className="col-sm-6">
                    founder description
                </div>
                <div className=" col-sm-6">
                    <img className="founderimg" src={propic_small}/>
                </div>
            </div>
        </div>
    )
}

export default About