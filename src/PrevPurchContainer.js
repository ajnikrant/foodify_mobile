import React from 'react' 
import PreviousPurchases from './PreviousPurchases';


function PrevPurchContainer({userCarts}){

    const renderPreviousPurchases = userCarts.filter(cart => cart.checkedout===true).map(cart => <PreviousPurchases key={cart.id} cart={cart}/>)

    return (
        <div className="prevpurch continer">
            <h2>Previous Purchases</h2>
            <br></br>
            <br></br>
            {renderPreviousPurchases}
        </div>
    )

}

export default PrevPurchContainer 