import React from 'react';
import { useHistory } from 'react-router-dom'


function EmptyCartMesage({setCheckedOut}){
    const history = useHistory()


    function handleClick(){
        console.log("CLICK")
        setCheckedOut(true)
        history.push("/meals")
    }

    return (
        <>
        <br></br>
        <h3>Thank You For Your Purchase</h3>
        <br></br>
        {/* <h3>Your Cart is Currently Empty</h3> */}
        <br></br>
        <button onClick={handleClick} className="btn btn-primary">Go See Menu Items</button>
        </>
    )
}

export default EmptyCartMesage