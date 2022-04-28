import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard.js'

function Orders () {
    const [orders, setOrders ] = useState([])
    
    
    useEffect(() => {
        
        fetch('http://localhost:3000/orders')
        .then(resp => resp.json())
        .then(data => setOrders(data))
    },[])

    const  order = orders.map( order =>
        <OrderCard order={order}/>
    )
    
    return(
        <div>
            <h1>Orders</h1>
            {order}
        </div>
    )

}

export default Orders;