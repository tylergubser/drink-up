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
    <div>
        <p>{order.drink.name}</p>
        <p>{order.name}</p>
        <p>{order.id}</p>
        <button onClick={handleOrder}>Order Complete</button>
    </div>


)




}

export default OrderCard;