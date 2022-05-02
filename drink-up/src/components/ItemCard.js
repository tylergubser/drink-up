import React from "react";

function ItemCard({drink}) {
    
    
   console.log(drink)

    
    return (
        <div>
            <h1>{drink.name}</h1>
            <div>
            <img src={drink.image} alt={drink.name}/>
            </div>
            <p>{drink.price}</p>
        </div>
        
    )

}

export default ItemCard;