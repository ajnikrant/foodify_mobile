import React from 'react';

function CartCheckout({priceChange}){
    const tax=1.43
    return(
        <form class="row g-3">
            <div class="col-12">
                <label for="inputAddress" class="form-label">Subtotal</label>
                <input type="text" class="form-control" id="inputAddress" value={`$${priceChange}.00`}/>
            </div>
            {/* <div class="col-md-6">
                <label for="inputEmail4" class="form-label">Card Number</label>
                <input type="email" class="form-control" id="inputEmail4"/>
            </div>
            <div class="col-md-6">
                <label for="inputPassword4" class="form-label">Exp</label>
                <input type="password" class="form-control" id="inputPassword4"/>
            </div> */}
            <div class="col-12">
                <label for="inputAddress" class="form-label">Tax</label>
                <input type="text" class="form-control" id="inputAddress" placeholder="Tax" value={`$${tax}`}/>
            </div>
            <div class="col-12">
                <label for="inputAddress2" class="form-label">Final Total</label>
                <input type="text" class="form-control" id="inputAddress2" value={`$${priceChange + tax}`}/>
            </div>
            {/* <div class="col-md-6">
                <label for="inputCity" class="form-label">City</label>
                <input type="text" class="form-control" id="inputCity"/>
            </div>
            <div class="col-md-4">
                <label for="inputState" class="form-label">State</label>
                <select id="inputState" class="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                </select>
            </div>
            <div class="col-md-2">
                <label for="inputZip" class="form-label">Zip</label>
                <input type="text" class="form-control" id="inputZip"/>
            </div>
            <div class="col-12">
            <div class="form-check">
                <input class="form-check-input" type="checkbox" id="gridCheck"/>
                <label class="form-check-label" for="gridCheck">
                Check me out
                </label>
            </div>
            </div> */}
            <div class="col-12">
                <button type="submit" class="btn btn-primary">Complete Purchase</button>
            </div>
      </form>
    )
}

export default CartCheckout