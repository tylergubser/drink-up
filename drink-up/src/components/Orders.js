import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard.js'


function Orders () {
    const [orders, setOrders ] = useState([])
    const [completedOrders, setCompletedOrders] = useState([])
    
    useEffect(() => {
        
        fetch('http://localhost:3000/orders')
        .then(resp => resp.json())
        .then(data => setOrders(data))
    },[])

    // function deleteOrder() {
    //     fetch("http://localhost:3000/orders", {
    //         method: "DELETE",
    //       })}
        //   .then((r) => r.json())
        //   .then((data) => setOrders(data))}

    

    // const  order = orders.map( order =>
    //     <OrderCard order={order} key={order.id} setOrders={setOrders}/>
    // )
    console.log(orders)
    return(
        <div className="float-container ">
            
            <p className="text-black text-center text-2xl font-bold  ">Orders</p>
            <div className=" float-child h-screen grid gap-4 grid-cols-4 flex-wrap ">
                
                    {orders.length >= 1 ?
                    orders.map( order =>
                    <OrderCard order={order} key={order.id} setOrders={setOrders} orders={orders}/>
                    ) :
                    <div className="text-black text-center text-1xl font-bold">No Orders Yet</div>
                    }
            </div>
            {/* <div className="float-child-2 h-screen">
                <h1 className="text-black text-center text-2xl font-bold">Completed Orders</h1>
                {completedOrders.length >= 1 ?
                    completedOrders.map( order =>
                    <OrderCard order={order} key={order.id} setOrders={setOrders} orders={orders} completedOrders={completedOrders} setCompletedOrders={setCompletedOrders}/>
                    ) :
                    <h1 className="text-black text-center text-1xl font-bold">No Orders Yet</h1>
                    }
            </div>
            */}
        </div>
    )

}

export default Orders;