import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard.js'

function Orders () {
    const [orders, setOrders ] = useState([])
    
    
    useEffect(() => {
        
        fetch('http://localhost:3000/orders')
        .then(resp => resp.json())
        .then(data => setOrders(data))
    },[])

    

    // const  order = orders.map( order =>
    //     <OrderCard order={order} key={order.id} setOrders={setOrders}/>
    // )
    console.log(orders)
    return(
        <div>
            <h1>Orders</h1>
            {orders.length >= 1 ?
            orders.map( order =>
                <OrderCard order={order} key={order.id} setOrders={setOrders} />
            ) :
            <h1>No Orders Yet</h1>
            }
           
        </div>
    )

}

export default Orders;