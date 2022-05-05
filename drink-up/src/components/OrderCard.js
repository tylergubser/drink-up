import React from 'react';

function OrderCard({order, setOrders}) {

function handleOrder() {
    fetch(`http://localhost:3000/orders/${order.id}`, {
        method: "DELETE",
      })
      .then((r) => r.json())
      .then((data) => setOrders(data))
}

return(
    <div className="relative block mb-4 bg-red-800 group rounded-lg flex space-y-6  flex-wrap p-10 box-border h-50 w-40  ">
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.drink.name}</p>
        </div>
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.name}</p>
        </div>
        <div className="sm:inline-flex sm:items-center sm:shrink-0">
        <p className="text-2xl font-bold text-white">{order.id}</p>
        </div>
        <button type="button" onClick={handleOrder}>Order Complete</button> 
    </div>


)




}

export default OrderCard;