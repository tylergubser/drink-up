import React, {useState, useEffect} from 'react';
import ItemCard from './ItemCard.js'



function Menu ({isUser, setPhone, menu, isAuthenticated}) { 
    const [drinks, setDrinks] = useState([])
    
    useEffect(() => {
        fetch('http://localhost:3000/drinks')
        .then(resp => resp.json())
        .then(data => setDrinks(data))
      },[])

      console.log(menu)
      const  drink = drinks.map(drink =>  <ItemCard key={drink.id} drink={drink} isUser={isUser} setPhone={setPhone} isAuthenticated={isAuthenticated} drinks={drinks} setDrinks={setDrinks}/>)
   

return(
   menu.active ? 
<div >
    <div>
        <h1 className="text-2xl font-bold text-black text-center bg-slate-300">Menu</h1>
    </div>
    <div className="grid gap-4 grid-cols-3 w-50  drop-shadow-2xl bg-slate-300">
        {drink}
    </div>
</div>
    : 
    <div className="h-screen w-screen bg-cover img bg-[url('https://media3.giphy.com/media/ccRN9H1zx8KSgUPgyD/giphy.gif')]">
        <h1 className="h-full w-full text-2xl font-bold text-white text-center">We are not taking any orders at this time</h1>
    </div>
)

}

export default Menu;