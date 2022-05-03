import React from "react";

function ItemCard({drink}) {
    
    
   console.log(drink.image)

    
    return (
        <div>
            <h1>{drink.name}</h1>
            
            <img src={drink.image} alt={drink.name}/>
            
            <p>{drink.price}</p>
        </div>
        
    )

}

export default ItemCard;