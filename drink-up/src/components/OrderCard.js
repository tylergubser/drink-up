import React, { useState } from 'react';
import { GiMartini } from 'react-icons/gi';

function OrderCard({order, setOrders, orders, completedOrders, setCompletedOrders}) {
    const [made, setMade] = useState(order.made)
   
    function deleteOrder(e) {
        e.preventDefault();
        fetch(`http://localhost:3000/orders/${order.id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then((data) => setOrders(data))
    //   addToCompOrders(order)
      removeOrders(order)
    }
      
    function removeOrders(order) {
    const   newOrderlist = orders.filter((thing) => thing.id !== order.id)
    setOrders(newOrderlist)
    }

   
    function updateOrder(order) {

        fetch(`http://localhost:3000/orders/${order.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            made: true
        }),
          }) 
          .then((r) => r.json())
          .then((data) => setMade(data.made))
    
    }
    
      function handleOrder(event) {
        // event.preventDefault();
    
        let smsObj = {
            mobile_number: '1' + order.phone_number,
            message: `Your order is complete Order Number ${order.id}`,
        }
       
        fetch('http://localhost:3000/sms_messages/', {
            method:'POST',
            headers: {
                'content-type': 'application/json',
                accepts: "application/json"
            },
            body: JSON.stringify(smsObj)
        })
        .then(resp => resp.json())
        .then(resp => console.log(resp))
        updateOrder(order)
        
    }

return(
    made ?  
    <div className="relative block mb-4  bg-red-900 group rounded-lg  flex space-y-6 flex-col flex-wrap p-10 box-border h-80 w-80 "> 
        <button className="text-1xl font-bold text-white" type="button" onClick={deleteOrder}>Picked Up</button>
        <label className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.drink.name}</p>
        </label>
        <label className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">Order #{order.id}</p>
        </label>
        <button className="text-1xl font-bold text-white" type="button" onClick={handleOrder}>Order Complete<GiMartini/></button> 
    </div> :

    <div className="relative block mb-4 bg-green-500 group rounded-lg flex space-y-6 flex-col flex-wrap p-10 box-border h-80 w-80  "> 
        <button className="text-1xl font-bold text-white" type="button" onClick={deleteOrder}>Picked Up</button>
        <label className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.drink.name}</p>
        </label>
        <label className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-red-900">Order #{order.id}</p>
        </label>
        <button className="text-1xl font-bold text-white" type="button" onClick={handleOrder}>Order Complete<GiMartini/></button> 
    </div> 


)




}

export default OrderCard;