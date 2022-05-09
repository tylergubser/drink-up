import React from 'react';
import { GiMartini } from 'react-icons/gi';

function OrderCard({order, setOrders, orders, completedOrders, setCompletedOrders}) {

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

    function onReorder(order) {
        const already = completedOrders.find( thing => thing.id === order.id)
        already ? alert("already completed")  : setCompletedOrders([...completedOrders, order])
       
       }
    // function addToCompOrders(order) {
    // setCompletedOrders([...completedOrders,order])

    // }
    
      function handleOrder(event) {
        event.preventDefault();
    
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
        removeOrders(order)
        onReorder(order)
    }

return(
    <div className="relative block mb-4 bg-red-900 group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-30 w-2/5  ">
        <button type="button" onClick={deleteOrder}>Picked Up</button>
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <div className="text-2xl font-bold text-white">{order.drink.name}</div>
        </div>
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <div className="text-2xl font-bold text-white">{order.name}</div>
        </div>
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <div className="text-2xl font-bold text-white">{order.id}</div>
        </div>
        <button type="button" onClick={handleOrder}>Order Complete<GiMartini/></button> 
    </div>


)




}

export default OrderCard;