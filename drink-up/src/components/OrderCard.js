import React from 'react';

function OrderCard({order}) {


return(
    <div>
        <p>{order.drink}</p>
        <p>{order.name}</p>
        <p>{order.id}</p>
    </div>


)




}

export default OrderCard;