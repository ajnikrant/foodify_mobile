import React from 'react';

function Filter({setHomepageCategory, search, setSearch, allergenSearch, setAllergenSearch}){

    function handleDropDrownSelect(e){
        setHomepageCategory(e.target.value)
    }

    return(
        <div className="filterDiv">
            <label>Narrow Your Selection: </label>
            <br></br>
            <select  onChange={handleDropDrownSelect} className="select">
                <option value="all">All Items</option>
                <option value="lowcarb">Low Carb</option>
                <option value="vegetarian">Vegetarian</option>
                <option value="glutenfree">Gluten Free</option>
                <option value="lowcal">Under 500 Cals</option>
                <option value="vegan">Vegan</option>
                <option value="dairyfree">Dairy Free</option>
                <option value="pescatarian">Pescatarian</option>
                <option value="lowsodium">Low Sodium</option>
                <option value="keto">Keto</option>
            </select>
            <br></br>
            <br></br>

            <label htmlFor="search">Search for Ingredients:</label>
            <br></br>
            <input
                type="text"
                id="search"
                value={search}
                placeholder="Search ingredients..."
                onChange={(e) => setSearch(e.target.value)}
            />
                        <br></br>
                        <br></br>
            <label htmlFor="search">Filter Out Ingredients:</label>
            <div className="filterKey">
                <p id="redWord">*Red highlighted </p><p>cards contain Ingredient</p>
            </div>
            <br></br>
            <input
                type="text"
                id="search"
                value={allergenSearch}
                placeholder="Search ingredients..."
                onChange={(e) => setAllergenSearch(e.target.value)}
            />
        </div>

    )

}

export default Filter