import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard.js'
// import { NavLink } from "react-router-dom";

function Menu () { 
    const [drinks, setDrinks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(data => setDrinks(data))
      },[])
      const  drink = drinks.map(drink =>  <ItemCard drink={drink}/>)
   

return(
    <div>
        <div>
        <h1>Menu</h1>
        </div>
        {/* <li className="relative">
                        <div className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out">
                            <NavLink to="/edit-menu">Edit Menu</NavLink>
                        </div>
                    </li> */}
        <div>
           {drink}
        </div>
    </div>
)

}

export default Menu;