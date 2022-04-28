import React from "react";

function ItemCard({drink}) {
    
    
   

    
    return (
        <div>
            <h1>{drink.name}</h1>
            <image>{drink.image}</image>
            <p>{drink.price}</p>
        </div>
        
    )

}

export default ItemCard;