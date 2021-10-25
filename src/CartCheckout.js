import React from 'react';

function CartCheckout({priceChange, handleCheckout}){
    let tax= Number(parseInt(priceChange) * 0.02).toFixed(2)
    let finalTotal= Number(parseInt(priceChange) + parseFloat(tax)).toFixed(2)

    function handleSubmit(e){
        handleCheckout(e, finalTotal)
    }
    return(
        <form className="row g-3" onSubmit={handleSubmit} >
            <div className="col-12">
                <label for="inputAddress" className="form-label">Subtotal</label>
                <input type="text" className="form-control" id="inputAddress" value={`$${priceChange}.00`}/>
            </div>
            <div className="col-12">
                <label for="inputAddress" className="form-label">Tax</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Tax" value={`$${tax}`}/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Final Total</label>
                <input type="text" className="form-control" id="inputAddress2" value={`$${finalTotal}`}/>
            </div>
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Complete Purchase</button>
            </div>
      </form>
    )
}

export default CartCheckout