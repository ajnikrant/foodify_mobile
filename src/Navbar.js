import React from 'react';
import { NavLink } from "react-router-dom";
import justLogoIcon from './assets/justLogoIcon.png'


function Navbar({currentCart}){

  function orderCount(){
      if (currentCart.orders.length === 0 ){
        return 0
      }
      else {return (currentCart.orders.length)}
  }
  console.log(currentCart.orders.length)
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarToggler" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          <div className="collapse navbar-collapse justify-content-between mb-0 h3" id="navbarToggler">
            <ul className="navbar-nav flex-nowrap">
              <li className="nav-item">
                <NavLink className="navbar-brand" to="/" exact >
                    <img src={justLogoIcon} alt="logo icon" width="45" height="40" className="d-inline-block align-text-top"/>
                </NavLink>
              </li>
              <li className="nav-item" id="text">
               <NavLink activeClassName="nav-link active" className="nav-link" to="/" exact > Home </NavLink>
              </li>
              <li className="nav-item" id="text">
                <NavLink activeClassName="nav-link active" className="nav-link" to="/about" exact> About </NavLink>
              </li>
              <li className="nav-item" id="text">
                <NavLink activeClassName="nav-link active" className="nav-link" to="/meals" exact> Menu </NavLink>
              </li>
              </ul>
              <ul className="navbar-nav ms-auto flex-nowrap">
                <li className="nav-item" id="text">
                  <NavLink activeClassName="nav-link active" className="nav-link" to="/carts/completed" exact > Orders </NavLink>
                </li>
                <li className="nav-item ">
                  <NavLink activeClassName="nav-link active" className="nav-link" to="/cart/:id" exact> 
                  {/* image for the cart */}
                  <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/> 
                  </svg> 
                    <span class="badge rounded-pill bg-danger">{orderCount()}</span>               
                  </NavLink>
                </li>
              </ul>
          </div>
        </div>
      </nav>
    )

}

export default Navbar