import React from "react"
import { useHistory } from 'react-router-dom'
import justLogoText from './assets/justLogoText.png'

function Banner(){
    const history = useHistory()

    function handleClick(){
        history.push("/")
    }

    return(
        <div className="bannerLogo">
            <img onClick={handleClick} className="bannerlogo" src={justLogoText} />
        </div>
    )
}

export default Banner