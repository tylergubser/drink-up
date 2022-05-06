import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard.js'



function Menu ({isUser, menuButton, setPhone}) { 
    const [drinks, setDrinks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(data => setDrinks(data))
      },[])

      console.log(drinks)
      const  drink = drinks.map(drink =>  <ItemCard key={drink.id} drink={drink} isUser={isUser} setPhone={setPhone}/>)
   

return(
    menuButton ? 
<div>
    <div>
        <h1>Menu</h1>
    </div>
    <div>
        {drink}
    </div>
    </div>
    : 
    <div>
        <h1>We are not taking any orders at this time</h1>
    </div>
)

}

export default Menu;