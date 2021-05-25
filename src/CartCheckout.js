import React from 'react';

function CartCheckout({priceChange, handleCheckout}){
    const tax=1.43
    return(
        <form className="row g-3" onSubmit={handleCheckout} >
            <div className="col-12">
                <label for="inputAddress" className="form-label">Subtotal</label>
                <input type="text" className="form-control" id="inputAddress" value={`$${priceChange}.00`}/>
            </div>
            {/* <div className="col-md-6">
                <label for="inputEmail4" className="form-label">Card Number</label>
                <input type="email" className="form-control" id="inputEmail4"/>
            </div>
            <div className="col-md-6">
                <label for="inputPassword4" className="form-label">Exp</label>
                <input type="password" className="form-control" id="inputPassword4"/>
            </div> */}
            <div className="col-12">
                <label for="inputAddress" className="form-label">Tax</label>
                <input type="text" className="form-control" id="inputAddress" placeholder="Tax" value={`$${tax}`}/>
            </div>
            <div className="col-12">
                <label for="inputAddress2" className="form-label">Final Total</label>
                <input type="text" className="form-control" id="inputAddress2" value={`$${priceChange + tax}`}/>
            </div>
            {/* <div className="col-md-6">
                <label for="inputCity" className="form-label">City</label>
                <input type="text" className="form-control" id="inputCity"/>
            </div>
            <div className="col-md-4">
                <label for="inputState" className="form-label">State</label>
                <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div className="col-md-2">
                <label for="inputZip" className="form-label">Zip</label>
                <input type="text" className="form-control" id="inputZip"/>
            </div>
            <div className="col-12">
            <div className="form-check">
                <input className="form-check-input" type="checkbox" id="gridCheck"/>
                <label className="form-check-label" for="gridCheck">
                Check me out
                </label>
            </div>
            </div> */}
            <div className="col-12">
                <button type="submit" className="btn btn-primary">Complete Purchase</button>
            </div>
      </form>
    )
}

export default CartCheckout