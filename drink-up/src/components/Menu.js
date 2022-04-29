import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard.js'


function Menu () { 
    const [drinks, setDrinks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(data => setDrinks(data))
      },[])

      console.log(drinks)
      const  drink = drinks.map(drink =>  <ItemCard drink={drink}/>)
   

return(
    <div>
        <div>
        <h1>Menu</h1>
        </div>
        
        <div>
           {drink}
        </div>
    </div>
)

}

export default Menu;