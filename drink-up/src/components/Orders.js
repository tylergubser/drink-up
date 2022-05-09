import React, { useState, useEffect } from 'react';
import OrderCard from './OrderCard.js'


function Orders () {
    const [orders, setOrders ] = useState([])
    
    
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
        <div className="float-container">
            
            <div className="float-child h-screen ">
                <h1 className="text-black text-center text-2xl font-bold">Orders</h1>
                    {orders.length >= 1 ?
                    orders.map( order =>
                    <OrderCard order={order} key={order.id} setOrders={setOrders} />
                    ) :
                    <h1 className="text-black text-center text-1xl font-bold">No Orders Yet</h1>
                    }
            </div>
            <div className="float-child-2 h-screen">
                <h1 className="text-black text-center text-2xl font-bold">Completed Orders</h1>
                {/* <h3><button className=" font-bold
                            h-10
                            px-5
                            text-indigo-100
                            bg-red-900
                            rounded-lg
                            transition-colors
                            duration-150
                            uppercase
                            focus:shadow-outline
                            hover:bg-blue-800
                        " onClick={deleteOrder()}>Delete Orders</button></h3> */}
            </div>
           
        </div>
    )

}

export default Orders;