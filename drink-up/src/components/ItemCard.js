import React from "react";

function ItemCard({drink}) {
    
    
   console.log(drink)

    
    return (
        <div>
            <h1>{drink.name}</h1>
            <image src={drink.image}></image>
            <p>{drink.price}</p>
        </div>
        
    )

}

export default ItemCard;