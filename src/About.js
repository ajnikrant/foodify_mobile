import React from 'react';
import propic_small from './assets/propic_small.png'
import smallLogo from './assets/smallLogo.png'


function About(){
    return(
        <div className="about container">
            <div className="firstAboutRow row">
                <div className=" col-sm-6">
                    <img src={smallLogo} alt="tasty, healthy food!" />
                </div>
                <div className="aboutBlurb col-sm-6">
                    <h3>About Foodify</h3>
                    <br></br>
                    <p>Foodify is where hand-prepared healthy meals are delivered fresh to you! In a world where time is short and healthy meal options can be difficult to find, 
                    Foodfy strives to provide healthy options with the convenience of delivery. As food sensitivities and allergies skyrocket across the United States, 
                    Foodify provides filtering options to help highlight meals containing ingredients that you want to avoid, so you feel confident about what you eat. 
                     </p>
                </div>
            </div>
            <div className="secondAboutRow row">
                <div className="founder col-sm-6">
                    <h3>Our Founder</h3>
                    <br></br>
                    <p>
                        Amanda Nikrant was first introduced to allergen-aware cooking in 2011 when she was first diagnosed with an unusual food allergy. 
                        From that time on, her love of cooking coupled with her knowlege of nutrition sparked a passion
                        for helping others with food sensitivities or allergies order safe meals that are absolutely delicious. 
                    </p>
                </div>
                <div className="amandaPic col-sm-6">
                    <img id="founderimg" src={propic_small}/>
                </div>
            </div>
        </div>
    )
}

export default About