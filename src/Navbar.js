import React from 'react';
import { NavLink } from "react-router-dom";

function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
            <ul className="navbar-nav">
              <li class="nav-item">
               <NavLink className="nav-link" to="/" exact > Home </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/meals" exact> Menu </NavLink>
              </li>
              <li className="nav-item">
               <NavLink className="nav-link" to="/cart/:id" exact> See Your Cart </NavLink>
              </li>
            {/* <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            </ul>
          </div>
        </div>
      </nav>
    )

}

export default Navbar