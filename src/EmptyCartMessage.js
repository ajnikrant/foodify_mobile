import React from 'react';
import { useHistory } from 'react-router-dom'


function EmptyCartMesage({setCheckedOut}){
    const history = useHistory()


    function handleMenuClick(){
        setCheckedOut(true)
        history.push("/meals")
    }

    function handleClick(){
        setCheckedOut(true)
        history.push("/carts/completed")

    }

    return (
        <>
        <br></br>
        <h3>Thank You For Your Purchase</h3>
        <br></br>
        {/* <h3>Your Cart is Currently Empty</h3> */}
        <br></br>
        <button onClick={handleMenuClick} className="btn btn-info">Go See Menu Items</button>
        <br></br>
        <br></br>
        <button onClick={handleClick} className="btn btn-warning">See Purchase History</button>
        </>
    )
}

export default EmptyCartMesage